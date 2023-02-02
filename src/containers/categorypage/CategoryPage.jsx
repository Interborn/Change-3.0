import React from 'react';
import './categorypage.css';
import { CauseList } from '../../components';

const CategoryPage = () => {
  return (
    <div className='categorypage'>
      <div className='content'>
        <div className='textbox'>
          <h1>Save the World with Crypto</h1>
          <p>Lorem ipsen lorem ipsen lorem ipsen lorem ipsen lorem ipsen lorem ipsen lorem ipsen lorem ipsen lorem ipsen lorem ipsen lorem ipsen lorem ipsen lorem ipsen lorem ipsen lorem ipsen lorem ipsen</p>
        </div>
        <button>Watch Video</button>
      </div>
      <div className='causelist-component'>
        <CauseList />
      </div>
    </div>

  )
}

export default CategoryPage
