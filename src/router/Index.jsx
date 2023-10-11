import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../view/dashboard/Home";
import Login from "../view/auth/Login";
import Register from "../view/auth/Register";
import Navbar from "../components/Navbar";
import NotFound from "../error/404";
import Authenticated from "../middleware/Authenticated";
import Guest from "../middleware/Guest";

function Router() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Authenticated>
              <Home />
            </Authenticated>
          }
        />
        <Route
          path="/login"
          element={
            <Guest>
              <Login />
            </Guest>
          }
        />
        <Route
          path="/register"
          element={
            <Guest>
              <Register />
            </Guest>
          }
        />
        <Route
          exact
          path="/users/profile"
          element={
            <Authenticated>
              <Home />
            </Authenticated>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Router;
