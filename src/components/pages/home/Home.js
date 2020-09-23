import React from 'react'
import Navbar from '../../common/navbar/Navbar'
import './home.css'


function Home () {
  return (
    <div className='home'>
      <Navbar menuColor='white'/>
      <div className='content'>
        <h1 className='title'>ALEJO</h1>
        <p className='paragraph'>Full stack software developer</p>
      </div>
    </div>
  )
}


export default Home