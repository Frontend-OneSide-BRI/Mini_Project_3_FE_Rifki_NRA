import React, { Component } from "react";

function CardOverlay(props) {
  return (
    <section id="artist">
      <div className="img-kategori mb-3">
        <img
          src={props.urlImg}
          className=""
          alt="..."
          width=""
        />
        <div className="overlay">
          <p>{props.name}</p>
        </div>
      </div>
    </section>
  );
}

export default CardOverlay;
