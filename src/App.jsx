import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Singin from './Pages/Singin'
import Navber from './Component/Navber'
import Viwe from './Pages/Viwe'
import Cart from './Pages/Cart'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
    const[Cartarr,setcartarr]=useState([])
    const[searchItem,setsearch]=useState("")
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
    function search(searchItem){
      console.log(searchItem);
      setsearch(searchItem)
    }
  return (
    <>
  <BrowserRouter> 

<Navber Cartarr={Cartarr} search={search}/>

 
    <Routes>
       <Route path='/' element={<Home cartData={cartData} searchItem={searchItem}  />}/>
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
