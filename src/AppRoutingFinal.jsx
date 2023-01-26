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
import Dashboard from './pages/dashboard/Dashboard'

function AppRoutingFinal() {
  // TODO: Change to value from sessionStorage
  let loggedIn = true

  const LoggedOrNot = () => {
    return loggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
  }

  const DashBoardOrLogin = () => {
    return loggedIn ? <Dashboard /> : <Navigate to="/login" />
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Redirections to protect our routes */}
        <Route exact path="/" element={<LoggedOrNot />} />

        {/* Login Route */}
        <Route exact path="/login" element={<LoginPage />} />
        {/* Dashboard */}
        <Route exact path="/dashboard" element={<DashBoardOrLogin />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutingFinal
