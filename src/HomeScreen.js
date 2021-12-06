import React from 'react'
import "./HomeScreen.css";

import Banner from './Banner';
import requests from './Requests';
import Row from './Row';

function HomeScreen() {
    return (
        <div className="homeScreen">
            {/* Nav */}
            {/* <Nav/> */}

            {/* Banner */}
            <Banner/>

            {/* Row */}
            <div id="Upcoming Movies"><Row title='Upcoming Movies' fetchUrl={requests.fetchUpcomingMovies} isLargeRow Upcoming/></div>
            {/* <div id="Latest" style={{height: 500}}><Row  title='Latest' fetchUrl={requests.fetchLatestMovies} /></div> */}
            <div id="Popular" ><Row  title='Popular' fetchUrl={requests.fetchPopularMovies} Popular/></div>
            <div id="top-rated"><Row title='Top-Rated' fetchUrl={requests.fetchTopRatedMovies} Top_Rated/></div>
            {/* <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
            <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
            <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} /> */}
        </div>
    )
}

export default HomeScreen
