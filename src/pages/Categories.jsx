import React from 'react';
import { ListScroll, Navbar, Causes, Sidebar } from '../components';
import { CategoryPage, CausePageNorth, CausePageSouth, Footer, Sidefooter } from '../containers';
import '../app.css';

const Categories = () => {
  return (
    <div className='App'>
      <div className='sidefooter-bg'>
        <Sidefooter />
      </div>
      <main>
        <div className='navbar-bg'>
          <Navbar />
        </div>
        Categories
      </main>
    </div>
  )
}

export default Categories
