import React, { useState, useEffect } from 'react'
import './AllReview.css'
import { Link } from 'react-router-dom'
import data from '../../Components/data.json'

const AllReview = () => {

    const [allData, setAllData] = useState()

    const filterData = () =>{ 
        const filteredData = data.blogs
        console.log(filteredData)
        setAllData(filteredData)
    }

  useEffect (()=> {
    filterData()
  }, [])



  return (
    <div className='allReviews'>
        <div className='reviews_Container'>
        <div className='homepage_Title'>
                    <h3>All Blogs</h3>
                </div>
                <hr/>
                <div className='item'>
                    {allData ?  allData.map((blog)=>{
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
                    }): <h3>Loading...</h3>}
                </div>
        </div>
        
    </div>
  )
}

export default AllReview