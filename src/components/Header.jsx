import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import MoviesContext from '../context/MoviesContext';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const { appName, searchQueryInAPI } = useContext(MoviesContext);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmitEvent = (event) => {
    event.preventDefault();
    searchQueryInAPI(searchTerm);

    setSearchTerm('');
  };

  return (
    <header>
      <div>
        <h1>
          <Link to='/'>{appName}</Link>
        </h1>
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
