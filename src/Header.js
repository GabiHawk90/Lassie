import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <Link to="/">
                    <img 
                    className="header_logo"
                    src="https://fontmeme.com/permalink/210901/ff5c0e67728860698b0f5aec024fd393.png" 
                    alt="logo" />
                </Link>
            </div>

            <div className="header_right">
                <Link to="/profile"> 
                <div className="header_option">
                    Profile 
                </div>
                </Link>
                <Link to="/signup"> 
                <div className="header_option">
                    Sign Up
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
