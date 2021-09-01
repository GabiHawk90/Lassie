import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import AddBoxIcon from '@material-ui/icons/AddBox';
import Tooltip from '@material-ui/core/Tooltip';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

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
                
                <Link to="/signup"> 
                <div className="header_option">
                    Sign In
                    </div>
                </Link>

                <Tooltip title="Add a New Post!" arrow>
                <Link to="/createpost"> 
                <div className="header_option">
                    <AddBoxIcon title="Add post"/>
                    </div>
                </Link>
                </Tooltip>

                <Tooltip title="Your Account" arrow>
                <Link to="/profile"> 
                <div className="header_option">
                        <AccountBoxIcon />
                    </div>
                </Link>
                </Tooltip>
            </div>
        </div>
    )
}

export default Header
