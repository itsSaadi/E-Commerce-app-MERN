import React, { useState } from 'react'
import Loader from '../../utils/Loader'
import { Link } from 'react-router-dom'
import { forgetPassword } from '../../../api/auth/index.js'

function Forgetpassword() {
  const [email, setEmail] = useState('')
  const [loader, setLoader] = useState(false)
  const [messageModal, setMessageModal] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoader(true)
    const user = await forgetPassword({ email })
    if (!user) {
      setError(true)
      setLoader(false)
    }
    console.log(user)
    setMessageModal(true)
  }

  return (

    <>
      {
        !messageModal ? (
          <div className="d-flex vh-100  justify-content-center align-items-center contain">
            <div className="container">
              <div className="wrapper">
                <form action="" onSubmit={handleSubmit} id="form">
                  <h1 className="heading">Reset Your Password</h1>
                  {error && error ? <span className="spans">User not exists</span> : ''}
                  <div className="input-box">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Email"
                    />
                    <i className="fa-solid fa-envelope"></i>
                    {email && !email.includes('@gmail.com') ? <span className='spans'>email must be like,abc@gmail.com</span> : ''}
                  </div>
                  <button disabled={!email && !email.length ? true : false} type="submit" className="createbtn">
                    {loader ? <div className="load"><Loader /></div> : 'Reset'}
                  </button>
                  <p style={{ marginTop: '10px' }}>
                    <Link style={{ color: "aqua" }} to="/login">
                      Remember Password? login
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div >
        ) : (
          <div className="d-flex vh-100  justify-content-center align-items-center contain">
            <div className="container">
              <div className="wrapper">
                <h3>Reset Link sent to {email}</h3>
                <p style={{ marginTop: '10px' }}>
                  <Link style={{ color: "aqua" }} to="/login">
                    Go to Login
                  </Link>
                </p>
              </div>
            </div>
          </div >
        )
      }



    </>
  )
}

export default Forgetpassword