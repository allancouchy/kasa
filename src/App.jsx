import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle'

import Home from './pages/Home'
import Housing from './pages/Housing'
import About from './pages/About'
import Error from './pages/Error'
import Layout from './components/Layout'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='housings/:id' element={<Housing />} />
          <Route path='about' element={<About />} />

          {/* catch all */}
          <Route path='/*' element={<Error />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
