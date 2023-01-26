import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import RegisterFormik from '../../components/pure/forms/registerFormik'

const RegisterPage = () => {
  const history = useNavigate()
  const navigateTo = (path) => {
    history(path)
  }


  return (
    <div>
      <h1>Register Page</h1>
      <RegisterFormik />
      <Button variant="contained" onClick={() => navigateTo('/login')}>
        Go to Login
      </Button>
    </div>
  )
}

export default RegisterPage
