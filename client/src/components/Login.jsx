import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { getUsers } from "../api/users";
import Loader from "./loader";
export default function Login() {
  const [emailError, setemailError] = useState(false)
  const [loader, setLoader] = useState(false)
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const handleLogin = async (e) => {
    e.preventDefault();
    if (email.length > 0 && password.length > 0) {
      setLoader(true)
      const response = await getUsers()
      console.log(response)
      const users = await response.data;
      const user = users.find(x => x.email === email && x.password === password)
      if (user) {
        localStorage.setItem('user', JSON.stringify(user))
        alert('user found')
        setLoader(false)
        window.location.href = '/'
      } else {
        alert('User Not Found')
        setLoader(false)
      }
    } else {
      alert('Please fill form')
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
                />
                <i className="fa-solid fa-envelope"></i>
                {email && !email.includes('@gmail.com')  ? <span className='spans'>email must be like,abc@gmail.com</span> : ''}
              </div>
              <div className="input-box">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"

                />
                <i className="fa-solid fa-lock"></i>
                {password && password.length < 8 ? <span className='spans'>Password must contain at least 8 letters !</span> : ''}

              </div>

              <button type="submit" className="createbtn">
                {loader ? <div className="load"><Loader /></div> : 'login'}
              </button>
              <Link style={{ color: 'aqua' }} to="/register" >Don't have accout?Register</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

