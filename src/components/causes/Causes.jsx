import React from 'react';
import './causes.css';

const Causes = ({ title, cover }) => {
  return (
    <div className='cause'>
      <h1>{title}</h1>
      <div className='coverimage' style={{ backgroundImage: 'url('+cover+')' }}></div>
      {/* <img src={cover} alt={title} /> */}
    </div>
  )
}

export default Causes
