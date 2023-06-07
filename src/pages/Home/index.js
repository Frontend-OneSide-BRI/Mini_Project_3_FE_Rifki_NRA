import React, { useState } from "react";
import { Carousel, Banner, Top3Movie } from "../../components";

function Home() {
  return (
    <>
      <Carousel />
      <div className="container pt-5">
        <h1 className="fs-1 text-white fw-bold">Top 3 Movie</h1>
        <Top3Movie />
      </div>
    </>
  );
}

export default Home;
