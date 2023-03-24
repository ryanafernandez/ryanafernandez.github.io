import React from 'react';
import { NavLink } from "react-router-dom"

function Header() {
    return (
        <header className='header'>
            <div className='brand'>
                <h1>Ryan Fernandez</h1>
            </div>
            <ul className='navigation'>
                <li className='nav-item'>
                    <NavLink exact to="/">About</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="/resume">Resume</NavLink>
                </li>
            </ul>
        </header>
    )
}

export default Header;