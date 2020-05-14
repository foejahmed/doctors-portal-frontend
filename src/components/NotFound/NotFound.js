import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div className="not-found">
           <h2> This content is not found!</h2>
           <h1>Error 404! </h1>
           <Link to="/home">
               <button className="btn btn-info">Go Home</button>
           </Link>
        </div>
    );
};

export default NotFound;