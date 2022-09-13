import { useContext } from 'react';
import ContentContext from '../context/ContentContext';
import ContentTile from './ContentTile';

function Main() {
  const { popularList, trendingMovieList, trendingTVList, searchList } =
    useContext(ContentContext);
  // console.log(contentList);

  return (
    <>
      {searchList === true ? (
        <main className='main'>
          <h3>Search Results</h3>
          {searchList.map((content) => (
            <ContentTile key={content.id} content={content} />
          ))}
        </main>
      ) : (
        <main className='main'>
          <div className='category discover'>
            <h3>Discover</h3>
            {popularList.map((content) => (
              <ContentTile key={content.id} content={content} />
            ))}
          </div>
          <div className='category trending-movies'>
            <h3>Trending Movies</h3>
            {trendingMovieList.map((content) => (
              <ContentTile key={content.id} content={content} />
            ))}
          </div>
          <div className='category trending-movies'>
            <h3>Trending TV</h3>
            {trendingTVList.map((content) => (
              <ContentTile key={content.id} content={content} />
            ))}
          </div>
        </main>
      )}
    </>
  );
}

export default Main;
