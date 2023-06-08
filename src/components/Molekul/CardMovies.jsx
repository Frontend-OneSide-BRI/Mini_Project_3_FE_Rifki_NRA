import React from "react";
import { RatingAtom } from "..";
function CardMovies(props) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
      <a href="">
        <div className="card mb-1 fade-in">
          <div className="img-listCard">
            <img src={props.urlImg} className="card-img-top" alt="..." />
            <div className="overlayGallery">
              <p>{props.name}</p>
            </div>
            <RatingAtom rating={props.rating} />
          </div>
        </div>
      </a>
    </div>
  );
}

export default CardMovies;
