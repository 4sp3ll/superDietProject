
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ModalExample = props => {
    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="success" onClick={toggle} style={{ backgroundColor: "#f87320" }}>{props.name} <FontAwesomeIcon icon={['fas', 'video']}></FontAwesomeIcon></Button>
            <Modal isOpen={modal} toggle={toggle} className={className} size="lg" fade={false}>
                <ModalHeader toggle={toggle}>{props.name} <FontAwesomeIcon icon={['fas', 'video']}></FontAwesomeIcon></ModalHeader>
                <ModalBody>
                {props.tutorial}
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle} color="success">Mam to!</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}


export default ModalExample;