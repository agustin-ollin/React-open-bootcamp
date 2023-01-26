import React from 'react'
import TaskListComponent from '../../components/container/task_list'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const TaskPage = () => {
  const history = useNavigate()
  const navigateTo = path => {
    history(path)
  }

  const closeSession = () => {
    localStorage.removeItem('credentials')
    navigateTo('/login')
  }

  return (
    <div>
      <TaskListComponent />
      <Button variant="contained" onClick={closeSession}>
        LogOut
      </Button>
    </div>
  )
}

export default TaskPage
