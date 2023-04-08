import React, { useState, useEffect } from 'react'
import './CategoryPage.css'
import { Link, useParams } from 'react-router-dom'
import data from '../../Components/data.json'
import axios from 'axios'


const CategoryPage = () => {
    const params = useParams()
    const [allData, setAllData] = useState()

    const filterData = () =>{ 
        
        axios.get('http://localhost:8080/').then((data)=>{
          console.log(data.data.blogs)
          const filteredData = data.data.blogs.filter(data => data.category === params.id)
          setAllData(filteredData)
        })
    }

    function handleLinkClick() {
      window.scrollTo(0, 0);
    }

  useEffect (()=> {
    filterData()
  }, [])



  return (
    <div className='category_Container'>
        <div className='reviews_Container'>
        <div className='homepage_Title'>
                    <h3>{params.id}</h3>
                </div>
                <hr/>
                <div className='item'>
                    {allData ?  allData.map((blog)=>{
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
        </div>
        
    </div>
  )
}

export default CategoryPage