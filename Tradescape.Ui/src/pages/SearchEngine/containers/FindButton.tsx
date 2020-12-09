import React, {} from 'react'
import {Button, Spinner} from 'reactstrap'
import { FetchFilters } from './CategoriesAsync'
import {connect} from 'react-redux'

type Props = Readonly<{
    apiAnswer: any,
    loading?: boolean
}>


const FindButton: React.FC<Props> = (props: Props) => {

    const isLoading = props.apiAnswer.loading


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
                onClick={() => FetchFilters()}
            >
                Search
            </Button>
            }
    </div>
    )
}

type StateProps = Readonly<{
    state: object,
    apiAnswer: any,
    loading: boolean
}>

const mapStateToProps = (state: StateProps) => ({
apiAnswer: state.apiAnswer.loading
})

export default connect(mapStateToProps)(FindButton)