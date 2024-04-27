import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Products from "./components/pages/products/Products.jsx";
import Navbar from "./components/pages/dashboard/Navbar";
import Createproduct from "./components/pages/products/Createproduct";
import Updateproduct from "./components/pages/products/Updateproduct";
import Signup from "./components/pages/auth/Signup";
import Login from "./components/pages/auth/Login";
import Protected from "./components/utils/Protected";
import ProductDetail from "./components/pages/products/ProductDetail";
import { useEffect, useState } from "react";
import Home from "./components/pages/dashboard/Home";
import Forgetpassword from "./components/pages/auth/Forgetpassword.jsx";


function App() {

  const [name, setName] = useState('')
  useEffect(() => {
    getLocal()
  }, [])
  const getLocal = () => {
    const auth = localStorage.getItem('user')
    setName(auth)
  }
  return (
    <>
      <BrowserRouter>
        {name ? <Navbar /> : ''}
        <Routes>
          <Route element={<Protected />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/addNewProduct" element={<Createproduct />} />
            <Route path="/update/:id" element={<Updateproduct />} />
            <Route path="/productDetailPage/:id" element={<ProductDetail />} />
            <Route path="/*" element={<Navigate to={'/'} />} />
          </Route>
          //Auth
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<Forgetpassword />} />
          //Auth

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
