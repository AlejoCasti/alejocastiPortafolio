import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './menu.css'


function Menu (props) {
    const [mainColor] = useState(props.navColor);
    const [auxColor] = useState(mainColor === 'black' ? 'white' : 'black');
    const [backColor] = useState(mainColor);

    return (
        <div className='global-menu'>
            <ul className='menu'>
                <Link className='option' style={{color: mainColor, backgroundColor: 'transparent'}}
                onMouseEnter={toggleHover} onMouseLeave={toggleHover} to='/'>
                    <li>HOME</li>
                </Link>
                <Link className='option' style={{color: mainColor, backgroundColor: 'transparent'}}
                onMouseEnter={toggleHover} onMouseLeave={toggleHover} to='/projects'>
                    <li>PROJECTS</li>
                </Link>
                <Link className='option' style={{color: mainColor, backgroundColor: 'transparent'}} 
                onMouseEnter={toggleHover} onMouseLeave={toggleHover} to='/about'>
                    <li>ABOUT</li>
                </Link>
            </ul>
        </div>
    )
    
    function toggleHover(e) {
        e.currentTarget.style.color = e.currentTarget.style.color === mainColor ? auxColor : mainColor
        e.currentTarget.style.backgroundColor = e.currentTarget.style.backgroundColor === backColor ? 'transparent' : backColor
        e.currentTarget.style.textDecoration = 'none'
    }
    
}


export default Menu