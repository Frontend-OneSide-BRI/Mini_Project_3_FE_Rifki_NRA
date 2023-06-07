import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTopRatedMovies } from "../../services/movies/moviesApi";
import CardOverlay from "../Molekul/CardOverlay";

function Top3Movie() {
  const dispatch = useDispatch();

  // Memanggil async thunk saat komponen dimount
  useEffect(() => {
    dispatch(fetchTopRatedMovies());
  }, [dispatch]);

  const topRatedMovies = useSelector((state) => state.movies.topRated);
  const status = useSelector((state) => state.movies.status);
  const error = useSelector((state) => state.movies.error);

  return (
    <div className="d-flex justify-content-around flex-wrap">
      {status === "loading" && <div>Loading...</div>}
      {status === "failed" && <div>Error: {error}</div>}
      {status === "succeeded" &&
        topRatedMovies.results.slice(0, 3).map((movie) => (
          <CardOverlay
            key={movie.id}
            urlImg={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            name={movie.title}
            rating ={movie.vote_average}
          />
        ))}
    </div>
  );
}

export default Top3Movie;
