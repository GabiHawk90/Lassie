import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <Link to="/">
                    {/* this image is trademarked and we have to replace it but this for now lol */}
                    <img src="" alt="logo" />
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
