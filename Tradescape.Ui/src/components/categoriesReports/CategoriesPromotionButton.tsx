import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, Col, Row } from 'reactstrap';
import styled from 'styled-components'

const TdHead = styled.td`{
    font-size: 15px;
    text-align: right;
}`
const TdBody = styled.td`{
    font-size: 15px;
    font-weight: 700;
}`

const CategoriesPromotionButton = (props: any) => {
  const {
    // buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
        
      <Button color="secondary" onClick={toggle} style={{height: '55px'}}>Formy promocji</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} modalTransition={{ timeout: 50 }}>
        <ModalHeader toggle={toggle} charCode="X">Formy promocji i opcje dodatkowe</ModalHeader>
        <ModalBody>
            <table style={{width: '80%'}}>
                <tbody >
                                <tr >
                                {/* style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}} */}
                                    <TdHead style={{verticalAlign: 'center', lineHeight: '35px'}}>Wyróżnienie:&nbsp;</TdHead>
                                    <TdBody>{
                                            <Input style={{width: '130px'}} type="select" name="select" id="promoSelect">
                                            <option>Dowolne</option>
                                            <option>Tak</option>
                                            <option>Nie</option>
                                            </Input>
                                        
                                        }</TdBody>           
                                </tr>
                                <tr >
                                    <TdHead style={{verticalAlign: 'center', lineHeight: '35px'}}>Pogrubienie:&nbsp;</TdHead>
                                    <TdBody>{
                                            <Input style={{width: '130px'}} type="select" name="select" id="promoSelect">
                                            <option>Dowolne</option>
                                            <option>Tak</option>
                                            <option>Nie</option>
                                            </Input>
                                        
                                        }</TdBody>           
                                </tr>
                                <tr >
                                    <TdHead style={{verticalAlign: 'center', lineHeight: '35px'}}>Podświetlenie:&nbsp;</TdHead>
                                    <TdBody>{
                                            <Input style={{width: '130px'}} type="select" name="select" id="promoSelect">
                                            <option>Dowolne</option>
                                            <option>Tak</option>
                                            <option>Nie</option>
                                            </Input>
                                        
                                        }</TdBody>           
                                </tr>
                                <tr >
                                    <TdHead style={{verticalAlign: 'center', lineHeight: '35px'}}>Darmowa wysyłka:&nbsp;</TdHead>
                                    <TdBody>{
                                            <Input style={{width: '130px'}} type="select" name="select" id="promoSelect">
                                            <option>Dowolne</option>
                                            <option>Tak</option>
                                            <option>Nie</option>
                                            </Input>
                                        }</TdBody>           
                                </tr>
                                
                </tbody>
            </table>
        {/* <Label for="exampleSelect" sm={2}>Select</Label> */}
        
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={toggle}>Wybierz</Button>{' '}
          <Button color="warning" onClick={toggle}>Anuluj</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default CategoriesPromotionButton