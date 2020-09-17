import React from 'react'


const twitter = 'https://www.twitter.com/AlejoPrieto7' 
const linkedin = 'https://www.linkedin.com/in/alejocasti/'
const github = 'https://www.github.com/AlejoCasti'
function Redes () {
    return (
        <div style={style.redes}>
            <a href={twitter}><img style={style.img} src={require('../../src/twitter.png')} alt='twitterImg'/></a>
            <a href={linkedin}><img style={style.img} src={require('../../src/linkedin.png')} alt='linkedinImg'/></a>
            <a href={github}><img style={style.img} src={require('../../src/github.png')} alt='githubImg'/></a>
        </div>
    )
}

const style = {
    img: {
        height: '25px',
        padding: '10px 20px',
        filter: 'brightness(0) invert(1)'
    },
    redes: {
        float: 'right',
        width: '200px',
        display: 'flex',
        flexDirection: 'row',
    }
}

export default Redes