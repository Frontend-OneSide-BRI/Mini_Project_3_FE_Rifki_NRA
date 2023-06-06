import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./index";

function Router() {
  return (
    <Routes>
      {routes.map((item) => (
        <Route key={item.path} path={item.path} element={item.element} />
      ))}
    </Routes>
  );
}

export default Router;
