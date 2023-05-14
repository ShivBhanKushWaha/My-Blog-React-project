import React from 'react';
import { useParams } from 'react-router-dom';
import useData from './useData'
import { useHistory } from 'react-router-dom';

const BlogDetails = () => {
    const {id}  = useParams();
    const {data:blog,error,isPending} = useData('http://localhost:3000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
      fetch('http://localhost:3000/blogs/' + blog.id,{
         method: 'DELETE'
      }).then(() => {
         history.push('/');
      })
    }

  return ( 
     <div className="blog-details">
         {isPending && <div>Loading...</div>}
         {error && <div>{error}</div>}
         {blog && (
            <article>
               <h2>{blog.title}</h2>
               <p>written by {blog.author}</p>
               <div>{blog.body}</div>
               <button onClick={handleClick}>Delete Blog</button>
            </article>
         )}
     </div>
  )
}

export default BlogDetails