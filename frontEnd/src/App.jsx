import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import Subscription from './pages/Subscription'
import MyProfile from './pages/MyProfile'

const App = () => {
  return (
    <div>
     <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={ <Register/>} />
        <Route path='/subscription' element={<Subscription />} />
        <Route path='/myprofile' element={ <MyProfile/>} />
       
      </Routes>
    </div>
  )
}

export default App