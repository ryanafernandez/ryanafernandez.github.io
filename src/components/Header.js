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
                    <a href="#about">About</a>
                </li>
                <li className='nav-item'>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li className='nav-item'>
                    <a href="#contact">Contact</a>
                </li>
                <li className='nav-item'>
                    <a href="#resume">Resume</a>
                </li>
            </ul>
        </header>
    )
}

export default Header;