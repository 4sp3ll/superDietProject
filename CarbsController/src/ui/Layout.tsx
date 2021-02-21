import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
// import * as React from 'react';
import { Container } from 'react-bootstrap';
import NavMenu from './NavMenu';
import { useAuth } from '../pages/Auth/contexts/AuthContext'
import LayoutLogin from './LayoutLogin'
import useHowOldAccIs from '../firebase/useHowOldAccIs'

export default (props: { children?: React.ReactNode }) => {

    const { currentUser } = useAuth()
    const accAge = useHowOldAccIs()

    return (
        <>

        {currentUser ?
        <>
            <NavMenu
            accAge={accAge}
            />
            <Container id='main-result-container' fluid={true}>
                {props.children}
            </Container>
        </>
        :
            <LayoutLogin
            children={props.children}
            />
        }
        </>
    );
}