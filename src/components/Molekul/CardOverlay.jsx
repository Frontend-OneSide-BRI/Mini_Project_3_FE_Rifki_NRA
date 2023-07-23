import React from "react";
import { RatingAtom } from "..";
import { Link } from "react-router-dom";
function CardOverlay(props) {
  return (
    <Link to={`detail/${props.paramID}`}>
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
    </Link>
    
  );
}

export default CardOverlay;