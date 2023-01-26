import { useEffect } from 'react'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
  NavLink,
  Navigate,
  useParams,
} from 'react-router-dom'
import NotFoundPage from './pages/404/NotFoundPage'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import Dashboard from './pages/dashboard/Dashboard'
import TaskPage from './pages/tasks/TaskPage'

function AppRoutingFinal() {
  // TODO: Change to value from sessionStorage
  let loggedIn = true
  let userLog = null

  const checkUser = () => {
    userLog = localStorage.getItem('credentials')
    if(userLog !== null) {
      return true
    }

    return false
  }

  const LoggedOrNot = () => {
    //return loggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
    return loggedIn ? <Navigate to="/tasks" /> : <Navigate to="/login" />
  }

  const DashBoardOrLogin = () => {
    return loggedIn ? <Dashboard /> : <Navigate to="/login" />
  }

  const ToTasksPage = () => {
    return checkUser() ? <TaskPage /> : <Navigate to="/login" />
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Redirections to protect our routes */}
        <Route exact path="/" element={<LoggedOrNot />} />

        {/* Login Route */}
        <Route exact path="/login" element={<LoginPage />} />

        {/* Register Route */}
        <Route exact path="/register" element={<RegisterPage />} />

        {/* Tasks Pages */}
        <Route exact path='/tasks' element={<ToTasksPage />} />

        {/* Dashboard */}
        <Route exact path="/dashboard" element={<DashBoardOrLogin />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutingFinal
