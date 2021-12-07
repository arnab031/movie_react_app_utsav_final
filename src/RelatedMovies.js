/* This component is used for finding similar movies */
import React from "react";
import Row from "./Row";
import styles from "./RelatedMovies.module.css";
import dotenv from "dotenv";

function RelatedMovies({id}) {
  dotenv.config();
  return (
    <div className={styles.relatedMovies}>
      <div id="Related Movies">
        <Row
          title="Similar Movies"
          fetchUrl={`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`}
        />
      </div>
    </div>
  );
}

export default RelatedMovies;
