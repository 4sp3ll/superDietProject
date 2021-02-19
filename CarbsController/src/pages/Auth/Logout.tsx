import React, { ReactElement, useState } from 'react'
import { Button, Alert } from 'react-bootstrap'
import { useAuth } from './contexts/AuthContext'
import { useHistory } from 'react-router-dom'

export default function Dashboard(): ReactElement {

    const [error, setError] = useState('')
    const {logout} = useAuth()
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
            {error && <Alert variant='danger'>{error}</Alert>}
            <div className='w-100 text-center mt-2'>
                <Button variant='link' onClick={handleLogout}>Log Out</Button>
            </div>
        </>
    )
}
