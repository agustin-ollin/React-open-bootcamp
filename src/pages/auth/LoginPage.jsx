import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import LoginFormik from '../../components/pure/forms/loginFormik'

const LoginPage = () => {
  const history = useNavigate()
  const navigateTo = path => {
    history(path)
  }

  return (
    <div>
      <h1>Login Page</h1>
      <LoginFormik />
      <Button variant="contained" onClick={() => navigateTo('/register')}>
        Go to Register
      </Button>
    </div>
  )
}

export default LoginPage
