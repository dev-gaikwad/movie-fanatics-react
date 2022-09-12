import { createContext, useState, useEffect } from 'react';

const MoviesContext = createContext();
export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [clickedMovie, setClickedMovie] = useState({});
  const [genreList, setGenreList] = useState([]);

  const appName = 'Movie Fanatics';
  const apiKey = 'b27b18620de5a2b789d6d0b01d2c2e8a';
  var trending_url = `https://api.themoviedb.org/3/trending/all/week?sort_by=popularity.desc&api_key=${apiKey}&page=1`;
  var trendingmovie_url = `https://api.themoviedb.org/3/trending/movie/week?sort_by=popularity.desc&api_key=${apiKey}&page=1`;
  var trendingtv_url = `https://api.themoviedb.org/3/trending/tv/week?sort_by=popularity.desc&api_key=${apiKey}&page=1`;
  const search_url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query="`;

  useEffect(() => {
    getMoviesFromAPI(trending_url);
  }, []);

  async function getMoviesFromAPI(url) {
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
  }

  async function getGenreArray(url) {
    const response = await fetch(url);
    const data = await response.json();
    setGenreList(data.genres);
  }

  function searchQueryInAPI(searchTerm) {
    if (searchTerm !== '') {
      const searchQuery = search_url + searchTerm + `"'`;
      getMoviesFromAPI(searchQuery);
    } else window.location.reload();
  }

  function urlConstructer(term) {
    if (term === 'discover') {
      getMoviesFromAPI(trending_url);
    } else if (term === 'trending-movies') {
      getMoviesFromAPI(trendingmovie_url);
      console.log(trending_url);
    } else if (term === 'trending-tv') {
      getMoviesFromAPI(trendingtv_url);
    }
  }

  return (
    <MoviesContext.Provider
      value={{
        appName,
        movies,
        searchQueryInAPI,
        // detailedInfo,
        setClickedMovie,
        clickedMovie,
        getGenreArray,
        genreList,
        urlConstructer,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContext;
