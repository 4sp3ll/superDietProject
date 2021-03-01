import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'
import { Col, Row } from 'react-bootstrap'
import ModalUniversal from './ModalUniversal'
import Ribon from './Ribbon'
import TutorialSearchEngine from '../utils/frames/TutorialSearchEngine'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { tutorialStatusToFirestore } from '../firebase/tutorialStatus'
import { useFirestoreConnect } from "react-redux-firebase";

const PageAlert = (props: any) => {

    const uid = useSelector((state: any) => state.firebase.auth.uid)

    useFirestoreConnect({
        collection: `tutorialStatus`,
        doc: uid,
        storeAs: 'offTutorial'
      })

    const status = useSelector((state: any) => state.firestore.data.offTutorial)

    const [visible, setVisible] = useState(false);
    const [closeIt, setCloseIt] = useState(false)
    const onDismiss = () => {setVisible(false); setCloseIt(true)}



    useEffect(() => {
        if (!visible && closeIt) {
            tutorialStatusToFirestore(uid)
        }
    }, [visible])

    useEffect(() => {
        if (status !== undefined) {
            if (status === null) {
                setVisible(true)
            } else if (Object.keys(status).length > 0) {
                return
            }
        }
    }, [status])

    if (visible && closeIt === false) {
        return (
            <>
            <Alert dismissible variant="light" show={visible} onClose={onDismiss} style={{ position: "relative", background: "rgba(255,255,255,0)", width: "auto", left: "0%", border: "0px" }}>
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
        } else {
            return (
                <>
                <Alert style={{ position: "relative", background: "rgba(255,255,255,0)", width: "auto", left: "0%", border: "0px" }}/>
                </>
            )
        }




}

export default PageAlert;