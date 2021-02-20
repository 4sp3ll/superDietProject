import React, { useState, useEffect } from 'react';
// import * as React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import NavMenu from './NavMenu';
import { useAuth } from '../pages/Auth/contexts/AuthContext'
import LayoutLogin from './LayoutLogin';
import useHowOldAccIs from '../firebase/useHowOldAccIs'

export default (props: { children?: React.ReactNode }) => {
    const { currentUser } = useAuth()
    const age = useHowOldAccIs()
    const [accAge, setAccAge]: any = useState()
    const [ageStatus, setAgeStatus] = useState()
    console.log('accAge', accAge)

    useEffect(() => {
        setAccAge(age)
    }, [])

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
