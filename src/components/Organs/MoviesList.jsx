import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies } from "../../services/movies/moviesApi";
import CardMovies from "../Molekul/CardMovies";

const MovieList = () => {
  const popularMovies = useSelector((state) => state.movies.popular);
  const status = useSelector((state) => state.movies.status);
  const error = useSelector((state) => state.movies.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);


  return (
    <>
     {status === "loading" && <div>Loading...</div>}
      {status === "failed" && (
        <p className="text-center fw-bold text-danger fs-3">Error: {error}</p>
      )}
      {status === "succeeded" && (
        <div className="row">
          {popularMovies && popularMovies.results && popularMovies.results.length > 0 ? (
            popularMovies.results.map((movie) => (
              <CardMovies key={movie.id}
              urlImg={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              name={movie.title}
              rating={movie.vote_average}
              paramID={movie.id}
              />
            ))
          ) : (
            <p className="text-center fw-bold text-danger fs-3">
              Ups, Picture not found.
            </p>
          )}
        </div>
      )}
    </>
  
  );
};

export default MovieList;
