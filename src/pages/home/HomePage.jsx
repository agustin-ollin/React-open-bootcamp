import React from 'react'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom'

const HomePage = () => {
  const location = useLocation()
  const history = useNavigate()

  console.log('We are in Route:', location.pathname)

  const navigate = (path) => {
    history(path)
  }

  const goBack = () => {
    history(-1)
  }

  const goForward = () => {
    history(1)
  }

  const navigateProps = (path) => {
    history({
      pathname: path,
      search: '?online=true', // Query Params
      state: {
        online: true,
      },
    })
  }

  const navigateProps2 = (path) => {
    history(
      {
        pathname: path,
        search: '?online=true',
      },
      {
        state: {
          online: true,
        },
      },
    )
  }

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <button onClick={() => navigateProps2('/online-state')}>
          Go to Page with State / Query Params
        </button>
        <button onClick={() => navigate('/profile')}>Go to Profile</button>
      </div>
    </div>
  )
}

export default HomePage
