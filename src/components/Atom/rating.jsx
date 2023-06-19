import React from "react";

function rating(props) {
  return (
    <div className="rating">
      <p>⭐{props.rating}</p>
    </div>
  );
}

export default rating;
