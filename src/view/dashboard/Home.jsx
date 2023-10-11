import React from "react";
import Sidebar from "./Sidebar";
import Status from "../status/Status";
import RecentFollow from "./Recent-Follow.jsx";

function Home() {
  return (
    <div className="lg:p-4 grid grid-cols-1 lg:grid-cols-12 gap-4">
      <div className="hidden lg:col-span-3 lg:block">
        <Sidebar />
      </div>
      <div className="lg:col-span-6 space-y-2">
        <Status />
      </div>
      <div className="hidden lg:col-span-3 lg:block">
        <RecentFollow />
      </div>
    </div>
  );
}

export default Home;
