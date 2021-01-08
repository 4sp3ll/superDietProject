import React, { ReactElement } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

interface Props {

}

const LoginSchema = Yup.object().shape({
    email: Yup.string()
    .email('Invalid email')
    .required('The email is required'),
    password: Yup.string().required('The password is required')
})


export default function Login({}: Props): ReactElement {
    return (
        <div style={{padding: '3rem'}}>
            <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={LoginSchema}
            onSubmit={(values, {setSubmitting}) => {
                console.log(values)
            }}
            >
            {(isSubmitting: any, isValid: any) => {
               return(
                <Form>
                    <Field
                    type='email'
                    name='email'
                    placeholder='Email'
                    />
                    <ErrorMessage name='email'/>

                    <Field
                    type='password'
                    name='password'
                    placeholder='Password'
                    />
                    <ErrorMessage name='password'/>
                    <button type='submit'/>
                </Form>
               )
            }}
            </Formik>
        </div>
    )
}
