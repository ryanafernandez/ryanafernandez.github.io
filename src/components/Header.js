import React from 'react';
import { NavLink } from "react-router-dom"

function Header() {
    return (
        <header className='header'>
            <div className='brand'>
                <h1>RYAN FERNANDEZ</h1>
            </div>
            <ul className='navigation'>
                <li className='nav-item'>
                    <a href="#about">ABOUT</a>
                </li>
                <li className='nav-item'>
                    <a href="#portfolio">PORTFOLIO</a>
                </li>
                <li className='nav-item'>
                    <a href="#contact">CONTACT</a>
                </li>
                {/* <li className='nav-item'>
                    <a href="#resume">RESUME</a>
                </li> */}
            </ul>
        </header>
    )
}

export default Header;