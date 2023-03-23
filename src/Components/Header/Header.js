import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <ul>
            <li><Link to='/'>Logo</Link></li>
            <li><Link to='*'>Reviews</Link></li>
        </ul>    
    </div>
  )
}

export default Header