import { useState } from 'react'
import './App.css'
import MyHobbies from '../MyHobbies'
import USA from './Countries'

import Layout from './Layout'
import Home from './Home'
import About from './About'
import NoPage from './NoPage'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Layout></Layout>
      <Routes>
        <Route path='/'/>
          <Route index element={<Home />} />
          <Route path='about' element={<About></About>} />
          <Route path='*' element={<NoPage></NoPage>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
