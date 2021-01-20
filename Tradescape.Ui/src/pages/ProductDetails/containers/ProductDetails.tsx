import React, { ReactElement, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row } from 'reactstrap';
import { useSelector } from 'react-redux'
import TabsElement from '../../ui/Tabs'
import OfferDetailsAfterSearch from './OfferDetailsAfterSearch'
import OfferCostsAfterSearch from '../components/ProductIngredientsAfterSearch'
import styled from 'styled-components'

const TdBody = styled.div`{
  font-size: 15px;
  font-weight: 700;
  margin-left: 2rem;
}`

export default function ProductDetails({productNumber}: any): ReactElement {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const {
    productName,
    photoThumb,
    brands,
    servingSize
  } = useSelector((state: any) => {
    return {
        productName: state.apiSearchEngineReducer.currentState.data?.products[productNumber].product_name,
        photoThumb: state.apiSearchEngineReducer.currentState.data?.products[productNumber].image_thumb_url,
        brands: state.apiSearchEngineReducer.currentState.data?.products[productNumber].brands,
        servingSize: state.apiSearchEngineReducer.currentState.data?.products[productNumber].serving_size,
    }
  })

    const isThereString = (el: string) => el ? el : ''

  return (
    <div>
      <Button color="danger" onClick={toggle}>See details</Button>
      <Modal isOpen={modal} toggle={toggle} className="product-details" size="xl" centered={true} scrollable={true}>
        <ModalHeader toggle={toggle}>
          <Row  className='d-flex justify-content-center'>
            <TdBody>
              {<img src={photoThumb} alt={productName}/>}<div style={{marginLeft: '2rem', display: 'inline-block'}}>{`${productName} - ${isThereString(brands)} - ${isThereString(servingSize)}`}</div>
            </TdBody>
          </Row>

        </ModalHeader>
        <ModalBody>
            <TabsElement
              tabPane1={
                <OfferCostsAfterSearch
                productNumber={productNumber}
                />
              }
              tabPane2={
              <OfferDetailsAfterSearch
              productNumber={productNumber}
              />
              }
            />
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={toggle}>Add product</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
    }
