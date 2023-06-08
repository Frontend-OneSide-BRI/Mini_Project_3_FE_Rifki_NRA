import React from "react";
import { MoviesList } from "../../components";

function Movies() {
  return (
    <div className="moviesPage container">
      <h1>Popular Movies</h1>
      <MoviesList />
    </div>
  );
}

export default Movies;
