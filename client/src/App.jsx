import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Createproduct from "./components/Createproduct";
import Updateproduct from "./components/Updateproduct";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Protected from "./components/Protected";
import ProductDetail from "./components/productDetail";
import { useEffect, useState } from "react";
import Home from "./components/Home";

function App() {
  const [name,setName]=useState('')
  useEffect(()=>{
    getLocal()
  },[])
 const getLocal=()=>{
  const auth=localStorage.getItem('user')
   setName(auth)
  }
  return (
    <>
      <BrowserRouter>
        {name?<Navbar/>:''}
        <Routes>
          <Route element={<Protected/>}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/addNewProduct" element={<Createproduct />} />
          <Route path="/update/:id" element={<Updateproduct />} />
          <Route path="/productDetailPage" element={<ProductDetail/>} />
          <Route path="/*" element={<Navigate to={'/'} />} />
          </Route>
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
