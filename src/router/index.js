import { Footer, Navbar } from "../components";
import Login from "../pages/Auth/Login";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import MovieDetail from "../pages/Movies/detail";

const routes = [
  {
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
    path: "/",
  },
  {
    element: (
      <>
        <Navbar />
        <Movies />
        <Footer />
      </>
    ),
    path: "/movies",
  },
  {
    element: (
      <>
        <Navbar />
        <MovieDetail />
        <Footer />
      </>
    ),
    path: "/detail/:movieId",
  },
  {
    element: (
      <>
        <Login />
      </>
    ),
    path: "/login",
  },
  {
    element: <h1>Not found</h1>,
    path: "*",
  },
];

export default routes;
