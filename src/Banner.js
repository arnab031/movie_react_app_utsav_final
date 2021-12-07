import React, { useEffect, useState } from "react";
import styles from "./Banner.module.css";
// import banner_pic from './img/banner.jpeg'
import axios from "./axios";
import requests from "./Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTopRatedMovies);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  // console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <header
      className={styles.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className={styles.banner__contents}>
        <h1 className={styles.banner__title}>{movie?.title||movie?.name||movie?.original_name}</h1>
        <div className={styles.banner__buttons}>
          <button className={styles.banner__button}>Top Rated</button>
          {/* <button className="banner__button">My List</button> */}
        </div>
        <h1 className={styles.banner__description}>
          {truncate(
            movie?.overview,
            150
          )}
        </h1>
      </div>

      {/* <div className="banner--fadeBottom"></div> */}
    </header>
  );
}

export default Banner;
