import { connect } from 'react-redux'
import React from "react"
import { useStore } from 'react-redux'


const ParametersHandler = props => {
    console.log(props.minPriceValue)
}

const mapStateToProps = state => ({
    minPriceValue: state.filtersStore.minPriceValue
})

export default connect(mapStateToProps)(ParametersHandler)
