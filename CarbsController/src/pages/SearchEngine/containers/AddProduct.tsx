import React, { ReactElement, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Modal, Col, InputGroup, FormControl, Spinner } from 'react-bootstrap'
import styled from 'styled-components'
import allActions from '../../../actions/index'
import addProductToDatabase from '../../../firebase/addProductToDatabase'


const Center = styled.div`{
    display: flex;
    justify-content: center;
    align-items: center;
}`


export default function AddProduct({productNumber}: any): ReactElement {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [quantity, setQuantity] = useState<number>()
    const [productAdded, setProductAdded] = useState(false)
    const dispatch = useDispatch()

    const [photoStatus, setPhotoStatus] = useState(false)
    const [show, setShow] = useState(false)

    const {
        productName,
        photoThumb,
        product
      } = useSelector((state: any) => {
        return {
            productName: state.apiSearchEngineReducer.currentState.data?.products[productNumber].product_name,
            photoThumb: state.apiSearchEngineReducer.currentState.data?.products[productNumber].image_thumb_url,
            product: state.apiSearchEngineReducer.currentState.data?.products[productNumber]
        }
      })


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
        <div>
            <Button variant='orange-light' onClick={toggle} className='shadow-none'>+</Button>
            <Modal show={modal} onHide={() => toggle()} toggle={toggle} className="product-details" centered={true} scrollable={true}>
                <Modal.Header closeButton>
                    {handlePhotoLoading()}
                    <img
                    src={photoThumb}
                    onLoad={() => setPhotoStatus(true)}
                    />
                    <h4 style={{textAlign: 'left', marginLeft: '.5rem'}}>{productName}</h4>
                </Modal.Header>
                <Modal.Body>
                    <Col  sm={{ span: 8, offset: 2 }}>
                        <InputGroup>
                            <InputGroup.Append>
                                <InputGroup.Text>Quantity:</InputGroup.Text>
                            </InputGroup.Append>
                            <FormControl
                            placeholder="grams"
                            type="number"
                            min="1"
                            max="10000000000"
                            onChange={(e: any) => setQuantity(parseInt(e.target.value))}
                            value={quantity}
                            />
                        </InputGroup>
                    </Col>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                    variant='orange'
                    className='shadow-none'
                    onClick={
                        () => {dispatch(allActions.keepProduct(product, quantity)); addProductToDatabase(); setProductAdded(true)}}
                    >
                        {productAdded ? 'Added' : 'Add product'}
                    </Button>{' '}
                    <Button variant='white' className='shadow-none' onClick={toggle}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
