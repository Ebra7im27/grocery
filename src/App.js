import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";


// pages
import Login from "./Pages/authentication/Login";
import Signup from "./Pages/authentication/Signup";
import Home from "./Pages/Home";
import DairyAndMilkProducts from './Pages/DairyAndMilkProducts';
import TeaAndCoffeeProducts from './Pages/TeaAndCoffeeProducts';
import SaucesProducts from './Pages/SaucesProducts';
import CleanlinessProducts from './Pages/CleanlinessProducts';
import OilsAndMargaineProducts from './Pages/OilsAndMargaineProducts';
import SoftDrinksProducts from './Pages/SoftDrinksProducts';
import EggsProducts from './Pages/EggsProducts';
import AssaliProducts from './Pages/AssaliProducts';
import SingleProduct from './Pages/SingleProduct';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path='/dairyandmilkproducts' element={<DairyAndMilkProducts />} />
      <Route path='/teaandcoffeeproducts' element={<TeaAndCoffeeProducts />} />
      <Route path='/saucesproducts' element={<SaucesProducts />} />
      <Route path='/cleanlinessproducts' element={<CleanlinessProducts />} />
      <Route path='/oilsandmargaineproducts' element={<OilsAndMargaineProducts />} />
      <Route path='/softdrinksproducts' element={<SoftDrinksProducts />} />
      <Route path='/eggsproducts' element={<EggsProducts />} />
      <Route path='/assaliproducts' element={<AssaliProducts />} />

      <Route path='/product/:id' element={<SingleProduct />} />
    </Routes>
  )
}

export default App
