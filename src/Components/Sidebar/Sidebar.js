import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <ul>
            <Link to='/'><li>Laptops</li></Link>
            <Link to='/'><li>Smart Phones</li></Link>
            <Link to='/'><li>Accessories</li></Link>
            <Link to='/'><li>Build Your PC</li></Link>
            <Link to='/'><li>Games</li></Link>
           < Link to='/'><li>New Gadgets</li></Link>
        </ul>
    </div>
  )
}

export default Sidebar