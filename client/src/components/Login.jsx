import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { getUsers } from "../api/users";
import Loader from "./loader";
export default function Login() {
  const [loader, setLoader] = useState(false)
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const handleLogin = async (e) => {
    setLoader(true)
    e.preventDefault();
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

