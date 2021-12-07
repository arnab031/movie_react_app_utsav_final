import dotenv from "dotenv";

dotenv.config();
const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  fetchUpcomingMovies: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
  fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchLatestMovies: `/movie/latest?api_key=${API_KEY}&language=en-US`,
};

export default requests;
