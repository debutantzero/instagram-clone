import React from 'react'
import logo from '../image/logo.png'
import {NavLink} from "react-router-dom"
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="navbar-search">
                    <i className="fas fa-search"></i>
                    <input type="text" className="" placeholder="Rechercher"/>
                </div>
                <div className="navbar-icon">
                    <NavLink to="/" className="btn fas fa-home"></NavLink>
                    <NavLink to="/direct" className="btn fab fa-facebook-messenger"></NavLink>
                    <NavLink to="/explore" className="btn far fa-compass"></NavLink>
                    <i className="btn far fa-heart"></i>
                    <i className="btn far fa-user-circle"></i>
                </div>
            </div>
        </div>
    )
}
