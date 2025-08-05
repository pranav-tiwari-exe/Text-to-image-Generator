import React from 'react'
import {assets} from '../assets/assets'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <Link to='/'>
        <img src={assets.logo} alt="Logo Here"  className='w-28 sm:w-32 lg:w-40'/>
        </Link>
        <div>
            
        </div>
    </div>
  )
}

export default NavBar