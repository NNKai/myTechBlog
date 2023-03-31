import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../Components/data.json'
import './SingleBlogPage.css'

const SingleBlogPage = () => {
    const params = useParams()
    const [details, setDetails] = useState()
    const [comparison, setComparison] = useState()

    const filterData = () => {
        let filteredBlog = data.blogs.find(ans => ans.id === params.id)
        console.log(filteredBlog.Comparison)
        setDetails(filteredBlog)
        setComparison(filteredBlog.Comparison)
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
        <img src={details.image2} alt="hero_Image2" className='second_Image'></img>
        <span><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{details.Review.intro}</p></span>
        <span><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{details.Review.p1}</p></span>
        <span><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{details.Review.p2}</p></span>
        <span><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{details.Review.conclusion}</p></span>
        <span><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{details.Review.comparePara}</p></span>
        <div className='details_Comparison'>
          <div className='dimensionsAndWeight'>
            <h3>Dimensions and Weight</h3>
            {comparison.map((data)=>{
              return(
              <div className='dimensionsAndWeight_Container'>
              <img src={data.image} alt='alt'></img>
              <h4>{data.name}</h4>
              <p>Dimensions: {data.dimensions}</p>
              <p>Weight: {data.weight}</p>
              </div>
              )
            })}
          </div>
          <div className='display'>
            <h3>Display</h3>
            {comparison.map((data)=>{
              return(
              <div className='display_Container'>
      
              <h4>{data.name}</h4>
              <p>{data.displayType}</p>
              <p>{data.displaySize}</p>
              <p>{data.ppi}</p>
              <p>{data.hdr}</p>
              <p>{data.refreshrate}</p>
              </div>
              )
            })}
          </div>
          <div className='storage'>
            <h3>Storage</h3>
            {comparison.map((data)=>{
              return(
              <div className='storage_Container'>
                <h4>{data.name}</h4>
                <p>{data.internalMemory}</p>
              
              </div>
              )
            })}
          </div>
          <div className='price'>
            <h3>Price</h3>
            {comparison.map((data)=>{
              return(
              <div className='price_Container'>
                <img src={data.imagePrice} alt='alt'></img>
                <h4>{data.name}</h4>
                <p>{data.price}</p>
              
              </div>
              )
            })}
          </div>
        </div>
      </div>  
      : 
      <h3>Loading....</h3> }
        
    </div>
  )
}

export default SingleBlogPage