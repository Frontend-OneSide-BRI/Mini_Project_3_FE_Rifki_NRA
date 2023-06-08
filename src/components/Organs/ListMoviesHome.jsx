import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNowPlayingMovies } from "../../services/movies/moviesApi";
import CardMovies from "../Molekul/CardMovies";

function ListMoviesHome() {
  const dispatch = useDispatch();

  // Memanggil async thunk saat komponen dimount
  useEffect(() => {
    dispatch(fetchNowPlayingMovies());
  }, [dispatch]);

  const nowPlayingMovies = useSelector((state) => state.movies.nowPlaying);
  const status = useSelector((state) => state.movies.status);
  const error = useSelector((state) => state.movies.error);

  return (
    <>
      {status === "loading" && <div>Loading...</div>}
      {status === "failed" && (
        <p className="text-center fw-bold text-danger fs-3">Error: {error}</p>
      )}
      {status === "succeeded" && (
        <div className="row">
          {nowPlayingMovies && nowPlayingMovies.results && nowPlayingMovies.results.length > 0 ? (
            nowPlayingMovies.results.map((movie) => (
              <CardMovies key={movie.id}
              urlImg={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              name={movie.title}
              rating={movie.vote_average}
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
  
  
}

export default ListMoviesHome;
