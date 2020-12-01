
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const OpenDetails = (props) => {
    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="secondary" onClick={toggle} >Zobacz szczegóły</Button>
            <Modal isOpen={modal} toggle={toggle} className={className} size="lg" fade={false}>
                <ModalHeader toggle={toggle} >Zobacz Tutorial </ModalHeader>
                <ModalBody>
                    <iframe width="100%" height="450px" src="https://www.youtube.com/embed/g0yq5uGUDus" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle} color="success">Mam to!</Button>
                </ModalFooter>
            </Modal>
        </div >
    );
}

export default OpenDetails;