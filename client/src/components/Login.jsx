import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
export default function Login() {
  const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 

  const handleLogin=async(e)=>{
    e.preventDefault();
    const response=await axios.get('http://localhost:5001/')
       const users=response.data;
       const user=users.find(x=>x.email===email && x.password===password)    
       if(user){
        localStorage.setItem('user',JSON.stringify(user))
        window.location.href='/'
         }else{
        alert('User Not Found')
       }
      }

  return (
    <>
      <div className="d-flex vh-100  justify-content-center align-items-center contain">
        <div className="container">
          <div className="wrapper">
            <form action="" onSubmit={handleLogin}>
              <h1 className="heading">Please Login!</h1>
              
              <div className="input-box">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  required
                />
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="input-box">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  required
                />
               <i className="fa-solid fa-lock"></i>
              </div>

              <button type="submit" className="createbtn">
                Login
              </button>
              <Link  style={{color:'aqua'}} to="/register" >Don't have accout?Register</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

