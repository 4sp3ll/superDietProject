import React, {} from 'react'
import {Button, Spinner} from 'reactstrap'
import SearchFilteredProductsApi from '../../../api/searchFilteredProductsApi'
import {connect, useDispatch} from 'react-redux'
import allActions from '../../../actions/index'
import axios from 'axios'

type Props = Readonly<{
    apiSearchEngineReducer: any,
    loading?: boolean
}>


const FindButton: React.FC<Props> = (props: Props) => {

    const isLoading = props.apiSearchEngineReducer.loading


    const dispatch = useDispatch()

    return (
    <div>
        {
            isLoading ?

            <Button
            color="success"
            style={{ width: "100px", height: "40px", fontSize: "15px", backgroundColor: "#f87320" }}
            disabled
            >
            <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
                />
                &nbsp;Loading...
            </Button>
            :
            <Button
                color="success"
                style={{ width: "100px", height: "40px", fontSize: "15px", backgroundColor: "#f87320" }}
                // do zmiany, nie powinien być zwracany cały store
                // onClick={() => searchFilteredProductsApi()}
                onClick={() => {
                    dispatch(allActions.searchEngineBegin());
                    axios.get(`${process.env.REACT_APP_API}/cgi/search.pl?action=process&json=true&nutriment_0=carbohydrates&nutriment_compare_0=lt&nutriment_value_0=50`)
                    // &${userRequestString}
                        .then(response => dispatch(allActions.searchEngineSuccess(response)))
                        .catch((error: string) => dispatch(allActions.searchEngineError(error)))
                }}
                // onClick={() => SearchFilteredProductsApi()}
            >
                Search
            </Button>
            }
    </div>
    )
}

interface StateProps {
    apiSearchEngineReducer: {
        loading: boolean
    }
}

const mapStateToProps = (state: StateProps) => ({
    apiSearchEngineReducer: state.apiSearchEngineReducer.loading
})

export default connect(mapStateToProps)(FindButton)