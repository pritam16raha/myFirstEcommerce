//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Cart from './Pages/Cart/Cart';
import Login from './Pages/LoginPage/Login'
import Register from './Pages/Register/Register'

import HomePage from './Components/HomePage/HomePage'
import SingleProduct from '../src/Pages/ProductList/SingleProduct';
import ProductList from '../src/Pages/ProductList/ProductList'
//import Product from './Components/Product/Product';
//import SingleProduct from './Pages/ProductList/SingleProduct'
//import Register from './Pages/Register/Register'

//import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
//import SingleProductComponent from './Components/Product/SingleProductComponent';



function App() {
  //const [count, setCount] = useState(0)
  const user = true;
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<HomePage/>} />

          <Route path='/product/:category' element={<ProductList/>} />

          <Route path='/product/:id' element={<SingleProduct />} />

          <Route path='/cart' element={<Cart/>} />

          <Route path='/login' element={user ? <Navigate to="/" /> : <Login />} /> {/* If user is logged in, then redirect to home page, else go to login page */}

          <Route path='/register' element={user ? <Navigate to="/" /> : <Register />} />

          

      </Routes>
    </Router>
  )
}

export default App;