import React from 'react';
import './categorypage.css';
import { CauseList } from '../../components';
import { BsYoutube } from "react-icons/bs";

const CategoryPage = () => {
  return (
    <div className='categorypage'>
      <div className='content'>
        <div className='textbox'>
          <h1>Save the World with Crypto</h1>
          <p>Water. Earth. Fire. Air. Long ago, the four nations lived together in harmony. Then, everything changed when the Fire Nation attacked. Only the Avatar, master of all four elements, could stop them, but when the world needed him most, he vanished. A hundred years passed and my brother and I discovered the new Avatar, an airbender named Aang. And although his airbending skills are great, he has a lot to learn before he's ready to save anyone. But I believe Aang can save the world.</p>
        </div>
        <button>Watch Video <BsYoutube size={30} style={{ marginTop: '0px', marginLeft: '10px', color: 'whitesmoke' }}/></button>
      </div>
      <div className='causelist-component'>
        <CauseList />
      </div>
    </div>

  )
}

export default CategoryPage
