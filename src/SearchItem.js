import React from "react";
import "./SearchItem.css";
import { useParams } from "react-router-dom";
import Row from "./Row";

function SearchItem() {
  const { keyword } = useParams();
  const API_KEY = "db75be3f6da59e6c54d0b9f568d19d16";

  return <div>
      <Row
          title="Similar Movies"
          fetchUrl={`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${keyword}`}
        />
  </div>;
}

export default SearchItem;
