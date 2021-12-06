import React from "react";
import "./Post.css";
import { useHistory } from "react-router-dom";

function truncate(string, n) {
  return string?.length > n ? string.substr(0, n - 1) + "..." : string;
}

function Post(props) {
  const history = useHistory();
  const { id, title, genres, overview, backdrop_path } = props.data;

  const base_url = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
  // console.log(props.data.release_date);

  return (
    <div
      className="post"
      onClick={() => {
        history.push(`/movie_details/${id}`);
      }}
    >
      {/* <small>{id}</small> */}
      {/* <div>
        <h1>{title}</h1>
      </div>
      <div>{genres && <p>{genres.name}</p>}</div>
      <div>{truncate(overview, 150)}</div>
      <div>
        {props.Upcoming && <p>{props.data.release_date}</p>}
        {props.Popular && <p>{props.data.popularity}</p>}
      </div>

      <div>
        {props.Top_Rated && <p>{props.data.vote_count}</p>}
        {"  "}
        {props.Top_Rated && <p>{props.data.vote_average}</p>}
      </div>

      <img src={base_url} alt="movie_poster" /> */}


      <div className="gridItem">
        <article>
          <img src={base_url} alt="" />
          <div className="text">
            <h3>{title}</h3>
            <h6>{genres && genres.name}</h6><br/>
            <p>
            {truncate(overview, 150)}
            </p><br/>
            {props.Upcoming && <p>Release Date : {props.data.release_date}</p>}
        {props.Popular && <p>Popularity : {props.data.popularity}</p>}<br/>
        {props.Top_Rated && <p>Vote Count : {props.data.vote_count}</p> }<br/>
        
        {props.Top_Rated && <p>Vote Average : {props.data.vote_average}</p>}<br/>
            <button>View More</button>
          </div>
        </article>
        </div>
    </div>
  );
}
export default Post;
