import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchTopRatedMovies,
} from "../../services/movies/moviesApi";
// import moviesReducer from "./movies";

import CardOverlay from "../Molekul/CardOverlay";

function Top3Movie() {
  const dispatch = useDispatch();

  // Memanggil async thunks saat komponen dimount
  useEffect(() => {
    
    dispatch(fetchTopRatedMovies());
  }, [dispatch]);


  const topRatedMovies = useSelector((state) => state.movies.topRated);
  const status = useSelector((state) => state.movies.status);
  const error = useSelector((state) => state.movies.error);

  // Contoh penggunaan data nowPlayingMovies dan topRatedMovies
  if (status === "loading") {
    // Tampilkan indikator loading
  } else if (status === "failed") {
    // Tampilkan pesan error
  } else if (status === "succeeded") {
    // Tampilkan data nowPlayingMovies dan topRatedMovies
    // console.log(nowPlayingMovies);
    console.log(topRatedMovies);
  }

  return (
    <div className="d-flex justify-content-around flex-wrap">
   
      <CardOverlay urlImg="assets/img/artist/kategori.jpg" name="Music" />
      {/* <CardOverlay urlImg="assets/img/atlet/kategori.webp" name="Sport" />
      <CardOverlay urlImg="assets/img/anime/kategori.jpeg" name="Anime" /> */}
    </div>
  );
}

export default Top3Movie;
