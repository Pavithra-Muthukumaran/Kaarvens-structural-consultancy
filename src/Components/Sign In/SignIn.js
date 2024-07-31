import React from 'react'
import './SignIn.css'

const SignIn = () => {
  return (
    <div className='signin-page-container'>
            <h1>Sign In Page</h1>
            <form >
                <div className="user-name-container">
                <input type="text" placeholder="First Name" required/>
                </div>
                <div className="iuser-name-container">
                <input type="text" placeholder="Last Name"/>
                </div>
                <div className="user-mail-container">
                <input type="email" placeholder="Email"/>
                </div>
                <div className="user-mobileno-container">
                <input type="number" placeholder="Mobile"/>
                </div>
                <div className="user-pwd-container">
                <input type="password" placeholder="Enter a Password" required/>
                </div>
                <div className="user-pwd-container">
                <input type="password" placeholder="Confrim a Password" required/>
                </div>
                <div className="signup-checkbox">
                <input type="checkbox"  required/>
                <label > Agree and Continue</label>
                </div>
                <button type="submit">Submit</button>
                <div className="login-register-link">
                    <p>You already have a account? <a href="#">Login here</a></p>
                </div>
            </form>
        </div>
  )
}

export default SignIn;

