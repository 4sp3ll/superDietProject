import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
import { firestoreStart } from '../firebase/firestoreConfig'
import ModalUniversal from './ModalUniversal'
import Ribon from './Ribbon'
import TutorialSearchEngine from '../utils/frames/TutorialSearchEngine'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { tutorialStatusToFirestore, useTutorialStatusFromFirestore } from '../firebase/tutorialStatus'

const PageAlert = (props: any) => {

    useTutorialStatusFromFirestore()
    const uid = useSelector((state: any) => state.firebase.auth.uid)
    const status = useSelector((state: any) => state.firestore.data.offTutorial)
    const [off, setOff] = useState(false);
    const onDismiss = () => setOff(true);

    useEffect(() => {
        if (off) {
            tutorialStatusToFirestore(uid)
        }
    }, [off])

    useEffect(() => {
        if (status && Object.keys(status).length === 0) {
            return
        } else if (status && Object.keys(status).length > 0) {
            setOff(true)
        }
    }, [status])

if (!off) {
    return (
        <>
        {/* <Alert color="light" show={!off} toggle={onDismiss} style={{ position: "relative", background: "rgba(255,255,255,0)", width: "auto", left: "0%", border: "0px" }}> */}
        <Alert dismissible transition={false} variant="light" show={!off} onClose={onDismiss} style={{ position: "relative", background: "rgba(255,255,255,0)", width: "auto", left: "0%", border: "0px" }}>
        {/* <Alert transition={false} color="light" isOpen={!off} toggle={onDismiss} style={{ position: "relative", background: "rgba(255,255,255,0)", width: "auto", left: "0%", border: "0px" }}> */}
            <Row>
                <Col md='9' xs='9' style={{padding: '0'}}>
                    {props.displayRibbon ? <Ribon/> : <div style={{display: 'none'}}><Ribon/></div> }
                </Col>
                <Col md='3' xs='3' style={{padding: '0 0 0 15px'}}>
                    <div className='button-tutorial-container float-right' style={{ position: "relative", top: "-4px"}}>
                        <ModalUniversal
                        name={'Look at tutorial'}
                        content={<TutorialSearchEngine/>}
                        icon={<FontAwesomeIcon icon={['fas', 'video']}/>}
                        className="tutorial"
                        />
                    </div>
                </Col>
            </Row>
        </Alert>
        </>
    );
    }
    return <Alert style={{ position: "relative", background: "rgba(255,255,255,0)", width: "auto", left: "0%", border: "0px" }}/>


}

export default PageAlert;