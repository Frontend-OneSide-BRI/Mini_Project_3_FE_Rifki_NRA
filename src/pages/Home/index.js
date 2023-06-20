import React from "react";
import { Carousel, Top3Movie, ListMoviesHome } from "../../components";

function Home() {
  return (
    <>
      <Carousel />
      <div className="container pt-5">
        <h1 className="fs-1 text-white fw-bold">Top 3 Movie</h1>
        <Top3Movie />
      </div>
      <div className="container pt-5">
        <h1 className="fs-1 text-white fw-bold">Now Playing</h1>
        <ListMoviesHome />
      </div>
    </>
  );
}

export default Home;
