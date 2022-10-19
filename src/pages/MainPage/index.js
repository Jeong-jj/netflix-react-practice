import React from "react";
import Banner from "../../components/Banner";
import Row from "../../components/Row";
import TopRatedRow from "../../components/TopRatedRow"
import OriginalsRow from "../../components/OriginalsRow"
import requests from "../../api/requests";

// App.js에서 Router DOM 설치 후 이동 된 내용
export default function MainPage() {
  return (
    <div>
      <Banner />
      <OriginalsRow
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
      <TopRatedRow title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
      <Row
        title="Action Movies"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        id="Cm"
        fetchUrl={requests.fetchComedyMovies}
      />
    </div>
  );
}
