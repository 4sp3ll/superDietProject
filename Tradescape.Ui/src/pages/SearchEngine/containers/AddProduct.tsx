import React, { ReactElement, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { Modal, ModalHeader, ModalBody, ModalFooter, Col, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap'
import { Modal, Col, InputGroup, FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
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
            <Button variant='orange-light' onClick={toggle} className='shadow-none'>+</Button>
            <Modal show={modal} onHide={() => toggle()} toggle={toggle} className="product-details" centered={true} scrollable={true}>
                <Modal.Header>
                    {/* <img src={photoThumb}/> <p style={{display: 'inline-block'}}>{productName}</p> */}
                    <img src={photoThumb}/> <h4 style={{textAlign: 'left'}}>{productName}</h4>
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
                        () => {dispatch(allActions.keepProduct(product, quantity)); addProductToDatabase()}}
                    >
                        Add product
                    </Button>{' '}
                    <Button variant='white' className='shadow-none' onClick={toggle}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
