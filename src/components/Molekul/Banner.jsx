import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../app/userContext";
// import { Swiper, SwiperSlide } from 'swiper/react';

function Banner(props) {
  const { foundUser } = useUserContext(); // Menggunakan context
  let profileContent = null;

  if (foundUser) {
    profileContent = (
      <div>
        {
          (foundUser.username != "love" ? (
            <h2 className="fs-1">Selamat datang {foundUser.name}</h2>
          ) : (
            <h2 className="fs-1">Selamat datang sayang ku {foundUser.name}</h2>
          ))
        }

        {/* Tampilkan info lainnya sesuai kebutuhan */}
      </div>
    );
  }

  return (
    <div className="container">
      {console.log(foundUser)}
      <div className="banner p-4">
        <div className="heading mb-4">
          {profileContent}
          <h1>Unlimited Movies, TV shows and more</h1>
        </div>
        <div className="body mb-2"></div>
        <div className="footer">
          <Link className="btn btn-darkpurple" to="/movies">
            Show Movies
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
