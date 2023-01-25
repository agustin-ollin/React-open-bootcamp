import React from 'react'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom'

const NotFoundPage = () => {
  const history = useNavigate()
  const navigate = (path) => {
    history(path)
  }

  return (
    <div>
      <h1>404 - Not Page Found</h1>
      <div>
        <button onClick={() => navigate('/')}>Go Back to Home</button>
      </div>
    </div>
  )
}

export default NotFoundPage
