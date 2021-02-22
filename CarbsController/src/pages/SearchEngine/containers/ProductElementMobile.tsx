import React, { ReactElement, useState } from 'react'
import styled from 'styled-components'
import { Spinner } from 'react-bootstrap'
import AddProduct from './AddProduct'
import ProductDetails from '../../ProductDetails/containers/ProductDetails'

interface Props {
    index: number,
    element: any
}

const Center = styled.div`{
    display: flex;
    justify-content: center;
    align-items: center;
}`

export default function ProductElementMobile({index, element}: Props): ReactElement {

    const [photoStatus, setPhotoStatus] = useState(false)
    const [show, setShow] = useState(false)

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
        <td>
            <AddProduct
            productNumber={index}
            />
        </td>
        <td style={{textAlign: 'center', padding: '.2rem'}} >
            {handlePhotoLoading()}
            <img
            style={{maxHeight: '100%', display: 'block', margin: 'auto', visibility: show ? 'visible' : 'hidden'}}
            src={element.image_front_thumb_url}
            onLoad={() => setPhotoStatus(true)}
            className='product-thumbnail-photo'
            />
        </td>
        <td>{`${element.product_name_en ? element.product_name_en : element.product_name} - ${isThereString(element.brands)} ${isThereString(element.quantity)}`}</td>
        <td  style={{padding:'.5rem'}}>
            <div style={{ position: "relative", }}>
                <ProductDetails
                productNumber={index}
                />
            </div>
        </td>
        </>
    )
}
