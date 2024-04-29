import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { getUsers } from "../../../api/users/index.js";
import Loader from "../../utils/Loader.jsx";
export default function Login() {
  const [loader, setLoader] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false)




  const handleLogin = async (e) => {
    e.preventDefault();
    if (email.length > 0 && password.length > 0) {
      try {
        setLoader(true)
        const response = await getUsers({ email, password })
        localStorage.setItem('user', JSON.stringify(response.username))
        setLoader(false)
        window.location.href = '/'
      } catch (error) {
        setLoader(false)
        setErr(true)
      }
    } else {
      alert('Please provide both email and password')
    }
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center contain">
        <div className="container">
          <div className="wrapper">
            <form action="" onSubmit={handleLogin} id="form">
              <h1 className="heading">Please Login!</h1>
              {err && err ? <span className="spans">Invalid Email or Password</span> : ''}
              <div className="input-box">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                />
                <i className="fa-solid fa-envelope"></i>
                {email && !email.includes('@gmail.com') ? <span className='spans'>email must be like,abc@gmail.com</span> : ''}
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

              <button disabled={!email && !email.length && !password && !password.length ? true : false} type="submit" className="createbtn">
                {loader ? <div className="load"><Loader /></div> : 'Login'}
              </button>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ marginTop: '10px' }}>
                  <Link style={{ color: 'aqua' }} to="/register" >Don't have accout?Register</Link>
                </div>
                <div style={{ marginTop: '10px' }}>
                  <Link style={{ color: 'aqua' }} to="/forget-password" >Forgot Passoword?</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

