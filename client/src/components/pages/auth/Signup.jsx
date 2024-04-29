import React, { useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import addUser from '../../../store/usersSlice.jsx'
import { createUsers } from "../../../api/users/index.js";
import Loader from "../../utils/Loader.jsx";

export default function Signup() {
  const [loader, setLoader] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [usernameError, setUsernameError] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const postUser = (e) => {
    if (username && email && password) {
      setLoader(true)
      e.preventDefault();
      try {
        const postUser = createUsers({ username, email, password });
        dispatch(addUser(postUser.data))
        setLoader(false)
        navigate('/login')
      } catch (error) {
        if (error.response.data.message === 'Email already exists') {
          setLoader(false)
          setEmailError(true)
        }
        else if (error.response.data.message === 'Username already exists') {
          setLoader(false)
          setUsernameError(true)
        }
      }

    } else {
      alert('Please fill out form')
    }
  };

  return (
    <>
      <div className="d-flex vh-100  justify-content-center align-items-center contain">
        <div className="container">
          <div className="wrapper">
            <form action="" onSubmit={postUser} id="form">
              <h1 className="heading">Register Yourself</h1>
              <div className="input-box">
                <input
                  id="username"
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  placeholder="Username"

                />
                <i className="fa-solid fa-circle-user"></i>
                {usernameError && usernameError ? <span className="spans">Username is already taken</span> : ''}

              </div>
              <div className="input-box">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                />
                <i className="fa-solid fa-envelope"></i>
                {email && !email.includes('@gmail.com') ? <span className='spans'>email must be like,abc@gmail.com</span> : ''}
                {emailError && emailError ? <span className="spans">Email Already Exists</span> : ''}
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

              <button disabled={!username & !username.length & !email & !email.length & !password & !password.length ? true : false} type="submit" className="createbtn">
                {loader ? <div className="load"><Loader /></div> : 'Submit'}
              </button>
              <p style={{ marginTop: '10px' }}>
                <Link style={{ color: "aqua" }} to="/login">
                  Already have accout?login
                </Link>
              </p>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}
