import { createContext, useState, useEffect } from 'react';

const MoviesContext = createContext();
export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const apiKey = 'b27b18620de5a2b789d6d0b01d2c2e8a';
  const discover_url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=1`;
  const search_url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query="`;

  useEffect(() => {
    getMoviesFromAPI(discover_url);
  }, []);

  async function getMoviesFromAPI(url) {
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
  }

  return (
    <MoviesContext.Provider
      value={{
        movies,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContext;
