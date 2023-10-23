import React, { useState, useEffect } from "react";
import NavBars from "./NavBar";

import { Outlet } from "react-router-dom";

const HomePage = () => {

  return (
    <div className="border border-black">
      <NavBars />
      <Outlet/>
    </div>
  );
};

export default HomePage;
