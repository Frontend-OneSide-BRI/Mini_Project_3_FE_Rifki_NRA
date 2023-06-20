import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies } from "../../services/movies/moviesApi";
import { MoviesList, MoviesSearch } from "../../components";
import {Link} from 'react-router-dom'

function Movies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.movies.searchResults);
  const loading = useSelector((state) => state.movies.loading);
  const error = useSelector((state) => state.movies.error);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    dispatch(searchMovies("", category));
  };
  
  useEffect(() => {
    dispatch(searchMovies(searchQuery, selectedCategory));
  }, [dispatch, searchQuery, selectedCategory]);

  return (
    <div className="moviesPage container">
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

      <div className="navigation-kategori mb-5">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link
              className={`nav-link ${
                selectedCategory === "all" ? "active text-white" : "text-white"
              }`}
              onClick={() => handleCategoryClick("all")}
              to="#"
            >
              All Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                selectedCategory === "Horror" ? "active text-white" : "text-white"
              }`}
              onClick={() => handleCategoryClick("Horror")}
              to="#"
            >
              Horror
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                selectedCategory === "Adventure"
                  ? "active text-white"
                  : "text-white"
              }`}
              onClick={() => handleCategoryClick("Adventure")}
              to="#"
            >
              Adventure
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                selectedCategory === "Fantasy"
                  ? "active text-white"
                  : "text-white"
              }`}
              onClick={() => handleCategoryClick("Fantasy")}
              to="#"
            >
              Fantasy
            </Link>
          </li>
        </ul>
      </div>
      {console.log(selectedCategory)}
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
