import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/educate" >Educate</NavLink>
            <NavLink to="/communicate" >Communicate</NavLink>
            <NavLink to="/advocate" >Advocate</NavLink>
        </div>
    )
}

export default Navbar
