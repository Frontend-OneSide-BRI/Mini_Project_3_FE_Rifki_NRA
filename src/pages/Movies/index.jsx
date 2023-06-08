import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies } from "../../services/movies/moviesApi";
import { MoviesList, MoviesSearch } from "../../components";

function Movies() {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.movies.searchResults);
  const loading = useSelector((state) => state.movies.loading);
  const error = useSelector((state) => state.movies.error);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    dispatch(searchMovies(searchQuery));
  }, [dispatch, searchQuery]);

  return (
    <div className="moviesPage container">
      {console.log(searchResults)}
      <h1 className="text-white">Popular Movies</h1>

      <div className="row mb-4">
        <div className="col-lg-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!loading && !error && (
        <>
          {searchResults && searchResults.length > 0 ? (
            <MoviesSearch movies={searchResults} />
          ) : (
            <>
              <MoviesList />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Movies;
