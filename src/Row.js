import React, { useEffect, useState } from "react";
import styles from "./Row.module.css";
import axios from "./axios";
// import requests from "./Requests";
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

  const RenderComponent = Post;
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
    return movies.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    // <div className="row">
    //   <h2>{title}</h2>
    //   <div className="row__posters">
    //     {movies?.map(
    //       (movie,i) =>
    //         ((isLargeRow && movie.poster_path) ||
    //         (!isLargeRow && movie.backdrop_path)) && (
    //           <div key={i}>
    //           <img
    //             className={`row__poster ${isLargeRow && "row__posterLarge"}`}
    //             src={`${base_url}${
    //               isLargeRow ? movie.poster_path : movie.backdrop_path
    //             }`}
    //             alt={movie.name}
    //           />
    //           {/* <h4>{movie.title}</h4>
    //           <p>{movie.genres?.movie.genres.name}</p> */}
    //         </div>
    //         )
    //     )}
    //   </div>
    // </div>
    <div className={styles.item}>
      <h1>{title}</h1>
      <div>
      <main className={styles.grid}>
      {getPaginatedData().map((d, idx) => (
            <RenderComponent key={idx} data={d} isLargeRow={isLargeRow} Upcoming={Upcoming}  Popular={Popular} Top_Rated={Top_Rated}/>
          ))}
        </main></div>
        {/* <div className="dataContainer">
          {getPaginatedData().map((d, idx) => (
            <RenderComponent key={idx} data={d} isLargeRow={isLargeRow} Upcoming={Upcoming}  Popular={Popular} Top_Rated={Top_Rated}/>
          ))}
        </div> */}

        {/* show the pagiantion
              it consists of next and previous buttons
              along with page numbers, in our case, 5 page
              numbers at a time
          */}
        <div className={styles.pagination}>
          {/* previous button */}
          <button
            onClick={goToPreviousPage}
            className={`${styles.prev} ${currentPage === 1 ? styles.disabled : ""}`}
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
            className={`${styles.next} ${currentPage === pages ? styles.disabled : ""}`}
          >
            Next
          </button>
        </div>
      
      {/* show the posts, 10 posts at a time */}
    </div>
  );
}

export default Row;
