import React from 'react';
import './categorypage.css';
import { CauseList } from '../../components';

const CategoryPage = () => {
  return (
    <div className='categorypage'>
      <div className='content'>
        <h1>Content</h1>
      </div>
      <div className='content'>
        <CauseList />
      </div>
    </div>

  )
}

export default CategoryPage
