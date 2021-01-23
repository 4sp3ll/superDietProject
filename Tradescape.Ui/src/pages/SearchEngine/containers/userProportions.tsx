import React, { Component } from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'

interface Props {
    userProportions: any
}
interface State {

}

class Proportions extends Component<Props, State> {


    render() {

        const { userProportions } = this.props

        return (
            <div>
                {userProportions}
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        userProportions: state.firestore.ordered.userProportions ||  state.yourProportions
    }
}

export default compose<any>(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'userProportions'}
    ])
)(Proportions)
