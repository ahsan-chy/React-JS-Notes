/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import Navbar from './component/Navbar'
import NewsItems from './component/NewsItems'
import { Route, Routes } from "react-router-dom";
import Checkout from './Pages/Checkout';
import Home from './Pages/Home';
import OrderDetails from './Pages/OrderDetails';
import CounterDisplay from './Pages/CounterDisplay';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import { AuthProvider } from './context/AuthProvider';
import { ProductProvider } from './context/ProductProvider';
import Product from './Pages/Product';
import Form from './context/Form';

export default function App() {
  return (
    <div>
      <Navbar/> 

      <AuthProvider>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form/>}/>   //!  useState - useReducer Hook 
          <Route path="/product" element={<Product/>}/>
          <Route path="/NewsItems" element={<NewsItems />} />
          <Route path="/Checkout/:id" element={<Checkout />} />
          <Route path="/OrderDetails" element={<OrderDetails />} />
          <Route path="/CounterDisplay" element={<CounterDisplay />} />
          <Route path="/register" element={<Register />} />        
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </ProductProvider>
      </AuthProvider>

    </div>
  )
}
