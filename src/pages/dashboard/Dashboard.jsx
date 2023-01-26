import React from 'react'
import Button from '@mui/material/Button'
import Copyright from '../../components/pure/Copyright'
import { useNavigate } from 'react-router-dom'
import MenuListItems from '../../components/pure/MenuListItems'

const Dashboard = () => {
  const history = useNavigate()
  const logout = () => {
    history('/login')
  }

  const listRoutes = [
    {
      text: 'HOME',
      path: '/',
      icon: 'HOME',
    },
    {
      text: 'TASKS',
      path: '/',
      icon: 'TASKS',
    },
    {
      text: 'SETTINGS',
      path: '/',
      icon: 'SETTINGS',
    },
  ]

  return (
    <div>
      <Button variant="contained" onClick={logout}>
        Logout
      </Button>
      <MenuListItems list={listRoutes} />
      <Copyright />
    </div>
  )
}

export default Dashboard
