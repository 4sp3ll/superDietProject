import React, { FormEvent, useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from './contexts/AuthContext'
import { Link } from 'react-router-dom'


const ForgotPassword = () => {

    const emailRef = useRef<HTMLInputElement>(null);
    const {resetPassword} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current?.value)
            setMessage('Great. Check your inbox.')
        } catch {
            setError(`Error. Failed to reset password.`)
        }
        setLoading(false)
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Reset password</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    {message && <Alert variant='success'>{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required></Form.Control>
                        </Form.Group>
                        <Button disabled={loading} className='w-100' type='submit' variant='orange'>Reset Password</Button>
                    </Form>
                    <div className='w-100 text-center mt-3'>
                        <Link to='/login' style={{color: 'orange'}}>Login</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Need an account? <Link to='/signup' style={{color: 'black', fontWeight: 'bold'}}>Sing Up</Link>
            </div>
        </>
    )
}

export default ForgotPassword