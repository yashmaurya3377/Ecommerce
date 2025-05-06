import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Singin from './Pages/Singin'
import Navber from './Component/Navber'
import Viwe from './Pages/Viwe'


function App() {
  
  

  return (
    <>
  <BrowserRouter> 

<main className='mb-15'>
<Navber/>

</main>
 
    <Routes>
       <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Singin' element={<Singin/>}/>
      <Route path='/cart' element={<Home/>}/>
      <Route path='/viwe' element={<Viwe/>}/>
   
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
