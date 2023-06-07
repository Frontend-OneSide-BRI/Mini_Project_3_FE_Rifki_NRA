import React, { Component } from "react";

function rating(props) {
  return (
    <div className="rating">
        {console.log(props.rating)}
      <p>⭐{props.rating}</p>
    </div>
  );
}

export default rating;
