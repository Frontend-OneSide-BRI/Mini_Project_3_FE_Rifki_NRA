import React, { Component } from "react";
import { RatingAtom } from "..";
function CardOverlay(props) {
  return (
    <section>
      <div className="img-kategori mb-3">
        <RatingAtom rating  = {props.rating} />
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