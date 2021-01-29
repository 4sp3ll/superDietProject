import React, { ReactElement, useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap'


export default function AddProduct({productNumber}: any): ReactElement {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const {
        productName,
        photoThumb,
      } = useSelector((state: any) => {
        return {
            productName: state.apiSearchEngineReducer.currentState.data?.products[productNumber].product_name,
            photoThumb: state.apiSearchEngineReducer.currentState.data?.products[productNumber].image_thumb_url,
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
                        />
                    </InputGroup>
                    </Col>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={toggle}>Add product</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
