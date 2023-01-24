import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { User } from '../../../models/user.class'
import * as Yup from 'yup'
import { ROLES } from '../../../models/roles.enum'

const RegisterFormik = () => {
  let user = new User()
  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirm: '', // to confirm password
    role: ROLES.USER,
  }
  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, 'Username too short')
      .max(12, 'Username too long')
      .required('Username is required'),
    email: Yup.string()
      .email('Invalid Email format')
      .required('Email is required'),
    role: Yup.string()
      .oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User / Admin')
      .required('Role is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password too short'),
    confirm: Yup.string()
      .when('password', {
        is: (value) => (value && value.length > 0 ? true : false),
        then: Yup.string().oneOf([Yup.ref('password')], 'Password must match!'),
      })
      .required('You must confirm the password'),
  })

  const submit = (values) => {
    alert('Register User')
  }

  return (
    <div>
      <h4>Register Form</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000))
          alert(JSON.stringify(values, null, 2))
          // We save data in localStorage
          localStorage.setItem('credentials', values)
        }}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <label htmlFor="username">Username</label>
            <Field
              id="username"
              type="name"
              name="username"
              placeholder="username"
            />
            {/* Email Errors */}
            {errors.username && touched.username && (
              <ErrorMessage name="username" component="div" />
            )}

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

            <label htmlFor="confirm">Password</label>
            <Field
              id="confirm"
              name="confirm"
              placeholder="Confirm password"
              type="password"
            />
            {/* Confirm Password Errors */}
            {errors.confirm && touched.confirm && (
              <ErrorMessage name="confirm" component="div" />
            )}

            <button type="submit">Register User</button>
            {isSubmitting ? <p>Sending your Credentials...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default RegisterFormik
