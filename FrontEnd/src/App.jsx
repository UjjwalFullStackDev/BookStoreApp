import React from 'react'
import Home from './Home/Home'
import Course from './Component/Course'
import { Route, Routes } from "react-router-dom"
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'
import Signup from './Component/Signup'
import Contact from './Component/Contact'

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={<Course />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}
