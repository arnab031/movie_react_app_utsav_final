/* This component is used for finding searched movies */
import React from "react";
import { useParams } from "react-router-dom";
import Row from "./Row";
import dotenv from "dotenv";

function SearchItem() {
  dotenv.config();
  const { keyword } = useParams();
  const API_KEY = process.env.REACT_APP_API_KEY;

  return <div>
      <Row
          title="Similar Movies"
          fetchUrl={`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${keyword}`}
        />
  </div>;
}

export default SearchItem;
