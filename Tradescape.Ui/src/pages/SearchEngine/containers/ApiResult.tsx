import React from 'react'
import {connect} from 'react-redux'
import AdditionalOptionsButton from '../components/AdditionalOptionsButton'
import AdditionalOptionsButtonMobile from '../components/AdditionalOptionsButtonMobile'
import {Spinner} from 'reactstrap'

interface El {
    element: object,
    selected_images: object,
    front: object,
    thumb: object,
    en: string,
    id: string,
    product_name: string,
}

interface Props {
    apiSearchEngineReducer: {
        currentState: {
            data: {
                products: object[]
            }
        },
        loading: boolean
    }
}


const ApiResult = (props: Props) => {

    // const dataV = props.apiSearchEngineReducer.currentState.data
    const dataV = props.apiSearchEngineReducer.currentState
    const isLoading = props.apiSearchEngineReducer.loading
    let isMobile = false

    if (window.innerWidth < 600) {
        isMobile = true
    } else {
        isMobile = false
    }

    // const englishThumb = (element) => element.hasOwnOProperty("en") ? element.en : element[Object.keys(element)[0]]
    const englishThumb = (element: El) => element.en ? element.en : element[Object.keys(element)[0]]


    return (
        <>
            {isLoading ? <Spinner animation="border" /> : null}
            {dataV !== null ? dataV.data.products.map((element: El) =>

                <tr id={element.id}>
                    <th style={{padding: '9px 5px 9px 5px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><img src={`${englishThumb(element.selected_images.front.thumb)}`}/></th>
                    {/* <th style={{padding: '9px 5px 9px 5px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><img src={`${element.selected_images.front.thumb.fr}`}/></th> */}
                    {/* <th style={{padding: '9px 5px 9px 5px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><img src={`${englishThumb(element.selected_images.front.thumb)}`}/></th> */}
                    <th style={{padding: '9px 5px 9px 5px'}}>{`${element.product_name}`}</th>
                    <th style={{padding: '9px 5px 9px 5px'}}>{``}</th>
                    <th style={{padding: '9px 5px 9px 5px'}}>{``}</th>
                    <th style={{padding: '9px 5px 9px 5px'}}>{``}</th>
                    <th style={{padding: '9px 5px 9px 5px'}}>{``}</th>
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