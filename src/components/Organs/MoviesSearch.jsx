import React, { useEffect } from "react";
import CardMovies from "../Molekul/CardMovies";

const MoviesSearch= ({movies}) => {


  return (
    <>
        <div className="row">
          {movies &&  movies.length > 0 ? (
            movies.map((movie) => (
              <CardMovies key={movie.id}
              urlImg={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              name={movie.title}
              rating={movie.vote_average}
              paramID={movie.id}
              />
            ))
          ) : (
            <p className="text-center fw-bold text-danger fs-3">
              Ups, Movies not found.
            </p>
          )}
        </div>
    </>
  
  );
};

export default MoviesSearch;
