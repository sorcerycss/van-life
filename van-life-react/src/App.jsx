import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Vans from './components/Vans.jsx'

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
