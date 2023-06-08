import { Navbar } from "../components";
import Home from "../pages/Home";
import Movies from "../pages/Movies";

const routes = [
  {
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
    path: "/",
  },
  {
    element: (
      <>
        <Navbar />
        <Movies />
      </>
    ),
    path: "/movies",
  },
  {
    element: <h1>Not found</h1>,
    path: "*",
  },
];

export default routes;
