import React from 'react'
import BlogList from './BlogList';
import useData from './useData';


const Home = () => {
  const {data:blogs,isPending,error} = useData('https://my-blog-react-project.onrender.com/')

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs = {blogs} title =" All blogs!"/>}
    </div>
  )
}

export default Home;
