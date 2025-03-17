import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import ContextApp from './context/ContextApp.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ContextApp>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextApp>
)
