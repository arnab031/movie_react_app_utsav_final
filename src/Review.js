import React from "react";
import RowReview from "./RowReview";
import dotenv from "dotenv";

function Review({ id }) {
  dotenv.config();
  const API_KEY = process.env.REACT_APP_API_KEY;
  return (
    <RowReview
      title="Reviews"
      fetchUrl={`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`}
    />
  );
}

export default Review;
