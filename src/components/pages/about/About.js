import React from 'react'
import Navbar from '../../common/navbar/Navbar'
import './about.css'

function About (props) {
    return (
        <div className='project-page'>
            <Navbar menuColor='black' redesColor='white'/>
            <div className='undeconstruction'>
                <img src='https://img.pngio.com/website-under-construction-png-png-image-under-construction-png-548_361.png' alt='underconstruction'/>
            </div>
        </div>
    )
}


export default About

