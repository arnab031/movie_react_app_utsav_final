import React, { useEffect, useState } from "react";
import "./RowReview.css";
import axios from "./axios";
// import requests from "./Requests";
import ReviewPost from "./ReviewPost"

function RowReview({
  title,
  fetchUrl
}) {
  const [reviews, setReviews] = useState([]);

  
  const [pages, setPages] = useState(0);

  
  const dataLimit = 5;
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setReviews(request.data.results);
      setPages(Math.round(request.data.results.length / dataLimit));
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const RenderComponent = ReviewPost;
  const pageLimit = pages;

  // const [pages] = useState(Math.round(movies.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return reviews.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div className="item">
      {/* <h1>{title}</h1> */}
      <section id="testimonials">
      <div className="testimonial-heading">
        {/* <span>Comments</span> */}
        <h1>Comments</h1>
      </div>
      
      <div className="testimonial-box-container">
          {getPaginatedData().map((d, idx) => (
            <RenderComponent key={idx} data={d}/>
          ))}
          </div>
        </section>
        

        {/* show the pagiantion
              it consists of next and previous buttons
              along with page numbers, in our case, 5 page
              numbers at a time
          */}
        <div className="pagination">
          {/* previous button */}
          <button
            onClick={goToPreviousPage}
            className={`prev ${currentPage === 1 ? "disabled" : ""}`}
          >
            prev
          </button>

          {/* show page numbers */}
          {getPaginationGroup().map((item, index) => (
            <button
              key={index}
              onClick={changePage}
              className={`paginationItem ${
                currentPage === item ? "active" : null
              }`}
            >
              <span>{item}</span>
            </button>
          ))}

          {/* next button */}
          <button
            onClick={goToNextPage}
            className={`next ${currentPage === pages ? "disabled" : ""}`}
          >
            next
          </button>
        </div>
      
      {/* show the posts, 10 posts at a time */}
    </div>
  );
}

export default RowReview;
