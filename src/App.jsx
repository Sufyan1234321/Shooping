import { useEffect, useState } from 'react'
import Header from './component/Header/Header'
import Banner from './component/topBanner/Banner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './component/Header/NavBar';
import Tshirt from './component/tshirt/Tshirt';
import ProductFilter from './component/ProductFilter/ProductFilter.jsx'


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css'
import Login from './component/login/Login';
import SignUp from './component/SignUP/SignUp';
import Dashboard from './component/AdminDashboard/Dashboard';
import Adduser from './component/AdminDashboard/Adduser.jsx';
import Deleteuser from './component/AdminDashboard/Deleteuser.jsx';
import Edituser from './component/AdminDashboard/Edituser.jsx';
import ProtectedRoute from './component/ProtectedRoute/ProtectedRoute.jsx';
import Addproduct from './component/AddProducts/Addproduct.jsx';
import Cart from './component/Cart/AddToCart.jsx'
import DeleteProduct from './component/DeleteProduct/DeleteProduct.jsx';
import EditProduct from './component/EditProduct.jsx';

function App() {






  return (
    <>

      <BrowserRouter>
        <Header />

        <NavBar />
        <Routes>
          <Route path='/' element={<Banner />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/admin' element={<Login />}></Route>
          <Route path='/SignUp' element={<SignUp />}></Route>
          <Route path='/Dashboard' element={
            <ProtectedRoute allowedRoles={['admin']}>
              <Dashboard />
            </ProtectedRoute>
          }>
            <Route path='Adduser' element={<Adduser />}></Route>
            <Route path='Deleteuser' element={<Deleteuser />}></Route>
            <Route path='Edituser' element={<Edituser />}></Route>


            <Route path='Addproduct' element={<Addproduct />}></Route>
            <Route path='Deleteproduct' element={<DeleteProduct />}></Route>
            <Route path='editproduct' element={<EditProduct />}></Route>
            
          </Route>
          <Route path='/:category/:Products' element={<Tshirt />}></Route>
          <Route path='/search' element={<ProductFilter />}></Route>
          <Route path='/Cart' element={<Cart />}></Route>
        </Routes>

      </BrowserRouter>



    </>
  )
}

export default App
