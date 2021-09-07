import React from 'react'
import { Link } from 'react-router-dom'
import './SignUp.css'

function SignUp() {
    return (
        <div className="SignUp">
            <div className="SignUp_Container">
                <Link to="/">
                    <img 
                    className="SignUp_Logo"
                    src="https://fontmeme.com/permalink/210901/ff5c0e67728860698b0f5aec024fd393.png" 
                    alt="logo" />
                </Link>

                <h1>Sign-in</h1>
                <form action="">
                    <h5>Email</h5>
                    <input 
                        type="text" 
                        // value={email}
                        // onChange = {e => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input 
                        type='password' 
                        // value={password} 
                        // onChange={e => setPassword(e.target.value)} 
                    />
                    <button 
                        // onClick={ signIn }
                        className="login_signInButton"
                        type='submit'
                    >
                        Sign In
                    </button>
                </form>

                <p>
                By signing-in you agree to Lassie, Lassie Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>


                <button 
                    // onClick={ register }
                    className="login_registerButton">
                    Create your Lassie Account
                </button>
            </div>
        </div>
    )
}

export default SignUp
