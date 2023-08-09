import React from "react";
import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from 'swiper/react';

function Banner(props) {
  
  return (
    <div className="container">
      <div className="banner p-4">
        <div className="heading mb-4">
          <h1>Unlimited Movies, TV shows and more</h1>
        </div>
        <div className="body mb-2">
        </div>
        <div className="footer">
          <Link className="btn btn-darkpurple" to="/movies">
          Show Movies
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
