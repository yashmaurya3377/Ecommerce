import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Singin from './Pages/Singin'
import Navber from './Component/Navber'

function App() {

  return (
    <>
  <BrowserRouter> 
  <Navber/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Singin' element={<Singin/>}/>
      <Route path='/cart' element={<Home/>}/>
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
