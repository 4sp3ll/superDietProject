import React, { useState } from 'react';
import { Alert } from 'reactstrap';
import { Col, Fade, Row } from 'reactstrap';
import ModalExample from './Modal'
import Ribon from './Ribbon'

const PageAlert = (props: any) => {
    const [visible, setVisible] = useState(true);
    const onDismiss = () => setVisible(false);

    return (
        <>
        <Alert color="light" isOpen={visible} toggle={onDismiss} style={{ position: "relative", background: "rgba(255,255,255,0)", width: "auto", left: "0%", border: "0px" }}>
            <Row>
                <Col md='9' xs='9' style={{padding: '0'}}>
                    {props.displayRibbon ? <Ribon/> : <div style={{display: 'none'}}><Ribon/></div> }
                </Col>
                <Col md='3' xs='3' style={{padding: '0 0 0 15px'}}>
                    <div className='button-tutorial-container float-right' style={{ position: "relative", top: "-4px"}}>
                        <ModalExample
                        name={'Zobacz tutorial'}
                        />
                    </div>
                </Col>
            </Row>
        </Alert>
        </>
    );
}

export default PageAlert;