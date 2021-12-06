const API_KEY = "db75be3f6da59e6c54d0b9f568d19d16";

const requests = {
  // fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  // fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  // fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  // fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  // fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  // fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  // fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  // fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchUpcomingMovies:`/movie/upcoming?api_key=${API_KEY}&language=en-US`,
  fetchPopularMovies:`/movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedMovies:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchLatestMovies:`/movie/latest?api_key=${API_KEY}&language=en-US`,
  // fetchSimilarMovieDetails:`/movie/{movie_id}?api_key=${API_KEY}&language=en-US`
};

export default requests;
