import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Singin from './Pages/Singin'
import Navber from './Component/Navber'
import Viwe from './Pages/Viwe'
import Cart from './Pages/Cart'

function App() {
    const[Cartarr,setcartarr]=useState([])

    function cartData(ele){
       
      // console.log(ele);
      ele.qty=1
      let find=Cartarr.find((value)=>value.id==ele.id)
      if(find){
        return alert('item already exists');
      }
      let copyArr = [...Cartarr]
      copyArr.push(ele)
      setcartarr(copyArr)
     
    }  

  return (
    <>
  <BrowserRouter> 

<Navber/>

 
    <Routes>
       <Route path='/' element={<Home cartData={cartData} />}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Singin' element={<Singin/>}/>
      <Route path='/cart' element={<Cart Cartarr={Cartarr} />}/>
      <Route path='/viwe' element={<Viwe/>}/>
   
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
