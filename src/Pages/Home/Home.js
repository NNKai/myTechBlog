import React, { useEffect, useState } from 'react'
import './Home.css'
import Hero from '../../Images/Blue And White Modern Metaverse Instagram Post.png'
import data from '../../Components/data.json'
import { Link } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar/Sidebar'

const Home = () => {

  const [featuredData, setFeaturedData] = useState()

  const filterData = () =>{ 
    const filteredData = data.blogs.filter(data => data.featured === true)
    console.log(filteredData)
    setFeaturedData(filteredData)
  }

  function handleLinkClick() {
    window.scrollTo(0, 0);
  }

  useEffect (()=> {
    filterData()
  }, [])




  return (
    <div className='home'>
        <Sidebar/>
        <div className='homepage_HeroImg'>
          <img src={Hero} alt='hero'></img>
        </div>
        <div className='homepage_Featured'>
            <div className='featured_Container'>
                <div className='homepage_Title'>
                    <h3>Top Stories</h3>
                </div>
                <hr/>
                <div className='item'>
                    {featuredData ?  featuredData.map((blog)=>{
                      return (
                        <div className='item_Container' key={blog.id}>
                          <Link to={'/' + blog.id} onClick={handleLinkClick}>
                            <div className='blog_Image'>
                              <img src={blog.image} alt='blogimage'></img>
                            </div>
                            <div className='blog_Detail'>
                              <h3>{blog.title}</h3>
                              <span><p>{blog.date}</p></span>
                              <p>{blog.summary}</p>
                              <p>Read More</p>
                            </div>
                          </Link>
                        </div>
                        
                      )
                    }): <h3>Loading...</h3>}
                </div>
                <Link to='/reviews'><h3>View All</h3></Link>
            </div>
            
        </div>

    </div>
  )
}

export default Home