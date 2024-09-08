import React from 'react'
import Home from './Home/Home'
import Course from './Component/Course'
import { Navigate, Route, Routes } from "react-router-dom"
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'
import Signup from './Component/Signup'
import Contact from './Component/Contact'
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'

export default function App() {

  const [authUser, setAuthUser]=useAuth()
    console.log(authUser);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={authUser?<Course />:<Navigate to="/signup"/>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  )
}
