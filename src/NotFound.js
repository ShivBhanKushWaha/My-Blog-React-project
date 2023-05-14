import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
        <h2>We are Sorry..</h2>
        <p>That page cannot be found</p>
        <Link to="/"><button>Back to home Page...</button></Link>
    </div>
  )
}

export default NotFound;