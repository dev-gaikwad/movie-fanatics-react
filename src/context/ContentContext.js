import { createContext, useState, useEffect } from 'react';

const ContentContext = createContext();
export const ContentProvider = ({ children }) => {
  const [popularList, setPopularList] = useState([]);
  const [trendingMovieList, setTrendingMovieList] = useState([]);
  const [trendingTVList, setTrendingTVList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [clickedTile, setClickedTile] = useState({});
  const [contentDetails, setContentDetails] = useState([]);
  const [similarContent, setSimilarContent] = useState([]);
  const [video, setVideo] = useState([]);

  var mediaType = 'all';
  var timeFrame = 'week';
  var page = '1';

  const appName = 'Movie Fanatics';
  const apiKey = 'b27b18620de5a2b789d6d0b01d2c2e8a';
  var trending_url = `https://api.themoviedb.org/3/trending/${mediaType}/${timeFrame}?sort_by=popularity.desc&api_key=${apiKey}&page=${page}`;
  var trendingmovie_url = `https://api.themoviedb.org/3/trending/movie/week?sort_by=popularity.desc&api_key=${apiKey}&page=1`;
  var trendingtv_url = `https://api.themoviedb.org/3/trending/tv/week?sort_by=popularity.desc&api_key=${apiKey}&page=1`;
  const search_url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query="`;

  // initial display of trending movies and tv show
  useEffect(() => {
    async function getData() {
      const popular = await fetch(trending_url);
      const popularMovies = await popular.json();
      setPopularList(popularMovies.results);
    }
    getData();
  }, []);

  useEffect(() => {
    async function getTrendingMovieList() {
      const trendingMovie = await fetch(trendingmovie_url);
      const trendingMovies = await trendingMovie.json();
      setTrendingMovieList(trendingMovies.results);
    }
    getTrendingMovieList();
  }, []);

  useEffect(() => {
    async function getTrendingTVList() {
      const trendingTV = await fetch(trendingtv_url);
      const trendingTVShows = await trendingTV.json();
      setTrendingTVList(trendingTVShows.results);
    }
    getTrendingTVList();
  }, []);

  // API call function to get contents from any url
  const getContentFromAPI = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  // Construct search query according to API requirements
  function searchQueryInAPI(searchTerm) {
    if (searchTerm !== '') {
      const searchQuery = search_url + searchTerm + `"'`;
      (async () => {
        const searchResponse = await getContentFromAPI(searchQuery);
        setSearchList(searchResponse.results);
      })();
    } else window.location.reload();
  }

  async function getDetailsFromAPI(url) {
    const response = await fetch(url);
    const data = await response.json();
    setContentDetails(data);
  }

  // Get details about the content whose tile was clicked
  function getContentDetails(clickedTile) {
    let id = clickedTile.id;
    let media = clickedTile.media_type;
    if (media === undefined) {
      media = 'movie'; //placeholder until media type is a state
    }
    const contentDetail_url = `https://api.themoviedb.org/3/${media}/${id}?api_key=${apiKey}&language=en-US`;
    (async () => {
      const contentInfoDetails = await getContentFromAPI(contentDetail_url);
      setContentDetails(contentInfoDetails);
    })();
    const similar_url = `https://api.themoviedb.org/3/${media}/${id}/similar?api_key=${apiKey}&language=en-US&page=1`;
    (async () => {
      const similarContentList = await getContentFromAPI(similar_url);
      setSimilarContent(similarContentList.results);
    })();
    const video_url = `https://api.themoviedb.org/3/${media}/${id}/videos?api_key=${apiKey}&language=en-US&page=1`;
    (async () => {
      const videoList = await getContentFromAPI(video_url);
      setVideo(videoList.results);
    })();
  }

  async function getSimilarContent(url) {
    const response = await fetch(url);
    const data = await response.json();
    setSimilarContent(data.results);
  }

  async function getVideo(url) {
    const response = await fetch(url);
    const data = await response.json();
    setVideo(data.results);
  }

  return (
    <ContentContext.Provider
      value={{
        appName,
        popularList,
        trendingMovieList,
        trendingTVList,
        searchList,
        searchQueryInAPI,
        setClickedTile,
        clickedTile,
        getContentDetails,
        contentDetails,
        getSimilarContent,
        similarContent,
        video,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export default ContentContext;
