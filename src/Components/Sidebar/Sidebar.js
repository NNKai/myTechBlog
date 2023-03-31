import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {

  const Laptops = "Laptops"
  const SmartPhones = "Smart Phones"
  const Accessories = "Accessories"
  const BuildYourPC = "Build Your PC"
  const Games = "Games"
  const NewGagets = "New Gadgets"

  return (
    <div className='sidebar'>
        <ul>
            <Link to={'/category/' + Laptops} ><li>Laptops</li></Link>
            <Link to={'/category/' + SmartPhones}><li>Smart Phones</li></Link>
            <Link to={'/category/' + Accessories}><li>Accessories</li></Link>
            {/* <Link to={'/category/' + BuildYourPC}><li>Build Your PC</li></Link>
            <Link to={'/category/' + Games}><li>Games</li></Link> */}
           < Link to={'/category/' + NewGagets}><li>New Gadgets</li></Link>
        </ul>
    </div>
  )
}

export default Sidebar