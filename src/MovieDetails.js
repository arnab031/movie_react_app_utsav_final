import React, { useEffect, useState } from "react";
import "./MovieDetails.css";
import { useParams } from "react-router-dom";
import RelatedMovies from "./RelatedMovies";
import Review from "./Review";

function MovieDetails() {
  const { id } = useParams();
  const API_KEY = "db75be3f6da59e6c54d0b9f568d19d16";
  const [movieDetails, setMovieDetails] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovieDetails(data);
        
      });
  }, [id]);

  const [unique_countries] = useState([]);
  movieDetails.production_companies &&
    movieDetails.production_companies.map((country, i) =>
      unique_countries.push(country.origin_country)
    );
  const unique = [...new Set(unique_countries)];
  

  return (
    <div className="movie_details">
      <header
        className="banner_movieDetails"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movieDetails?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner__movieContents">
          <h1 className="banner__title">
            {movieDetails?.title ||
              movieDetails?.name ||
              movieDetails?.original_name}
          </h1>
          <div className="details">
          <div className="sub__items">
            {movieDetails.spoken_languages &&
              movieDetails.spoken_languages.map((language, i) => (
                <h3 key={i}>{language.english_name}</h3>
              ))}
              
          </div>
          <div className="sub__items">
            <p>Popularity : {movieDetails && movieDetails.popularity}</p>
          </div>
          <div className="sub__items">
            {movieDetails.genres &&
              movieDetails.genres.map((genre, i) => (
                <h3 key={i}>{genre.name}</h3>
              ))}
          </div>
          <div className="sub__items">
            <p> Release Date : {movieDetails && movieDetails.release_date}</p>
          </div>
          <div className="sub__items">
            <p> Origin Countries : {" "}</p>
            {unique &&
              unique.map((country, i) => (
                <h3 key={i}>{country}</h3>
              ))}
          </div>
          </div>
          
          <div className="sub__details">
            <p>Vote Count : {movieDetails && movieDetails.vote_count}</p>
            <p>Vote Average : {movieDetails && movieDetails.vote_average}</p>
            <p>Budget : {movieDetails && movieDetails.budget}</p>
            <p>Revenue : {movieDetails && movieDetails.revenue}</p>
          </div>
          <div className="banner__buttons">
            {movieDetails.homepage && (
              <button
                className="banner__button"
                onClick={() => {
                  window.location.href = `${movieDetails.homepage}`;
                }}
              >
                Homepage
              </button>
            )}
            {/* <button className="banner__button">My List</button> */}
          </div>
          <h1 className="banner__movieDescription">{movieDetails?.overview}</h1>
        </div>

        
      </header>
      <RelatedMovies id={id}/>
      <Review id={id}/>
    </div>
  );
}

export default MovieDetails;
