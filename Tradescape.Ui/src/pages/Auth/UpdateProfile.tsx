import React, { FormEvent, useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from './contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const UpdateProfile = () => {

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordConfirmRef = useRef<HTMLInputElement>(null);
    const {currentUser, updateEmail, updatePassword} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (passwordRef.current?.value !== passwordConfirmRef.current?.value) {
            return setError(`Password don't match`)
        }

        const promises = []
        setError('')
        setLoading(true)

        if (emailRef.current?.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current?.value))
        }
        if (passwordRef.current?.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises)
        .then(() => {
            history.push('/')
        })
        .catch(() => {
            setError('Failed to update account.')
        })
        .finally(() => {
            setLoading(false)
        })

        try {
            history.push('/')
        } catch {
            setError(`Failed. I can't create account, try again.`)
        }
        setLoading(false)
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
                            <h2 className='text-center mb-4'>Update Profile</h2>
                            {error && <Alert variant='danger'>{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id='email'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                    type='email'
                                    ref={emailRef}
                                    required
                                    defaultValue={currentUser.email}>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group id='password'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                    type='password'
                                    ref={passwordRef}
                                    placeholder='Leave blank to keep the same; min. 6 characters'
                                    ></Form.Control>
                                </Form.Group>
                                <Form.Group id='password-confirm'>
                                    <Form.Label>Password Confirmation</Form.Label>
                                    <Form.Control
                                    type='password'
                                    ref={passwordConfirmRef}
                                    ></Form.Control>
                                </Form.Group>
                                <Button disabled={loading} className='w-100' type='submit'>Update</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className='w-100 text-center mt-2'>
                        <Link to='/dashboard'>Back</Link>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default UpdateProfile