import Router from "./router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import Loading from "./components/Loading";

export default function App() {
  return (
    <React.Suspense fallback={<Loading />}>
      <div>
        <ToastContainer />
        <Router />
      </div>
    </React.Suspense>
  );
}
