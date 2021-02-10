import React, { ReactElement } from 'react'
import { Container } from 'react-bootstrap';

export default function LayoutLogin(props: { children?: React.ReactNode }): ReactElement {
    return (
        <div>
            <Container
            className='d-flex align-items-center justify-content-center'
            style={{ minHeight: '100vh' }}
            >
                <div className='w-100' style={{ maxWidth: '400px' }}>
                    {props.children}
                </div>
            </Container>
        </div>
    )
}
