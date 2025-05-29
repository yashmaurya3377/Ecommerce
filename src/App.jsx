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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Pages/Footer'

function App() {
  const [Cartarr, setcartarr] = useState([])
  const [searchItem, setsearch] = useState("")

  function cartData(ele) {
    ele.qty = 1
    let find = Cartarr.find((value) => value.id == ele.id)
    if (find) {
      return toast.error('Item already exists in cart!');
    }

    let copyArr = [...Cartarr]
    copyArr.push(ele)
    setcartarr(copyArr)
    toast.success("Item added to cart!");
  }

  function search(searchItem) {
    setsearch(searchItem)
  }

  return (
    <>
      <BrowserRouter>
        <Navber Cartarr={Cartarr} search={search} />
        <Routes>
          <Route path='/' element={<Home cartData={cartData} searchItem={searchItem} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Singin' element={<Singin />} />
          <Route path='/cart' element={<Cart Cartarr={Cartarr} />} />
          <Route path='/viwe' element={<Viwe />} />
        </Routes>
        
        <ToastContainer 
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          className="toast-container fixed"
        
          toastClassName="centered-toast"
        />
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App