import React from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes, } from 'react-icons/fa'
import {BsFillCartFill} from 'react-icons/bs'
import { useRef } from 'react'
import './MobileNavigation.css'
import Logo from '../../Images/logo1.png'
import Logo2 from '../../Images/Untitled.png'
// import { useSelector } from 'react-redux'
// import { selectItems } from '../slices/basketSlice'

const MobileNavigation = () => {
    const navRef = useRef()
    // const items = useSelector(selectItems)

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

  

  return (
      <header>
        
        <button className='nav-btn' onClick={showNavbar}>
            <FaBars />
        </button>
        <nav ref={navRef}>
        <Link to="/" onClick={showNavbar}><img src={Logo2} alt=''></img></Link>
        <span><Link to="/category/Laptops" onClick={showNavbar}>Laptops</Link>
            <Link to="/category/Smart Phones" onClick={showNavbar}>Smart Phones</Link>
            <Link to="/category/Accessories" onClick={showNavbar}>Accessories</Link>
            {/* <Link to="/category/Build Your PC"  onClick={showNavbar}>Build Your PC</Link>
            <Link to="/category/Games" onClick={showNavbar}>Games</Link> */}
            <Link to="/category/New Gadgets"  onClick={showNavbar}>New Gadgets</Link></span> 
            <Link to="/reviews" onClick={showNavbar} >All Reviews</Link>
            <Link to="/aboutus" onClick={showNavbar}>About us</Link>
           
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes />
            </button>
        </nav>
       <span> <Link to=""><img className="logo" src={Logo2} alt='Logo'></img></Link></span>
        {/* <div className='cart'><Link to='/cart'><BsFillCartFill/></Link>{items.length}</div> */}
      </header>
  )
}

export default MobileNavigation
