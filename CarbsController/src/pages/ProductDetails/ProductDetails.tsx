import React, { ReactElement, useState } from 'react'
import { Button, Modal, Row, Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import TabsElement from '../../ui/Tabs'
import OfferDetailsAfterSearch from './OfferDetailsAfterSearch'
import ProductIngredientsAfterSearch from './ProductIngredientsAfterSearch'
import styled from 'styled-components'
import ToggleComponent from '../../ui/Toggle'

const TdBody = styled.div`{
  font-size: 15px;
  font-weight: 700;
  margin-left: 2rem;
}`

export default function ProductDetails({productNumber}: any): ReactElement {

  const [modal, setModal] = useState(false);
  const [photoStatus, setPhotoStatus] = useState(false)
  const toggle = () => setModal(!modal);

  const {
    productName,
    photoThumb,
    brands,
    product,
    quantity
  } = useSelector((state: any) => {
    return {
        productName: state.apiSearchEngineReducer.currentState.data?.products[productNumber].product_name,
        photoThumb: state.apiSearchEngineReducer.currentState.data?.products[productNumber].image_thumb_url,
        brands: state.apiSearchEngineReducer.currentState.data?.products[productNumber].brands,
        product: state.apiSearchEngineReducer.currentState.data?.products[productNumber],
        quantity: state.apiSearchEngineReducer.currentState.data?.products[productNumber].quantity
    }
  })

  const isThereString = (el: string) => el ? el : ''

  return (
    <div style={{position: 'relative'}}>
      <Button variant='orange-light' className='shadow-none' onClick={toggle}>See details</Button>
      <Modal show={modal} toggle={toggle} onHide={() => toggle()} className="product-details" size="xl" centered={true} scrollable={true}>
        <Modal.Header closeButton>
          <Row  className='d-flex justify-content-center'>
            <TdBody>
              {<img
                src={photoThumb}
                alt={productName}
                onLoad={() => setPhotoStatus(true)}
                />}

              {photoStatus ? null: <Spinner animation="border" />}

              <div style={{marginLeft: '2rem', display: 'inline-block'}}>
                <h3>{`${productName} - ${isThereString(brands)} - ${isThereString(quantity)}`}</h3>
              </div>
            </TdBody>
          </Row>

        </Modal.Header>
        <Modal.Body>
            <TabsElement
              tabPane1={
                <ProductIngredientsAfterSearch
                productNumber={productNumber}
                />
              }
              tabPane2={
              <OfferDetailsAfterSearch
              productNumber={productNumber}
              />
              }
            />
        </Modal.Body>
        <Modal.Footer>
          <ToggleComponent
          variant='orange'
          name='Add product'
          type='input'
          afterClickName='save'
          product={product}
          />{' '}
          <Button variant='white' className='shadow-none' onClick={toggle}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
    }
