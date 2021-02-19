import React, { FormEvent, useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from './contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
// import Logo from '../utils/images/logo.png'
import Logo from '../../utils/images/logo_big_2.png'

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
            history.push('/find-product')
        } catch {
            setError(`Error. Something gone wrong.`)
        }
        setLoading(false)
    }

    return (
        <>

            <Card>
                <Card.Body>
                <img src={Logo} style={{display: 'block',  marginLeft: 'auto', marginRight: 'auto', width: '80%'}}/>
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
                        <Button disabled={loading} className='w-100' type='submit' variant='orange'>Log In</Button>
                    </Form>
                    <div className='w-100 text-center mt-3'>
                        <Link to='/forgot-password' style={{color: 'orange'}}>Forgot Password?</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Need an account? <Link to='/signup' style={{color: 'black', fontWeight: 'bold'}}>Sing Up</Link>
            </div>
        </>
    )
}

export default Login