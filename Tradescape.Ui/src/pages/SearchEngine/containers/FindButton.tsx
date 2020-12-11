import React, {} from 'react'
import {Button, Spinner} from 'reactstrap'
import SearchFilteredProductsApi from '../../../api/SearchFilteredProductsApi'
import {connect} from 'react-redux'

type Props = Readonly<{
    apiSearchEngineReducer: any,
    loading?: boolean
}>


const FindButton: React.FC<Props> = (props: Props) => {

    const isLoading = props.apiSearchEngineReducer.loading


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
                onClick={() => SearchFilteredProductsApi()}
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