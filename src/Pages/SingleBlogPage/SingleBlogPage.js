import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../Components/data.json'

const SingleBlogPage = () => {
    const params = useParams()

    const filterData = () => {
        let filteredBlog = data.blogs.filter(ans => ans.id === params.id)
        console.log(filteredBlog)
    }

    useEffect (()=>{
        filterData()
    }) 

  return (
    <div>SingleBlogPage</div>
  )
}

export default SingleBlogPage