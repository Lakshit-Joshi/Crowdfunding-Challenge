import React from 'react';
import hamburger from "./assets/icon-hamburger.svg";
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <h1>Crowdfunding</h1>
            <div className="header-menu">
                <h5>About</h5>
                <h5>Discover</h5>
                <h5>Ger Started</h5>
            </div>
            <img src={hamburger} alt="hamburger" className="hamburger"></img>
        </div>
    )
}

export default Header
