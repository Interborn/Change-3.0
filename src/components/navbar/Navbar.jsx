import React from 'react';
import './navbar.css';
import { BsFillPlusSquareFill } from 'react-icons/bs';

const Navbar = () => {
  return (
    <section className='navbar'>
      <p><a href="#Home" className='static-link'>Home</a></p>
      <p><a href="#Home" className='static-link'>About</a></p>
      <p><a href="#Home" className='static-link'>Categories</a></p>
      <BsFillPlusSquareFill size={25} color="whitesmoke" className='add-new-button' />
    </section>
  )
}

export default Navbar
