import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieDetail } from "../../services/movies/moviesApi";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.detail); // Menggunakan state.movies.movieDetail
  const status = useSelector((state) => state.movies.status); // Menggunakan state.movies.detailStatus
  const error = useSelector((state) => state.movies.error); // Menggunakan state.movies.detailError

  useEffect(() => {
    dispatch(fetchMovieDetail(movieId));
  }, [dispatch, movieId]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {movie && (
        <div className="detail">
          <div className="detail-img">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt=""
            />
          </div>
          <div className="detail-content container pt-5">
            <div class="row">
              <div class="col-lg-6 mb-3">
                <div class="p-5 rounded border border-success">
                  <center>
                    <img
                      src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                      alt=""
                      class="imgmobile"
                    />
                  </center>

                  <i>
                    <h1 class="display-4 text-center fw-bold">{movie.title}</h1>
                  </i>
                  <div v-if="movie.summary !== null">
                    <p class="lead">{movie.overview}</p>
                  </div>
                  <hr class="my-4" />
                  <ul class="list-group fs-5 mb-3">
                    <li className="list-group-item">
                      Genres:{" "}
                      {movie.genres.map((genre) => genre.name).join(", ")}
                    </li>

                    <li class="list-group-item">
                      Language : {movie.original_language}
                    </li>
                    <li class="list-group-item">
                      Realise date : {movie.release_date}
                    </li>
                    <li class="list-group-item">
                      Rating : {movie.vote_average}
                    </li>
                  </ul>
                  <p class="lead">
                    <a href="/" class="btn btn-darkpurple btn-md">
                      Back To List Movie
                    </a>
                  </p>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="thumb border border-success imgdesktop fade-in-down">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetail;
