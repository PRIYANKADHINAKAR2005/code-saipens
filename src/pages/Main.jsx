import React from 'react'
import Header from '../components/Header'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../css/header.css'
import '../css/style.css'
import '../css/home.css'


const Main = () => {
  return (
    <BrowserRouter>
      <div className='main'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default Main