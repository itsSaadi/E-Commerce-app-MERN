import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import Home from '../pages/dashboard/Home'

export default function Protected() {
    const auth=localStorage.getItem('user')
    return auth?<Outlet/>:<Navigate to={'/login'}/>
}
