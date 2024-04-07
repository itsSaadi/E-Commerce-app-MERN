import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../store/usersSlice";
import { createUsers } from "../api/users";
import Loader from "./loader";

export default function Signup() {
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const postUser = async (e) => {
    if (username && email && password) {
      setLoader(true)
      e.preventDefault();
      const postUser = await createUsers({ username, email, password });
      console.log('succesfullly posted', postUser)
      dispatch(addUser(postUser.data))
      setLoader(false)
      navigate('/login')
    } else {
      alert('Please fill out form')
    }

  };

  return (
    <>
      <div className="d-flex vh-100  justify-content-center align-items-center contain">s
        <div className="container">
          <div className="wrapper">
            <form action="" onSubmit={postUser}>
              <h1 className="heading">Register Yourself</h1>
              <div className="input-box">
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  placeholder="Username"

                />
                <i className="fa-solid fa-circle-user"></i>
              </div>
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

              <button type="submit" className="createbtn">
                {loader ? <div className="load"><Loader /></div> : 'Submit'}
              </button>
              <Link style={{ color: "aqua" }} to="/login">
                Already have accout?login
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
