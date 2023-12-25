import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Imgslide from "./Imgslide";
import Bgblue from "./Bgblue";
import TopNav from "./TopNav";
import CenterNav from "./CenterNav";

const Routing = () => {
  return (
    <>
      <React.Fragment>
        <header>
          <TopNav />
          <CenterNav />
          <Navbar />
        </header>
        <main>
          <Routes>{/* <Route to path="/" element={<Home />} /> */}</Routes>
        </main>
        <footer>
          {/* <Imgslide />
          <Bgblue />
          <Footer /> */}
        </footer>
      </React.Fragment>
    </>
  );
};

export default Routing;
