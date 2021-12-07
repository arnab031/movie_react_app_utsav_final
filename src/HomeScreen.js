import React from "react";

import Banner from "./Banner";
import requests from "./Requests";
import Row from "./Row";

function HomeScreen() {
  return (
    <div>
      {/* Banner */}
      <Banner />

      {/*Row*/}
      <div id="Upcoming Movies">
        <Row
          title="Upcoming Movies"
          fetchUrl={requests.fetchUpcomingMovies}
          isLargeRow
          Upcoming
        />
      </div>

      <div id="Popular">
        <Row title="Popular" fetchUrl={requests.fetchPopularMovies} Popular />
      </div>
      <div id="top-rated">
        <Row
          title="Top-Rated"
          fetchUrl={requests.fetchTopRatedMovies}
          Top_Rated
        />
      </div>
    </div>
  );
}

export default HomeScreen;
