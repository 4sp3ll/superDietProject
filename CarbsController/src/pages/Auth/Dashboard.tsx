import React, { ReactElement, useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from './contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import { Container } from 'react-bootstrap'

export default function Dashboard(): ReactElement {

    const [error, setError] = useState('')
    const {currentUser, logout} = useAuth()
    const history = useHistory()

    const handleLogout = async () => {
        setError('')
        console.log('naciskam')

        try {
            await logout()
            history.push('/login')
        } catch {
            setError('Ups... Failed to log out.')
        }
    }

    return (
        <>
            <Container
            className='d-flex align-items-center justify-content-center'
            style={{ minHeight: '100vh' }}
            >
                <div className='w-100' style={{ maxWidth: '400px' }}>
                    <Card>
                        <Card.Body>
                            <h2 className='text-center mb-4'>Profile</h2>
                            {error && <Alert variant='danger'>{error}</Alert>}
                            <strong>Email:</strong> {currentUser.email}
                            <Link to='/update-profile' className='btn btn-primary w-100 mt-3' style={{backgroundColor: 'rgba(235, 134, 70, 0.7)'}}>
                                Update Profile
                            </Link>
                        </Card.Body>
                    </Card>
                    <div className='w-100 text-center mt-2'>
                        <Button variant='black' style={{fontWeight: 'bold'}} onClick={handleLogout}>Log Out</Button>
                    </div>
                </div>
            </Container>
        </>
    )
}
