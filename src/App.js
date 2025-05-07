import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";


// pages
import Login from "./Pages/authentication/Login";
import Signup from "./Pages/authentication/Signup";
import Home from "./Pages/Home";
import AllCategoryWithProducts from './Pages/AllCategoryWithProducts';
import SingleProduct from './Pages/SingleProduct';
import Cart from './Pages/Cart';
import PageNotFound from './Pages/PageNotFound';
import Fav from './Pages/Fav';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path='/home/category/:id' element={<AllCategoryWithProducts />} />
      <Route path='/product/:id' element={<SingleProduct />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/favorite' element={<Fav />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/contact' element={<ContactUs />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default App
