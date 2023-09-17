import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
    <ul>
        <li><Link to="/">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link>Logout</Link></li>
    </ul>
    </div>
  )
}

export default Header