import React, { ReactElement, useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import styled from 'styled-components'
import ToggleComponent from '../../../ui/Toggle'
import deleteProduct from '../../../firebase/deleteProduct'
import deleteDate from '../../../firebase/deleteDate'
import updateProductQuantity from '../../../firebase/updateProductQuantity'

interface Props {
    id: string,
    productName: string,
    thumbnail: string,
    quantity: number,
    index: number,
    carbs: number
    proteins: number,
    fat: number,
    salt: number,
    kcal: number,
    stores: Array<string>,
    date: string,
    uid: string,
    dateElement: any
}

const Center = styled.div`{
    display: flex;
    justify-content: center;
    align-items: center;
}`

export default function ProductElement(props: Props): ReactElement {

    const {
        id,
        productName,
        thumbnail,
        quantity,
        index,
        carbs,
        proteins,
        fat,
        salt,
        kcal,
        stores,
        date,
        uid,
        dateElement
    } = props

    const [quantityStatus, setQuantityStatus]: any = useState(true)
    const [inputValue, setInputValue] = useState<number>()

    const [photoStatus, setPhotoStatus] = useState(false)
    const [show, setShow] = useState(false)

    const updateQuantityValue = () => {
        setQuantityStatus((prevState: boolean) => !prevState);
        !quantityStatus && updateProductQuantity(date, id, uid, inputValue)
    }

    const handlePhotoLoading = () => {
        if (photoStatus && !show) {
            setShow(true)
        } else if (photoStatus && show) {
            return null
        } else {
            return <Center><Spinner animation="border" size='sm'/></Center>
        }
    }

    const handleChangeQuantity = (quantity: number, index: number) => {
        if (quantityStatus) {
            return `${quantity}g`
        } else {
           return (
           <input
           value={inputValue}
           key={index}
           onChange={(e: any) => setInputValue(e.target.value)}
           onKeyPress={(e: any) => { if (e.charCode == 13) {
            updateQuantityValue()
           }}}
           />
           )
        }
    }

    return (
        <>
        <tr key={id}>
        <th scope="row">
            {handlePhotoLoading()}
            <img
            alt='Product thumbnail'
            style={{height: '50px'}}
            src={thumbnail}
            onLoad={() => setPhotoStatus(true)}
            className='journal-product-thumbnail-photo'
            />
        </th>
        <td>{productName}</td>
        <td >{handleChangeQuantity(quantity, index)}</td>
        <td>{carbs}</td>
        <td>{proteins}</td>
        <td>{fat}</td>
        <td>{salt}</td>
        <td>{kcal}</td>
        <td>
            <ToggleComponent
            variant='orange-light'
            content={<ul style={{padding: '0'}}>{stores.map((e: string) => <li style={{ listStyle: 'none'}}>{e}</li>)}</ul>}
            name='shops'
            afterClickName='show less'
            size='sm'
            type='card'
            />
        </td>
        <td style={{width: '20%'}}>

        <Button
        onClick={() => {
            updateQuantityValue()
        }}
        style={{margin: '1rem'}}
        size='sm'>
            {quantityStatus ? 'Change' : 'Save changes'}
        </Button>

        <Button
        className='deleteDate'
        size='sm'
        onClick={()=> dateElement.length < 2 ? deleteDate(date, uid) : deleteProduct(date, id, uid)}>
            Remove
        </Button>
        </td>
        </tr>
        </>
    )
}
