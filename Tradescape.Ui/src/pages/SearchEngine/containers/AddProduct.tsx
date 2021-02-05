import React, { Dispatch, ReactElement, SetStateAction, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap'
import allActions from '../../../actions/index'
import addProductToDatabase from '../../../firebase/addProductToDatabase'

export default function AddProduct({productNumber}: any): ReactElement {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [quantity, setQuantity] = useState<number>()

    const dispatch = useDispatch()

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

    return (
        <div>
            <Button color="info" onClick={toggle}>+</Button>
            <Modal isOpen={modal} toggle={toggle} className="product-details" size="md" centered={true} scrollable={true}>
                <ModalHeader toggle={toggle}>
                    <img src={photoThumb}/> <p style={{display: 'inline-block'}}>{productName}</p>
                </ModalHeader>
                <ModalBody>
                    <Col  sm={{ size: 8, offset: 2 }}>
                    <InputGroup>
                        <InputGroupAddon addonType="append">
                            <InputGroupText>Quantity:</InputGroupText>
                        </InputGroupAddon>
                        <Input
                        placeholder="grams"
                        type="number"
                        min="1"
                        max="10000000000"
                        oninput="this.value = Math.abs(this.value)"
                        onChange={(e: any) => setQuantity(parseInt(e.target.value))}
                        value={quantity}
                        />
                    </InputGroup>
                    </Col>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={() => {dispatch(allActions.keepProduct(product, quantity)); addProductToDatabase()}}>Add product</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
