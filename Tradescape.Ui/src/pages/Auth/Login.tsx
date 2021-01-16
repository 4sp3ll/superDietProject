import React, { FormEvent, useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from './contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

interface Props {

}

const Login = (props: Props) => {

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const {login} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current?.value, passwordRef.current?.value)
            // history.push('/')
            history.push('/wyszukiwarka-produktow')
        } catch {
            setError(`Error. Something gone wrong.`)
        }
        setLoading(false)
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Log In</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required></Form.Control>
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef} required></Form.Control>
                        </Form.Group>
                        <Button disabled={loading} className='w-100' type='submit'>Log In</Button>
                    </Form>
                    <div className='w-100 text-center mt-3'>
                        <Link to='/forgot-password'>Forgot Password?</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Need an account? <Link to='/signup'>Sing Up</Link>
            </div>
        </>
    )
}

export default Login