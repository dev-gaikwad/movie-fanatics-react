import { createContext, useState, useEffect } from 'react';

const ContentContext = createContext();
export const ContentProvider = ({ children }) => {
  const [contentList, setContentList] = useState([]);
  const [clickedTile, setClickedTile] = useState({});
  const [contentDetails, setContentDetails] = useState([]);
  const [similarContent, setSimilarContent] = useState([]);

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
    async function getContentFromAPI() {
      const response = await fetch(trending_url);
      const data = await response.json();
      setContentList(data.results);
    }
    getContentFromAPI();
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

  // async function getSimilarContentFromAPI(url) {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log(data);
  //   setSimilarContent(data.results);
  // }

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
    const similar_url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&language=en-US&page=1`;
    getSimilarContent(similar_url);
  }

  async function getSimilarContent(url) {
    const response = await fetch(url);
    const data = await response.json();
    setSimilarContent(data.results);
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
        getSimilarContent,
        similarContent,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export default ContentContext;
