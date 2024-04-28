import React, { useState } from 'react'
import Loader from '../../utils/Loader'
import { Link, useParams } from 'react-router-dom'
import { resetPassword } from '../../../api/auth'

function ResetPassword() {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loader, setLoader] = useState(false)
    const [messageModal, setMessageModal] = useState(false)
    const [error, setError] = useState(false)

    const { id } = useParams()
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoader(true)
        if (password !== confirmPassword) {
            setError(true)
            setLoader(false)
        } else {
            await resetPassword({ id, password })
            setMessageModal(true)
        }
    }
    return (

        <>
            {
                !messageModal ? (
                    <div className="d-flex vh-100  justify-content-center align-items-center contain">
                        <div className="container">
                            <div className="wrapper">
                                <form action="" onSubmit={handleSubmit} id="form">
                                    <h1 className="heading">Enter New Password</h1>
                                    {error && error ? <span className="spans">Password not Matched</span> : ''}
                                    <div className="input-box">
                                        <input
                                            onChange={(e) => setPassword(e.target.value)}
                                            type="password"
                                            placeholder="Password"

                                        />
                                        <i className="fa-solid fa-lock"></i>
                                        {password && password.length < 8 ? <span className='spans'>Password must contain at least 8 letters !</span> : ''}
                                    </div>
                                    <div className="input-box">
                                        <input
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            type="password"
                                            placeholder="Confirm Password"

                                        />
                                        <i className="fa-solid fa-lock"></i>
                                        {confirmPassword && confirmPassword.length < 8 ? <span className='spans'>Password must contain at least 8 letters !</span> : ''}
                                    </div>
                                    <button disabled={!password && !password.length && password.length < 8 ? true : false} type="submit" className="createbtn">
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
                                <h3>Your Password is succcesfully Changed</h3>
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

export default ResetPassword