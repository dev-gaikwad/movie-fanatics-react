import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ContentContext from '../../context/ContentContext';

function Navbar() {
  const { urlConstructer } = useContext(ContentContext);
  const tabClickHandler = (event) => {
    urlConstructer(event.target.id);
  };
  return (
    <div className='navbar'>
      <ul>
        <button className='tab-btn' id='discover' onClick={tabClickHandler}>
          Discover
        </button>
        <button
          className='tab-btn'
          id='trending-movies'
          onClick={tabClickHandler}
        >
          Trending Movies
        </button>
        <button className='tab-btn' id='trending-tv' onClick={tabClickHandler}>
          Trending Tv
        </button>
      </ul>
    </div>
  );
}

export default Navbar;
