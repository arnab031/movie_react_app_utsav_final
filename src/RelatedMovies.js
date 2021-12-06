import React from "react";
import Row from "./Row";
import "./RelatedMovies.css";

function RelatedMovies({id}) {
    const API_KEY = "db75be3f6da59e6c54d0b9f568d19d16";
  return (
    <div className="relatedMovies">
      <div id="Related Movies">
        <Row
          title="Similar Movies"
          fetchUrl={`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US`}
        />
      </div>
    </div>
  );
}

export default RelatedMovies;
