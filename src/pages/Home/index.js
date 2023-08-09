import React, { useEffect, useState } from "react";
import { Carousel, Top3Movie, ListMoviesHome } from "../../components";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  const [showSuccess, setShowSuccess] = useState(false);
  const successMessage = location.state ? location.state.successMessage : null;
  const userData = location.state ? location.state.userData : null;

  // const love = [
  //   "reska",
  //   "ajeng reska",
  //   "ajeng reska pebrianti",
  //   "reska pebrianti",
  // ];

  // const text = love.includes(data.name) ? `Hallo Sayang ku ${data.name}` : "";

  useEffect(() => {
    document.title = "ICON | Home";
    if (location.state && location.state.successMessage) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false); // Menyembunyikan pesan sukses setelah 3 detik
      }, 3000);
    }
  }, [location.state]);

  return (
    <>
      <div>
        <Carousel dataUser={userData} />
        {showSuccess && (
          <div
            className="alert alert-success alertNav text-center"
            role="alert"
          >
            {successMessage}
          </div>
        )}

        <div className="container pt-5">
          <h1 className="fs-1 text-white fw-bold">Top 3 Movie</h1>
          <Top3Movie />
        </div>
        <div className="container pt-5">
          <h1 className="fs-1 text-white fw-bold">Now Playing</h1>
          <ListMoviesHome />
        </div>
      </div>
    </>
  );
}

export default Home;
