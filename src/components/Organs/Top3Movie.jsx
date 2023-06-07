import React, { Component } from "react";
import CardOverlay from "../Molekul/CardOverlay";

function Top3Movie() {
  return (
    <div className="d-flex justify-content-around flex-wrap">
      <CardOverlay urlImg="assets/img/artist/kategori.jpg" name="Music" />
      <CardOverlay urlImg="assets/img/atlet/kategori.webp" name="Sport" />
      <CardOverlay urlImg="assets/img/anime/kategori.jpeg" name="Anime" />
    </div>
  );
}

export default Top3Movie;
