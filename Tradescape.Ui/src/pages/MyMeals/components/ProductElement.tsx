import React, { ReactElement, useState } from 'react'
import ToggleComponent from '../../../ui/Toggle'
import { Button } from 'reactstrap'
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

    const updateQuantityValue = () => {
        setQuantityStatus((prevState: boolean) => !prevState);
        !quantityStatus && updateProductQuantity(date, id, uid, inputValue)
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
        <th scope="row"><img src={thumbnail} alt='Product thumbnail' style={{height: '50px'}}/></th>
        <td>{productName}</td>
        <td >{handleChangeQuantity(quantity, index)}</td>
        <td>{carbs}</td>
        <td>{proteins}</td>
        <td>{fat}</td>
        <td>{salt}</td>
        <td>{kcal}</td>
        <td>
            <ToggleComponent
            content={<ul style={{padding: '0'}}>{stores.map((e: string) => <li style={{ listStyle: 'none'}}>{e}</li>)}</ul>}
            name='shops'
            size='sm'
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
