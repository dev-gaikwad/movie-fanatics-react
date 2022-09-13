import { useContext } from 'react';
import ContentContext from '../context/ContentContext';
import Header from './Header';
import ContentTile from './ContentTile';

function SearchDisplay() {
  const { searchList } = useContext(ContentContext);
  return (
    <>
      <Header />
      <main className='main'>
        <h3>Search Results</h3>
        {searchList.map((content) => (
          <ContentTile key={content.id} content={content} />
        ))}
      </main>
    </>
  );
}

export default SearchDisplay;
