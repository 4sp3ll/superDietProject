import React, {} from 'react'
import {Button, Spinner} from 'reactstrap'
import SearchFilteredProductsApi from '../../../api/searchFilteredProductsApi'
import {connect, useDispatch} from 'react-redux'
import allActions from '../../../actions/index'
import axios from 'axios'

type Props = {
    loading: boolean,
    minCarbo: string,
    minProtein: string
}


const FindButton: React.FC<Props> = (props: Props) => {

    const isLoading = props.loading
    const minCarbo = props.minCarbo
    const minProtein = props.minProtein
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
                onClick={() => SearchFilteredProductsApi(minCarbo, minProtein, dispatch)}
                // onClick={() => {
                //     dispatch(allActions.searchEngineBegin());
                //     axios.get(`${process.env.REACT_APP_API}/cgi/search.pl?action=process&json=true&nutriment_0=carbohydrates&nutriment_compare_0=lt&nutriment_value_0=50`)
                //     // &${userRequestString}
                //         .then(response => dispatch(allActions.searchEngineSuccess(response)))
                //         .catch((error: string) => dispatch(allActions.searchEngineError(error)))
                // }}
                // onClick={() => SearchFilteredProductsApi()}
            >
                Search
            </Button>
            }
    </div>
    )
}

interface StateProps {
    filtersSearchEngine: any,
    minCarbo: string,
    minProtein: string,
    apiSearchEngineReducer: {
        loading: boolean
    }
}

const mapStateToProps = (state: StateProps) => ({
    loading: state.apiSearchEngineReducer.loading,
    minCarbo: state.filtersSearchEngine.minCarbo,
    minProtein: state.filtersSearchEngine.minProtein

})

export default connect(mapStateToProps)(FindButton)