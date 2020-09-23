import React, {useState} from 'react'
import './redes.css'

const twitter = 'https://www.twitter.com/AlejoPrieto7' 
const linkedin = 'https://www.linkedin.com/in/alejocasti/'
const github = 'https://www.github.com/AlejoCasti'
function Redes (props) {
    const [color] = useState(props.color === 'white' ?
    {filter: 'brightness(0) invert(1)'}: {})

    return (
        <div className='redes'>
            <a href={twitter} target="_blank" rel="noopener noreferrer"><img className='img' style={color} src={require('../../../src/twitter.png')} alt='twitterImg'/></a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer"><img className='img' style={color} src={require('../../../src/linkedin.png')} alt='linkedinImg'/></a>
            <a href={github} target="_blank" rel="noopener noreferrer"><img className='img' style={color} src={require('../../../src/github.png')} alt='githubImg'/></a>
        </div>
    )
}


export default Redes