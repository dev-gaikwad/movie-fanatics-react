import { useContext } from 'react';
import ContentContext from '../context/ContentContext';
import Header from './Header';
import ContentTile from './ContentTile';

function SearchDisplay() {
  const { searchList } = useContext(ContentContext);
  if (searchList.length === 0) {
    return null;
  } else {
    return (
      <>
        <main className='category search-results'>
          <h3>Search Results</h3>
          {searchList.map((content) => (
            <ContentTile key={content.id} content={content} />
          ))}
        </main>
      </>
    );
  }
}

export default SearchDisplay;
