import { Navbar } from "../components";
import Home from "../pages/Home";

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
    element: <h1>Not found</h1>,
    path: "*",
  },
];

export default routes;
