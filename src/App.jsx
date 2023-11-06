import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle'

import Header from './components/Header'
import Home from './pages/Home'
import Housing from './pages/Housing'
import About from './pages/About'
import Error from './pages/Error'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='housings/:id' element={<Housing />} />
        <Route path='about' element={<About />} />

        {/* catch all */}
        <Route path='/*' element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
