import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../Components/data.json'
import './SingleBlogPage.css'

const SingleBlogPage = () => {
    const params = useParams()
    const [details, setDetails] = useState()

    const filterData = () => {
        let filteredBlog = data.blogs.find(ans => ans.id === params.id)
        console.log(filteredBlog)
        setDetails(filteredBlog)
    }

    useEffect (()=>{
        filterData()
        
    }, []) 

  return (
    <div className='detail_Page'>
      {details ?
      <div className='details_Container'> 
      <h3>{details.title}</h3>
      <p>Published : {details.date}</p>
      <img src={details.image} alt="hero_Image"></img>
      <img src={details.image} alt="hero_Image2"></img>
      <span><p>{details.Review}</p></span>
      </div> 
      : 
      <h3>Loading....</h3> }
        
    </div>
  )
}

export default SingleBlogPage