import React, { ReactElement, useState } from 'react'
import styled from 'styled-components'
import { Spinner } from 'react-bootstrap'
import ProductDetails from '../../ProductDetails/containers/ProductDetails'
import AddProduct from './AddProduct'

interface Props {
    index: number,
    element: any
}

const Td = styled.td`{
    text-align: center;
    vertical-align: middle;
}`

const Center = styled.div`{
    display: flex;
    justify-content: center;
    align-items: center;
}`


export default function ProductElement({index, element}: Props): ReactElement {

    const [photoStatus, setPhotoStatus] = useState(false)
    const [show, setShow] = useState(false)


    const isThereNumber = (el: string, digitsAfterDecimal: number) => el !== undefined ? `${Number(el).toFixed(digitsAfterDecimal)}g` : ''
    const isThereString = (el: string) => el ? el : ''

    const handlePhotoLoading = () => {
        if (photoStatus && !show) {
            setShow(true)
        } else if (photoStatus && show) {
            return null
        } else {
            return <Center><Spinner animation="border"  /></Center>
        }
    }

    return (
        <>
        <Td>
            <AddProduct
            productNumber={index}
            />
        </Td>
        <Td >
            {handlePhotoLoading()}
            <img
            style={{maxHeight: '100%', display: 'block', margin: 'auto', visibility: show ? 'visible' : 'hidden'}}
            src={element.image_front_thumb_url}
            onLoad={() => setPhotoStatus(true)}
            className='product-thumbnail-photo'
            />
        </Td>
        <Td>
            {`${element.product_name} - ${isThereString(element.brands)} ${isThereString(element.serving_size)}`}
        </Td>
        <Td>
            {`${isThereNumber(element.nutriments.carbohydrates_100g, 2)}`}
            <br/>
            {`including`}
            <br/>
            {`sugar: ${isThereNumber(element.nutriments.sugars_100g, 1)}`}
        </Td>
        <Td>{`${isThereNumber(element.nutriments.proteins_100g, 2)}`}</Td>
        <Td>{`${isThereNumber(element.nutriments.fat_100g, 2)}`}</Td>
        <Td>{`${isThereNumber(element.nutriments.salt, 1)}`}</Td>
        <Td>{isThereNumber(element.nutriments.fiber_value, 1)}</Td>
        <Td>
            {`${element.allergens_tags ?
            element.allergens_tags.map((e: any) => e ? e.replace('en:', '').replace(',en:', '').replace('de:', '').replace('fr:', '') : null)
            .join(', ') : null}`}
        </Td>
        <Td>
            {`${element.stores_tags ?
                element.stores_tags.map((e: any) => e ? e.replace('en:', '').replace('en: ', ''): null)
                .join(', '): null}`}
        </Td>
        <Td>
            <div style={{ position: "relative", }}>
                <ProductDetails
                productNumber={index}
                />
            </div>
        </Td>
        </>
    )
}
