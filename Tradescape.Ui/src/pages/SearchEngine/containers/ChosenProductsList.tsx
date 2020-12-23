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

    const isThere = (el: string) => el ? el : ''

    return (
        <>
            {isLoading ? <Spinner animation="border" /> : null}
            {products !== null ? products.data.products.map((element: any) =>
                <tr id={element.id}>
                    <th>
                        <button>+</button>
                    </th>
                    <th style={{padding: '9px 5px 9px 5px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <img src={`${element.image_front_thumb_url}`}/>
                    </th>
                    <th style={{padding: '9px 5px 9px 5px'}}>{`${element.product_name} - ${isThere(element.brands)} ${isThere(element.serving_size)}`}</th>
                    <th style={{padding: '9px 5px 9px 5px'}}>
                        {`${element.nutriments.carbohydrates_100g}g`}
                        <br/>
                        {`including`}
                        <br/>
                        {`sugar: ${element.nutriments.sugars_100g}g`}
                    </th>
                    <th style={{padding: '9px 5px 9px 5px'}}>{`${element.nutriments.proteins_100g}g`}</th>
                    <th style={{padding: '9px 5px 9px 5px'}}>{`${element.nutriments.fat_100g}g`}</th>
                    <th style={{padding: '9px 5px 9px 5px'}}>{`${element.nutriments.salt}g`}</th>
                    <th style={{padding: '9px 5px 9px 5px'}}>{isThere(element.nutriments.fiber_value)}</th>
                    <th style={{padding: '9px 5px 9px 5px'}}>{`${(element.allergens).replace('en:', '').replace(',en:', '')}`}</th>
                    {/* <th style={{padding: '9px 5px 9px 5px'}}>
                        {`${element.stores_tags.length !== undefined ? (element.stores_tags).replace(',', ', ') : null}`}
                    </th> */}
                    <th style={{padding: '9px 5px 9px 5px'}}>
                        {`${element.stores_tags}`}
                    </th>
                    <th style={{padding: '9px 5px 9px 5px'}}><div style={{ position: "relative", }}>{mobileState ? <AdditionalOptionsButtonMobile/> : <AdditionalOptionsButton/> }</div></th>
                </tr>
                )
                : null}
        </>
    )
}

export default ChosenProductsList