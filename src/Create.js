import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title,setTitle] = useState('');
  const [body,setBody] = useState('');
  const [author,setAuthor] = useState('');
  const [isPending,setIsPending] = useState(false);
  const history = useHistory();


  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title,body,author};
    setIsPending(true);

    fetch('http://localhost:3000/blogs',{
      method: 'POST',
      headers: {"content-type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('New Blog added');
      setIsPending(false);
      // history.go(-1); // isme only back page me jayega jo open hoga iske phle 
      history.push('/');
    });
  }
  return (
    <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog title:</label>
          <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>

          <label>Blog Body:</label>
          <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>

          <label>Blog author:</label>
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="Bill Gates">Bill Gates</option>
            <option value="Allon Musk">Allon Musk</option>
            <option value="Narendra Modi">Narendra Modi</option>
            <option value="J Sankar">J Sankar</option>
            <option value="ShivBhan Kushwaha">ShivBhan Kushwaha</option>
          </select>

          { !isPending && <button>Add Blog</button>}
          { isPending && <button>Adding Blog...</button>}
        </form>
    </div>
  )
}

export default Create