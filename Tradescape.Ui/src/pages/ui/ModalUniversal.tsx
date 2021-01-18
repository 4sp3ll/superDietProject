import React, { useState, ReactElement } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styled from 'styled-components'

const CustomButton = styled.button`{
    box-shadow: 5px 5px 5px #c7c7c7;
    background-color: #faefe3;
    border: .3px solid;
    border-radius: 5px;
    width: 100%;
    margin: 0 0 15px 0;
    padding: 5px 0 5px 0;
    :focus {outline: none;}
}`

interface Props {
    className: string,
    name: string,
    icon?: ReactElement | boolean,
    scrollable?: boolean,
    content: any,

}

const ModalUniversal = (props: Props): ReactElement => {
    const {className, name, icon, content, scrollable} = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    let buttonVersion

    if (className === "tutorial") {
        buttonVersion = <Button onClick={toggle} style={{ backgroundColor: "#f87320" }}>{name} {icon}</Button>
        } else {
        buttonVersion = <CustomButton name="custom categories ..." onClick={toggle}> {name} </CustomButton>
        }

    return (
        <div>
            {buttonVersion}
            <Modal isOpen={modal} toggle={toggle} className={className} size="lg" fade={true} scrollable={scrollable}>
                <ModalHeader toggle={toggle}>{name} {icon}</ModalHeader>
                <ModalBody  style={{overflow:'auto', padding:'1vw 5vw'}}>
                    {content}
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={toggle}>OK</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalUniversal;