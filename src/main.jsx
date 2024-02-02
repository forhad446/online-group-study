import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Routes/Route'
import AuthProvider from './Provider/AuthProvider'
import { HelmetProvider } from 'react-helmet-async'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <div className='max-w-7xl mx-auto overflow-hidden'>
          <RouterProvider router={Route} />
        </div>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
