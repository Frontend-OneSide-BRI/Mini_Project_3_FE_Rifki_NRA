import React, { Component } from "react";

function Carousel() {
  return (
    <div className="slider">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <div className="img">
              <img
                src='assets/img/carousel-slider/mortalkombat.jpg'
                className="d-block w-100"
                alt="..."
                width=""
              />
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <div className="img">
              <img
                src='assets/img/carousel-slider/godzillaxkong.jpg'
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <div className="img">
              <img
                src='assets/img/carousel-slider/aladin.jpg'
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
