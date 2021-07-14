import React from"react";
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();

    return (
        <ul className='nav nav-tabs p-2'>
            <li className='nav-item'>
                <Link to='/' className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>
                    About
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/projects' className={location.pathname === '/projects' ? 'nav-link active' : 'nav-link'}>
                    Projects
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/contact' className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}>
                    Contact Info
                </Link>
            </li>
        </ul>
    );
}

export default Navbar;