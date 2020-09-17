import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'


function Navbar () {
    return (
        <div className='navbar'>
            <ul className='menu'>
                <Link className='option' to='/'>
                    <li>HOME</li>
                </Link>
                <Link className='option'to='/projects'>
                    <li>PROJECTS</li>
                </Link>
                <Link className='option'to='/projects'>
                    <li>ABOUT</li>
                </Link>
            </ul>
        </div>
    )
}


export default Navbar