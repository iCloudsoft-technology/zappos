import React from "react";
import "./Home.css";
// import "./Home.js";
// import Navbar from "./Navbar";
const Home = () => {
  return (
    <>
      <div className="container-fluid mb-4">
        <div className="cont ">
          <marquee class="mrq">
            CYBER SURPRISES! CYBER SURPRISES! CYBER SURPRISES! CYBER SURPRISES!
            CYBER SURPRISES! CYBER SURPRISES! CYBER SURPRISES! CYBER SURPRISES!
            CYBER SURPRISES! CYBER SURPRISES!
          </marquee>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container text-center">
          <div class="row">
            <div class="col ">
              <h1 className="cws">Cyber Week Sale</h1>
            </div>
            <div class="col-6">
              <h6>
                {" "}
                We couldn't resist adding more new deals__save up to 60% now!
              </h6>
            </div>
            <div class="col">
              <h5>Shop our Cyber Sale</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container">
          <img
            className="img-fluid"
            src="https://m.media-amazon.com/images/G/01/Zappos/2023/Homepage/11.28/TNF-VANS-NOVEMBER-HERO-TABLET-2048x996.gif"
            alt="hh"
          ></img>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container__content">
          <div className="center">
            <h3> Steve Madden:Get Festive </h3>
            <p>
              {" "}
              Enjoy the best of moments in stunning silhouettes--smiles
              included.
            </p>
            <a href="/"> Shop Steve Madden Footwear</a>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="mx-5 mb-5">
          <h3>Shop Sale Categories</h3>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row mx-5">
          <div className="col-lg-3  col-md-1">
            <img
              src="https://m.media-amazon.com/images/I/81Yp46MD8LL._AC_SR920,736_.jpg"
              height={280}
              width={239}
              alt=""
            ></img>
            <br />
            <a href="/" className="center">
              Sneakers & Athletics Shoes
            </a>
          </div>
          <div className="col-lg-3 col-md-1 ">
            {" "}
            <img
              src="https://m.media-amazon.com/images/G/01/Zappos/2023/Homepage/11.06/TRENDING-CATEGORIES-2-DAILY-DEALS-616x526.gif"
              height={280}
              width={239}
              alt=""
            ></img>
            <br />
            <a href="/" className="center">
              Shop Today's Deals
            </a>
          </div>
          <div className="col-lg-3 col-md-1">
            {" "}
            <img
              src="https://m.media-amazon.com/images/I/71bO7NhmrBL._AC_SR736,920_.jpg"
              height={280}
              width={239}
              alt=""
            ></img>
            <br />
            <a href="/" className="center">
              Coats & Outerwear
            </a>
          </div>
          <div className="col-lg-3 col-md-1">
            {" "}
            <img
              src="https://m.media-amazon.com/images/I/71kuXd9aXvL._AC_SR920,736_.jpg"
              height={280}
              width={239}
              alt=""
            ></img>
            <br />
            <a href="/" className="center">
              2023 Holiday Gift Guide
            </a>
          </div>
        </div>
      </div>

      <div className="container-fluid my-5 mx-5">
        <img
          className="img-fluid"
          src="https://m.media-amazon.com/images/G/01/Zappos/2023/Homepage/11.28/GIVING-TUESDAY-HERO-1440x150_1.png"
          alt="/"
        ></img>
      </div>

      <div className="container-fluid">
        <div className="row my-5 mx-4">
          <div className="col-lg-3 col-md-1">
            <img
              src="https://m.media-amazon.com/images/G/01/Zappos/2023/Homepage/10.30/NEW-ARRIVALS-FEED-658x916_1.jpg"
              href="/"
              width={"329px"}
              height={"458px"}
              alt="k"
            ></img>
            <br />
            content
          </div>
          <div className="col-lg-3 col-md-1">
            <img
              src="https://m.media-amazon.com/images/I/61-bjBeKUKL._AC_SR459,612__FMwebp_.jpg"
              href="/"
              width={"329px"}
              height={"458px"}
              alt="k"
            ></img>
            <br />
            content
          </div>
          <div className="col-lg-3 col-md-1">
            <img
              src="https://m.media-amazon.com/images/I/61+NOfyJFNL._AC_SR613,817__FMwebp_.jpg"
              href="/"
              width={"329px"}
              height={"458px"}
              alt="k"
            ></img>
            <br />
            content
          </div>
          <div className="col-lg-3 col-md-1">
            <img
              src="https://m.media-amazon.com/images/I/71HXSS47+XL._AC_SR736,920_.jpg"
              href="/"
              width={"329px"}
              height={"458px"}
              alt="k"
            ></img>
            <br />
            content
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 as">
            <p>ASICS:The Gift of Running </p>
            <p>
              Surprise them with stylish,supportive kicks made to pack on the
              miles.
            </p>
            <a href="/">Shop ASICS</a>
          </div>
          <div className="col-lg-8 col-md-6 col-sm-6">
            <img
              className="img-fluid"
              src="https://m.media-amazon.com/images/G/01/Zappos/2023/Homepage/12.04/AOE-ASICS-STANDARD-960x500._SX1024_.jpg"
              width={960}
              height={500}
              alt="h"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
