import Home from "../pages/Home";

const routes = [
  {
    element: <Home />,
    path: "/",
  },
  {
    element: <h1>Not found</h1>,
    path: "*",
  },
];

export default routes;
