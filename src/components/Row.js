import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import MovieModal from "./MovieModal";
import "./Row.css";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Row({ isLargeRow, title, id, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});

  useEffect(() => {
    const fetchMovieData = async () => {
      const request = await axios.get(fetchUrl);
      // console.log("request", request);  // 확인용
      setMovies(request.data.results);
    };

    fetchMovieData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);  // 클릭한 영화 정보를 state에 담아줌
  };

  return (
    <section className="row">
      <h2>{title}</h2>
      <Swiper 
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        loop={true} // loop 기능을 사용할 것인지
        breakpoints={{
          1378: {
            slidesPerView: 6, // 한번에 보이는 슬라이드 개수
            slidesPerGroup: 4, // 몇개씩 슬라이드 할지
          },
          998: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          625: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          0: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        navigation  // arrow 버튼 사용 유무 
        // pagination={{ clickable: true }} // 페이지 버튼
      >
        <div id={id} className="row__posters">
          {movies.map((movie) => (
            <SwiperSlide 
              key={movie.id}
            >
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`https://image.tmdb.org/t/p/original/${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                } `}
                alt={movie.name}
                onClick={() => handleClick(movie)}
              />
              <h3 className="poster__title">{movie.title}</h3>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} /> /* 선택된 movieSelected의 정보 등 props전달 */
      )}
    </section>
  );
};