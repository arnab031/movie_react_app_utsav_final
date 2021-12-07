/* This component is used for single movie card */
import React from "react";
import styles from "./Post.module.css";
import { useHistory } from "react-router-dom";

function truncate(string, n) {
  return string?.length > n ? string.substr(0, n - 1) + "..." : string;
}

function Post(props) {
  const history = useHistory();
  const { id, title, genres, overview, backdrop_path } = props.data;

  const base_url = `https://image.tmdb.org/t/p/w500${backdrop_path}`;

  return (
    <div
      className="post"
      onClick={() => {
        history.push(`/movie_details/${id}`);
      }}
    >
      <div className={styles.gridItem}>
        <article>
          <img src={base_url} alt="" />
          <div className={styles.text}>
            <h3>{title}</h3>
            <h6>{genres && genres.name}</h6>
            <br />
            <p>{truncate(overview, 150)}</p>
            <br />
            {props.Upcoming && <p>Release Date : {props.data.release_date}</p>}
            {props.Popular && <p>Popularity : {props.data.popularity}</p>}
            <br />
            {props.Top_Rated && <p>Vote Count : {props.data.vote_count}</p>}
            <br />

            {props.Top_Rated && <p>Vote Average : {props.data.vote_average}</p>}
            <br />
            <button>View More</button>
          </div>
        </article>
      </div>
    </div>
  );
}
export default Post;
