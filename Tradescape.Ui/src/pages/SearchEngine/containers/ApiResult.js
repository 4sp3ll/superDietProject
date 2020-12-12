import React from 'react'
import {connect} from 'react-redux'
import AdditionalOptionsButton from '../components/AdditionalOptionsButton'
import AdditionalOptionsButtonMobile from '../components/AdditionalOptionsButtonMobile'
import {Spinner} from 'reactstrap'


const ApiResult = props => {

    const dataV = props.apiSearchEngineReducer.currentState.data
    const isLoading = props.apiSearchEngineReducer.loading
    let isMobile = false

    if (window.innerWidth < 600) {
        isMobile = true
    } else {
        isMobile = false
    }


    return (
        <>
            {isLoading ? <Spinner animation="border" /> : null}
            {/* {dataV ? dataV.items.map(element => */}
            {dataV ? dataV.map(element =>

                <tr id={element.allegroId}>
                    <th style={{padding: '9px 5px 9px 5px'}}>{`${element.name}, ${element.allegroId}`}</th>
                    <th style={{padding: '9px 5px 9px 5px'}}>{`${element.price} zł`}</th>
                    <th style={{padding: '9px 5px 9px 5px'}}>{`0 %`}</th>
                    <th style={{padding: '9px 5px 9px 5px'}}>{`${element.profit} zł`}</th>
                    <th style={{padding: '9px 5px 9px 5px'}}>{`${element.soldAmount} szt.`}</th>
                    <th style={{padding: '9px 5px 9px 5px'}}><div style={{ position: "relative", }}>{isMobile ? <AdditionalOptionsButtonMobile/> : <AdditionalOptionsButton/> }</div></th>
                </tr>
                )
                : null}
        </>
    )
}

const mapStateToProps = state => ({
    apiSearchEngineReducer: state.apiSearchEngineReducer
})

export default connect(mapStateToProps)(ApiResult);