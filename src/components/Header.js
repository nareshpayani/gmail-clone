import React from 'react'
import "../css/Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                {/* Icon Button is used for Effect */}
                <IconButton> 
                    <MenuIcon />
                </IconButton>
                <img src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-0.png" alt="" />
            </div>

            <div className="header__middle">
                <SearchIcon />
                <input type="text" placeholder="Search Mail"/>
                <ArrowDropDownIcon className="header__inputCaret" />
            </div>

            <div className="header__right">  
                <IconButton> 
                    <HelpOutlineIcon />
                </IconButton>          
                <IconButton> 
                    <AppsIcon />
                </IconButton>
                <IconButton> 
                    <NotificationsIcon />
                </IconButton>
                <Avatar />
            </div>
        </div>
    )
}

export default Header;
