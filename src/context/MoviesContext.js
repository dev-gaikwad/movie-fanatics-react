import { createContext, useState, useEffect } from 'react';

const MoviesContext = createContext();
export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [clickedMovie, setClickedMovie] = useState({});
  const [genreList, setGenreList] = useState([]);

  const appName = 'Movie Fanatics';
  const apiKey = 'b27b18620de5a2b789d6d0b01d2c2e8a';
  const discover = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=1`;
  const search = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query="`;
  const genre = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;

  useEffect(() => {
    getMoviesFromAPI(discover);
    getGenreArray(genre);
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
      const searchQuery = search + searchTerm + `"'`;
      getMoviesFromAPI(searchQuery);
    } else window.location.reload();
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
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContext;
