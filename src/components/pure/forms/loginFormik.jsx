import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid Email format')
    .required('Email is required'),
  password: Yup.string().required('Password is required').length(8),
})

const LoginFormik = () => {
  const initialCredentials = {
    email: '',
    password: '',
  }

  const history = useNavigate()

  return (
    <div>
      <h4>Login Form</h4>
      <Formik
        // *** Initial values
        initialValues={initialCredentials}
        // *** Yup Validation Schema
        validationSchema={loginSchema}
        // *** onSubmit Event
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000))
          alert(JSON.stringify(values, null, 2))
          // We save data in localStorage
          await localStorage.setItem('credentials', values)
          history('/tasks')
        }}
      >
        {/* We obtain props from Formik */}
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              type="email"
              name="email"
              placeholder="example@gmail.com"
            />
            {/* Email Errors */}
            {errors.email && touched.email && (
              <ErrorMessage name="email" component="div" />
            )}

            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              placeholder="password"
              type="password"
            />
            {/* Password Errors */}
            {errors.password && touched.password && (
              <ErrorMessage name="password" component="div" />
            )}

            <button type="submit">Login</button>
            {isSubmitting ? <p>Login your Credentials...</p> : null}
          </Form>
        )}

        {/* {(props) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
          } = props

          return (
            
          )
        }} */}
      </Formik>
    </div>
  )
}

export default LoginFormik
