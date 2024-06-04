import React from 'react'
import Home from './components/home/Home'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Register from './components/register/Register'
import Login from './components/login/Login'
import Product from './components/product/Product'
import ProductDetail from './components/productDetail/ProductDetail'
import Bai1 from './components/Baitap/Bai1'
import Bai2 from './components/Baitap/Bai2'
import Bai3 from './components/Baitap/Bai3'
import PrivateRouter from './components/Baitap/Bai5+6/PrivateRouter'

export default function App() {
  return (
    <div>App
      
      <Routes>
        {/* <Route path="/home" element={<Home></Home>}>
          <Route  path="/home/header" element={<Header></Header>} ></Route>
        </Route>
        <Route path="/register" element={<Register></Register>}>
        </Route>
        <Route path="/login" element={<Login></Login>}>
        </Route>
        <Route path="/product" element={<Product></Product>}>
        </Route>
        <Route path="/productDetail/:productId" element={<ProductDetail></ProductDetail>}>
        </Route> */}
        <Route path="/Baitap/Bai1/:id" element={<Bai1></Bai1>}></Route>
        <Route path="/Baitap/Bai2/:name" element={<Bai2></Bai2>}></Route>
        <Route path="/Baitap/Bai3" element={<Bai3></Bai3>}></Route>
        <Route path="/Baitap/Bai5+6" element={<PrivateRouter></PrivateRouter>}></Route>
      </Routes>
    </div>
  )
}
