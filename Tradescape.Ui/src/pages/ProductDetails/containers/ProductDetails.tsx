import React, { ReactElement, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TabsElement from '../../ui/Tabs'
import OfferDetailsAfterSearch from './OfferDetailsAfterSearch'
import OfferCostsAfterSearch from '../components/ProductIngredientsAfterSearch'

export default function ProductDetails({}): ReactElement {

      const [modal, setModal] = useState(false);
      const toggle = () => setModal(!modal);

      return (
        <div>
          <Button color="danger" onClick={toggle}>See details</Button>
          <Modal isOpen={modal} toggle={toggle} className="product-details" size="xl">
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>
                <TabsElement
                    tabPane1={<OfferDetailsAfterSearch/>}
                    tabPane2={<OfferCostsAfterSearch/>}
                />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
              <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
