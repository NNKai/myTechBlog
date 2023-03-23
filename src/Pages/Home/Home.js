import React from 'react'
import './Home.css'
import Hero from '../../Images/Blue And White Modern Metaverse Instagram Post.png'
import data from '../../Components/data.json'
import { Link } from 'react-router-dom'

const Home = () => {

  console.log(data.blogs)
  return (
    <div className='home'>
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
                    {data.blogs.map((blog)=>{
                      return (
                        <div className='item_Container' key={blog.id}>
                          <Link to={'/' + blog.id} >
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
                    })}
                </div>
                <Link to='/'><h3>View All</h3></Link>
            </div>
            
        </div>

    </div>
  )
}

export default Home