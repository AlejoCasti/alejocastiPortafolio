import React from 'react'
import Projects from '../../common/project/Projects'
import Navbar from '../../common/navbar/Navbar'
import './projects.css'

function Project () { 
    var lista = [
        {
            title: 'Portfolio',
            language: 'Portfolio, written in React js',
            image: 'Portfolio.png',
            link: 'https://alejocasti.tech'
        },
        {
            title: 'Crem helado',
            language: 'Desktop application written in C# and SQL',
            image: 'CremHelado.png',
            link: 'https://github.com/AlejoCasti/Crem_helado'
        },
        {
            title: 'Dashboard',
            language: 'Dashboard built in Angular, deployed in heroku',
            image: 'Dashboard.png',
            link: 'http://analytic-lab.herokuapp.com'
        }
    ]
    return (
        <div className='project-page'>
            <Navbar menuColor='black' redesColor='white'/>
            <div className='projects-section'>
                {
                    lista.map(project => (<Projects 
                            title={project.title} 
                            language={project.language} 
                            image={project.image}
                            link={project.link} />))
                }
            </div>
        </div>
    )
}


export default Project