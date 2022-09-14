import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ContentContext from '../context/ContentContext';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const { appName, searchQueryInAPI } = useContext(ContentContext);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmitEvent = (event) => {
    event.preventDefault();
    searchQueryInAPI(searchTerm);

    // setSearchTerm('');
  };

  return (
    <header className='header'>
      <div className='header-title'>
        <Link to='/'>
          <h1>{appName}</h1>
        </Link>
      </div>
      <div>
        <form id='form' onSubmit={handleSubmitEvent}>
          <input
            type='text'
            id='search'
            className='search'
            placeholder='Search...'
            onChange={handleSearch}
          />
        </form>
      </div>
    </header>
  );
}

export default Header;
