import React from 'react';

function Header({ appName }) {
  return (
    <header>
      <div>
        <h1>{appName}</h1>
        <form id='form'>
          <input
            type='text'
            id='search'
            className='search'
            placeholder='Search...'
          />
        </form>
      </div>
    </header>
  );
}

export default Header;
