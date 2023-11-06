import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import { StrictMode } from 'react'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='kasa/*' element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
