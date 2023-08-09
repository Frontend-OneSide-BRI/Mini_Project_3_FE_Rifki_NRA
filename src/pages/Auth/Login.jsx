import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import userDummy from "./dummyUser";

function Login() {
  const API_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGRkZWY4YTg2MTQxOWQ2MzJkNTcxMTczNDZhNzczOCIsInN1YiI6IjY0N2VlMTMyY2Y0YjhiMDE0MTkwYWRhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6HCf2XcLcG634G22W928Dzj9PeW__gMyVlhc-Tk66z4";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false); // State untuk mengontrol tampilan pesan kesalahan
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  // const fetchRequestToken = async () => {
  //   try {
  //     const response = await axios.get(
  //       `
  //       https://api.themoviedb.org/3/authentication/token/new`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${API_KEY}`,
  //           Accept: "application/json",
  //         },
  //       }
  //     );

  //     return response.data.request_token;
  //   } catch (error) {
  //     throw new Error("Error fetching request token.");
  //   }
  // };

  //dummy Token
  const dummyToken = {
    token: false,
  };

  useEffect(() => {
    document.title = "Login Page";
    // dispatch(fetchAuthToken());
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // const authToken = await fetchRequestToken(); // Mendapatkan token yang sebenarnya

      const data = {
        username: username,
        password: password,
      };
      console.log("Data yang dikirim:", data);
      const foundUser = userDummy.find(
        (user) =>
          user.username === data.username && user.password === data.password
      );

      if (foundUser) {
        localStorage.setItem("token", (dummyToken.token = true));
        navigate("/", {
          state: {
            successMessage: "Login Berhasil",
          },
        });
      } else {
        console.log("Username atau Password Salah");
        setShowError(true); // Menampilkan pesan kesalahan saat login gagal

        setTimeout(() => {
          setShowError(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error login film:", error);
    }
  };

  const background = {
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/assets/img/carousel-slider/mortalkombat.jpg"
    })`,
    height: `100vh` /* Menyesuaikan dengan tinggi layar */,
    backgroundPosition: `center`,
  };

  return (
    <div
      style={background}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="inner-container d-flex justify-content-center">
        <div className="loginDIV">
          {showError && (
            <div class="alert alert-danger" role="alert">
              Username atau Password Salah
            </div>
          )}
          <h1 className="text-white text-center">Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

/*
 const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const authToken = await fetchRequestToken(); // Mendapatkan token yang sebenarnya

      const data = {
        username: username,
        password: password,
        token: authToken,
      }
      console.log("data yang dikirim : ", data);

      const response = await axios.post(
        `https://api.themoviedb.org/3/authentication/token/validate_with_login`,
        {
         headers: {
            Authorization: `Bearer ${API_KEY}`,
            Accept: "application/json",
          },
          data: data,
        }
        
      );
  
      // Jika berhasil login, lakukan tindakan lebih lanjut.
      console.log("Login berhasil:", response.data);
    } catch (error) {
      // Tangani kesalahan saat login
      console.error("Error login film:", error);
    }
  };
  

*/
