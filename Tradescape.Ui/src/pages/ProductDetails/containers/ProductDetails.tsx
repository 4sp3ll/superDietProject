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

  const {
    productName,
    photoThumb,
  } = useSelector((state: any) => {
    return {
        productName: state.apiSearchEngineReducer.currentState.data?.products[productNumber].product_name,
        photoThumb: state.apiSearchEngineReducer.currentState.data?.products[productNumber].image_thumb_url,
        photoFullSize: state.apiSearchEngineReducer.currentState.data?.products[productNumber].image_url
    }
  })

      const [modal, setModal] = useState(false);
      const toggle = () => setModal(!modal);

      return (
        <div>
          <Button color="danger" onClick={toggle}>See details</Button>
          <Modal isOpen={modal} toggle={toggle} className="product-details" size="xl" centered={true} scrollable={true}>
            <ModalHeader toggle={toggle}>
              <Row  className='d-flex justify-content-center'>
                <TdBody>{<img src={photoThumb} alt={productName}/>} {` ${productName ? productName : ''} `}</TdBody>
              </Row>

            </ModalHeader>
            {/* productNumber */}
            <ModalBody>
                <TabsElement
                    tabPane1={<OfferDetailsAfterSearch/>}
                    tabPane2={
                    <OfferCostsAfterSearch
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
