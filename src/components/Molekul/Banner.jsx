import React, { Component } from "react";
import ButtonAtom from "../Atom/button";
// import { Swiper, SwiperSlide } from 'swiper/react';

function Banner(props) {
  const data = props.data;
  return (
    <div className="container">
      <div className="banner p-4">
        <div className="heading mb-4">
          <h1>Unlimited Movies, TV shows and more</h1>
        </div>
        <div className="body mb-2">
        </div>
        <div className="footer">
          <ButtonAtom val_name="Show Movies" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
