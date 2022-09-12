import { createContext, useState, useEffect } from 'react';

const ContentContext = createContext();
export const ContentProvider = ({ children }) => {
  const [contentList, setContentList] = useState([]);
  const [clickedTile, setClickedTile] = useState({});
  const [contentDetails, setContentDetails] = useState({});

  var mediaType = 'all';
  var timeFrame = 'week';
  var page = '1';

  const appName = 'Movie Fanatics';
  const apiKey = 'b27b18620de5a2b789d6d0b01d2c2e8a';
  var trending_url = `https://api.themoviedb.org/3/trending/${mediaType}/${timeFrame}?sort_by=popularity.desc&api_key=${apiKey}&page=${page}`;
  var trendingmovie_url = `https://api.themoviedb.org/3/trending/movie/week?sort_by=popularity.desc&api_key=${apiKey}&page=1`;
  var trendingtv_url = `https://api.themoviedb.org/3/trending/tv/week?sort_by=popularity.desc&api_key=${apiKey}&page=1`;
  const search_url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query="`;

  useEffect(() => {
    getContentFromAPI(trending_url);
  }, []);

  async function getContentFromAPI(url) {
    const response = await fetch(url);
    const data = await response.json();
    setContentList(data.results);
  }

  function searchQueryInAPI(searchTerm) {
    if (searchTerm !== '') {
      const searchQuery = search_url + searchTerm + `"'`;
      getContentFromAPI(searchQuery);
    } else window.location.reload();
  }

  async function getDetailsFromAPI(url) {
    const response = await fetch(url);
    const data = await response.json();
    setContentDetails(data);
  }

  function urlConstructer(term) {
    if (term === 'discover') {
      getContentFromAPI(trending_url);
    } else if (term === 'trending-movies') {
      getContentFromAPI(trendingmovie_url);
    } else if (term === 'trending-tv') {
      getContentFromAPI(trendingtv_url);
    }
  }

  function getContentDetails(clickedTile) {
    const id = clickedTile.id;
    const media = clickedTile.media_type;
    const movieDetail_url = `https://api.themoviedb.org/3/${media}/${id}?api_key=b27b18620de5a2b789d6d0b01d2c2e8a&language=en-US`;
    getDetailsFromAPI(movieDetail_url);
  }

  return (
    <ContentContext.Provider
      value={{
        appName,
        contentList,
        searchQueryInAPI,
        setClickedTile,
        clickedTile,
        urlConstructer,
        getContentDetails,
        contentDetails,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export default ContentContext;
