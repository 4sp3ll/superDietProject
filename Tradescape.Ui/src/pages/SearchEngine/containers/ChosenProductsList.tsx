import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import AdditionalOptionsButton from '../components/AdditionalOptionsButton'
import AdditionalOptionsButtonMobile from '../components/AdditionalOptionsButtonMobile'
import {Spinner} from 'reactstrap'

interface State {
    state: object,
    apiSearchEngineReducer: any,     // do poprawy
    currentState: object | null,
    data: object,
    products: object,
    loading: boolean
}


const ChosenProductsList = () => {
    const [mobileState, setMobileState] = useState(false)

    const products = useSelector((state: State) => state.apiSearchEngineReducer.currentState)
    const isLoading = useSelector((state: State) => state.apiSearchEngineReducer.loading)

    if (window.innerWidth < 600 && mobileState !== true) {
        setMobileState(true)
    } else if (window.innerWidth >= 600 && mobileState !== false)  {
        setMobileState(false)
    }

    // const englishThumb = (element: any) => element.en ? element.en : element[Object.keys(element)[0]]

    const isThere = (el: string) => el ? el : ''

    return (
        <>
            {isLoading ? <Spinner animation="border" /> : null}
            {products !== null ? products.data.products.map((element: any) =>

                <tr id={element.id}>
                    <th style={{padding: '9px 5px 9px 5px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        {/* <img src={`${englishThumb(element.selected_images.front.thumb)}`}/> */}
                        <img src={`${element.image_front_thumb_url}`}/>
                    </th>
                    <th style={{padding: '9px 5px 9px 5px'}}>{`${element.product_name} - ${isThere(element.brands)} ${isThere(element.serving_size)}`}</th>
                    <th style={{padding: '9px 5px 9px 5px'}}>
                        {`${element.nutriments.carbohydrates_100g}g (including sugars: ${element.nutriments.sugars_100g}g)`}
                        </th>
                    <th style={{padding: '9px 5px 9px 5px'}}>{``}</th>
                    <th style={{padding: '9px 5px 9px 5px'}}>{``}</th>
                    <th style={{padding: '9px 5px 9px 5px'}}>{``}</th>
                    <th style={{padding: '9px 5px 9px 5px'}}><div style={{ position: "relative", }}>{mobileState ? <AdditionalOptionsButtonMobile/> : <AdditionalOptionsButton/> }</div></th>
                </tr>
                )
                : null}
        </>
    )
}

export default ChosenProductsList