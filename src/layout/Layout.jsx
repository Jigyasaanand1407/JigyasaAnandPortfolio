
import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../components/NavBar/NavBar";
import FooterComponent from "../components/FooterComponent/FooterComponent";

const Layout = () => {
  return (
    <>
      <NavBar />

      <main>
        <Outlet />
      </main>

      <FooterComponent />
    </>
  );
};

export default Layout;
