import React from 'react'
import "./Review.css"
import RowReview from './RowReview';

function Review({id}) {
    const API_KEY = "db75be3f6da59e6c54d0b9f568d19d16";
  return (
    
        <RowReview
          title="Reviews"
          fetchUrl={`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`}
        />
      
  );
}

export default Review
