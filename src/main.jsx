import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { UserComputerDataProvider } from './context/UserComputerDataContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserComputerDataProvider>
      <App />
    </UserComputerDataProvider>
  </React.StrictMode>
)
