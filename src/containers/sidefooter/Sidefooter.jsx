import React from 'react';
import './sidefooter.css';
import logo from '../../assets/logo.svg';
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";


const Sidefooter = () => {
  return (
    <section className='sidefooter'>
      <img src={logo} alt="logo" className='logo' />
      <div className='social-links'>
        <BsTwitter className='links' size={25} />
        <BsInstagram className='links' size={25} />
        <BsGithub className='links' size={25} />
        <BsLinkedin className='links' size={25} />
      </div>
    </section>
  )
}

export default Sidefooter