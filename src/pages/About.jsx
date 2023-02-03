import React from 'react';
import { ListScroll, Navbar, Causes, Sidebar } from '../components';
import { CategoryPage, CausePageNorth, CausePageSouth, Footer, Sidefooter } from '../containers';
import '../app.css';

const About = () => {
  return (
    <div className='App'>
      <div className='sidefooter-bg'>
        <Sidefooter />
      </div>
      <main>
        <div className='navbar-bg'>
          <Navbar />
        </div>
        About
      </main>
    </div>
  )
}

export default About
