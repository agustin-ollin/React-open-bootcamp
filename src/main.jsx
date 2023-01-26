import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'
import App from './App'
import AppRoutingOne from './AppRoutingOne'
import AppRoutingFinal from './AppRoutingFinal'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppRoutingOne /> */}
    <AppRoutingFinal />
  </React.StrictMode>,
)
