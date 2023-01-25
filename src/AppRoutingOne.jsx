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
import AboutPage from './pages/about-task/AboutPage'
import LoginPage from './pages/auth/LoginPage'
import HomePage from './pages/home/HomePage'
import StatePage from './pages/home/StatePage'
import ProfilePage from './pages/profile/ProfilePage'
import TaskDetailPage from './pages/tasks/TaskDetailPage'
import TaskPage from './pages/tasks/TaskPage'

function AppRoutingOne() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      errorElement: <NotFoundPage />, // 404 - Page No Found
    },
    {
      path: '/about',
      element: <AboutPage />,
    },
    {
      path: '/faqs',
      element: <AboutPage />,
    },
  ])

  let logged = false

  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My first Task',
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My second Task',
    },
  ]

  useEffect(() => {
    logged = localStorage.getItem('credentials')
    console.log('User Logged?:', logged)
  }, [logged])

  const LogAuth = () => {
    alert('You must be logged. Redirecting to login...')
    return <Navigate to="/login" />
  }

  const LoggedUser = () => {
    alert('You are logged in. Redirecting to home...')
    return <Navigate to="/" />
  }

  const NoLogged = () => {
    //alert('You must be logged')
    return <LoginPage />
  }

  const GoToTask = () => <TaskDetailPage task={taskList[useParams().id - 1]} />

  return (
    <BrowserRouter>
      <div>
        <aside>
          <NavLink to="/">|| HOME |</NavLink>
          <NavLink to="/about">| ABOUT |</NavLink>
          <NavLink to="/faqs">| FAQs |</NavLink>
          <NavLink to="/tasks/1">| TASK 1 |</NavLink>
          <NavLink to="/tasks/2">| TASK 2 |</NavLink>
          <NavLink to="/any404">| Not Existing Route |</NavLink>
          <NavLink to="/login">| LOGIN ||</NavLink>
        </aside>
        <main>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/online-state" element={<StatePage />} />
            <Route
              path="/login"
              element={logged ? <LoggedUser /> : <NoLogged />}
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faqs" element={<AboutPage />} />
            <Route
              path="/profile"
              element={logged ? <ProfilePage /> : <LogAuth />}
            />
            <Route path="/tasks" element={<TaskPage />} />
            <Route
              path="/tasks/:id"
              element={<GoToTask />}
            ></Route>
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default AppRoutingOne

/*

return <RouterProvider router={router} />
Forma de hacerlo react sin vite
<BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />}/>
        <Route path='/(about|faqs)' element={<AboutPage />}/>
        <Route element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
 */
