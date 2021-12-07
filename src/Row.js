/* This component is used for rendering movie section */
import React, { useEffect, useState } from "react";
import styles from "./Row.module.css";
import axios from "./axios";

import Post from "./Post";

function Row({
  title,
  fetchUrl,
  isLargeRow = false,
  Upcoming = false,
  Popular = false,
  Top_Rated = false,
}) {
  const [movies, setMovies] = useState([]);

  const [pages, setPages] = useState(0);

  const dataLimit = 5;
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      setPages(Math.round(request.data.results.length / dataLimit));
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // const RenderComponent = Post;
  const pageLimit = pages;

  /* Start Pagination function */
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
    return movies.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  /* End Pagination function */

  return (
    <div className={styles.item}>
      <h1>{title}</h1>
      <div>
        <main className={styles.grid}>
          {getPaginatedData().map((d, idx) => (
            <Post
              key={idx}
              data={d}
              isLargeRow={isLargeRow}
              Upcoming={Upcoming}
              Popular={Popular}
              Top_Rated={Top_Rated}
            />
          ))}
        </main>
      </div>

      <div className={styles.pagination}>
        {/* previous button */}
        <button
          onClick={goToPreviousPage}
          className={`${styles.prev} ${
            currentPage === 1 ? styles.disabled : ""
          }`}
        >
          Prev
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
          Next
        </button>
      </div>
    </div>
  );
}

export default Row;
