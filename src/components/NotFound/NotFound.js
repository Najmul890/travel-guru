import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container" >
           <h2 className="text-danger" >Error: 404</h2>
           <p>Page not found</p>
           <Link to="/" >
             <p>Back to Home</p>
           </Link> 
        </div>
    );
};

export default NotFound;