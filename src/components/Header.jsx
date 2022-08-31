import { useState, useContext } from 'react';
import MoviesContext from '../context/MoviesContext';

function Header({ appName }) {
  const [searchTerm, setSearchTerm] = useState('');
  const { searchQueryInAPI } = useContext(MoviesContext);

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
        <h1>{appName}</h1>
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
