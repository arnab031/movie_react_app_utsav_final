import React, { useEffect, useState } from "react";
import styles from "./RowReview.module.css";
import axios from "./axios";

import ReviewPost from "./ReviewPost";

function RowReview({ fetchUrl }) {
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
    <div className={styles.item}>
      <section id={styles.testimonials}>
        <div className={styles.testimonial_heading}>
          <h1>Comments</h1>
        </div>

        <div className={styles.testimonial_box_container}>
          {getPaginatedData().map((d, idx) => (
            <RenderComponent key={idx} data={d} />
          ))}
        </div>
      </section>

      <div className={styles.pagination}>
        {/* previous button */}
        <button
          onClick={goToPreviousPage}
          className={`${styles.prev} ${
            currentPage === 1 ? styles.disabled : ""
          }`}
        >
          prev
        </button>

        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`${styles.paginationItem} ${
              currentPage === item ? styles.active : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

        {/* next button */}
        <button
          onClick={goToNextPage}
          className={`${styles.next} ${
            currentPage === pages ? styles.disabled : ""
          }`}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default RowReview;
