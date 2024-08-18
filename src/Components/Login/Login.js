import React, { useState } from 'react'
import './Login.css'
import { FaUser, FaLock } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const users = useSelector((state) => state.userInfo.users)

    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    const handleLogin = (e) => {
        e.preventDefault()
        const userFound = users.find((user) => user.name === name && user.pass === pass)
        if (users.name === 'admin' & users.pass === 'admin@123') {
            alert("you logged in as a admin")
            navigate('/Services')
        }
        else if (userFound) {
            alert('You are logged in as a user')
            navigate('/Services')
        }
        else {
            alert("invalid login id or pass")
            navigate('/')
        }
    }
    return (
        <div className='login-page-container'>
            <h1>Login Page</h1>
            <form>
                <div className="user-name-container">
                    <label>User Name</label>
                    <input type="text" placeholder="UserName" onChange={(e) => setName(e.target.value)} required />
                    <FaUser className="icon" />
                </div>
                <div className="user-password-container">
                    <label>Password</label>
                    <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} required />
                    <FaLock className="icon" />
                </div>
                <div className="login-checkbox">
                    <label1><input type="checkbox" /> Remember me</label1>
                    <a href="">forget password</a>
                </div>
                <button type="submit" onClick={handleLogin}>Log In</button>
                <div className="login-register-link">
                    <p>Don't have any account? <a href="#">Sign In</a></p>
                </div>

            </form>
        </div>
    )
}

export default Login