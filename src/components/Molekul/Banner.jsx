import React from "react";
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
          <a href="/movies" className="btn btn-darkpurple">Show Movies</a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
