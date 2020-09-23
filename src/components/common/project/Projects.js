import React from 'react'
import './projects.css'



function Projects (props) {
    
    return (
        <div className='project'>
            <a href={props.link}target="_blank" rel="noopener noreferrer"> 
                <img className='image-project' src={require('../../../src/'.concat(props.image))} alt={props.image}/> 
            </a>
            <div className='content-project'>
                <h3 >{props.title}</h3>
                <h4>{props.language}</h4>
            </div>
        </div>
    )
}



export default Projects