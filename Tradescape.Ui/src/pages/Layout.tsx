import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import { useAuth } from '../pages/Auth/contexts/AuthContext'
import LayoutLogin from './LayoutLogin';


export default (props: { children?: React.ReactNode }) => {
    const { currentUser } = useAuth()
    return (
        <>
        {console.log(currentUser)}
        {currentUser ?
        <>
            <NavMenu />
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
