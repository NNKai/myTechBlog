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

  function handleLinkClick() {
    window.scrollTo(0, 0);
  }

  return (
    <div className='sidebar'>
        <ul>
            <Link to={'/category/' + Laptops} onClick={handleLinkClick}><li>Laptops</li></Link>
            <Link to={'/category/' + SmartPhones} onClick={handleLinkClick}><li>Smart Phones</li></Link>
            <Link to={'/category/' + Accessories} onClick={handleLinkClick}><li>Accessories</li></Link>
            {/* <Link to={'/category/' + BuildYourPC}><li>Build Your PC</li></Link>
            <Link to={'/category/' + Games}><li>Games</li></Link> */}
           < Link to={'/category/' + NewGagets} onClick={handleLinkClick}><li>New Gadgets</li></Link>
        </ul>
    </div>
  )
}

export default Sidebar