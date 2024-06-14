import React from 'react'
import './App.css'
import Onboarding from './pages/Onboarding/Onboarding'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route index element={<Login />} />
        <Route path="register" element={<Onboarding />} />
        <Route path='home' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App