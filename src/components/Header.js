import React, { useState } from 'react';

function Header() {
    return (
        <header className='header'>
            <div className='brand'>
                <h1>Ryan Fernandez</h1>
            </div>
            <ul className='navigation'>
                <li className='nav-item'>
                    <a>About</a>
                </li>
                <li className='nav-item'>
                    <a>Projects</a>
                </li>
                <li className='nav-item'>
                    <a>Contact</a>
                </li>
                <li className='nav-item'>
                    <a>Resume</a>
                </li>
            </ul>
        </header>
    )
}

export default Header;