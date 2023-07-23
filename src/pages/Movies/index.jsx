import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { genresMovies, searchMovies } from "../../services/movies/moviesApi";
import { MoviesList, MoviesFilter } from "../../components";
import {Link} from 'react-router-dom'

function Movies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const dispatch = useDispatch();
  const filterResults = useSelector((state) => state.movies.filterResults);
  const loading = useSelector((state) => state.movies.loading);
  const error = useSelector((state) => state.movies.error);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  
  useEffect(() => {
    dispatch(searchMovies(searchQuery));
  }, [dispatch, searchQuery]);

  useEffect(()=>{
    dispatch(genresMovies(selectedCategory));
  }, [dispatch, selectedCategory])
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
                selectedCategory === 27 ? "active text-white" : "text-white"
              }`}
              onClick={() => handleCategoryClick(27)}
              to="#"
            >
              Horror
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                selectedCategory === 12
                  ? "active text-white"
                  : "text-white"
              }`}
              onClick={() => handleCategoryClick(12)}
              to="#"
            >
              Adventure
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                selectedCategory === 16
                  ? "active text-white"
                  : "text-white"
              }`}
              onClick={() => handleCategoryClick(16)}
              to="#"
            >
              Animation
            </Link>
          </li>
        </ul>
      </div>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!loading && !error && (
        <>
          {filterResults && filterResults.length > 0 ? (
            <MoviesFilter movies={filterResults} />
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
