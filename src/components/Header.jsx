import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import logo from '../images/smieciarka-logo.png'
import "../stylesheet/Header.css";



const Header = () => {
    return (
        <div className="Header">
        <div className="Header_container">
            <div className="Header_leftContainer">
            <img src={logo} alt="smieciarka-logo" className="Header_leftContainerLogo"
            />
            </div>
            <div className="Header_centerInputField">
            <SearchIcon className="Header_centerIcon" />
            <input type="text" placeholder="Search" className="search" />
     <div className="location"></div>
                <LocationOnIcon className="Header_centerlocation" />
         
            
            

            </div>
            <div className="Header_rightContainer">
            <a href="/user-signin" className="Header_rightLinkLogin">Login</a>
            <a href="/user-signup" className="Header_rightLinkRegister">Rejestracja</a>
    
            </div>
        </div>
        </div>
    )
}

export default Header
