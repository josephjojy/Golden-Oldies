import React from 'react';
import logo from './logo.png';
import './Header.css';
function Header(props) {
    return(
        <div className="Header">
            <br/>
            <img src={logo} className="logo" alt="logo"/><br/>
            <input type="text" className="search_box" placeholder="Search for Songs" onChange={(e) => props.onSearchChange(e.target.value)}/>
        </div>
    );
}

export default Header;