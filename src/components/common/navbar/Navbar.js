import React from 'react'
import Redes from '../redes/Redes'
import Menu from '../menu/Menu'

function Navbar (props) {
    return (
        <div className='navbar'>
            <Menu navColor={props.menuColor}/>
            <Redes color={props.redesColor}/>
        </div>
    )
}

export default Navbar