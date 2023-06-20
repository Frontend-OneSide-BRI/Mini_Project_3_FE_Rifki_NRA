import React from "react";
import { RatingAtom } from "..";
function CardOverlay(props) {
  return (
    <section className="card-overlay">
      <div className="img-kategori">
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