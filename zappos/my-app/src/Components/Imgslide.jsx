import React from "react";
const Imgslide = () => {
  return (
    <>
      <div className="container-fluid">
        <h3 className="ps-5">Styles You'll Love From Hot Brands</h3>
        <div className="row">
          <div className="col-3 p-4 center">
            <img
              className="img-fluid"
              src="https://m.media-amazon.com/images/I/61Z0WskO8eL._AC_SR920,736_.jpg"
              height={250}
              width={300}
            ></img>
            <a href="/" className="text-black">
              Hunter
            </a>
          </div>
          <div className="col-3 p-4 center">
            <img
              className="img-fluid"
              src="https://m.media-amazon.com/images/I/71r6C1ekvRL._AC_SR920,736_.jpg"
              height={250}
              width={300}
            ></img>
            <a href="/" className="text-black">
              UGG
            </a>
          </div>
          <div className="col-3 p-4 center">
            <img
              className="img-fluid"
              src="https://m.media-amazon.com/images/I/61SY8Zzjv6L._AC_SR920,736_.jpg"
              height={250}
              width={300}
            ></img>
            <a href="/" className="text-black">
              Clarks
            </a>
          </div>
          <div className="col-3 p-4 center">
            <img
              className="img-fluid"
              src="https://m.media-amazon.com/images/I/71Uo2N4PBHL._AC_SR920,736_.jpg"
              height={250}
              width={300}
            ></img>
            <a href="/" className="text-black">
              Teva
            </a>
          </div>
        </div>
      </div>

      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-lg-8">
            <img src="https://m.media-amazon.com/images/G/01/Zappos/2023/Homepage/11.13/W-STEVEMADDEN-NOVDEC-TSR-960X500.jpg"></img>
          </div>
          <div className="col-lg-4 d-flex align-items-center justify-content-center flex-column">
            <h3>THE STYLE ROOM</h3>
            <h5>steve Madden</h5>
            <p>
              {" "}
              Dazzle the crowd in your holiday ensemble <br></br> with trendy
              footwear and polished apparel.
            </p>
            <a href="/">Shop Steve Madden</a>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <h3 className="ps-5">Popular items</h3>
        <div className="row">
          <div className="col-3 p-4 center">
            <img
              className="img-fluid"
              src="https://m.media-amazon.com/images/I/61Z8rLU86QL._AC_SR920,736_.jpg"
              height={250}
              width={300}
            ></img>
            <a href="/" className="text-black">
              Hunter
            </a>
          </div>
          <div className="col-3 p-4 center">
            <img
              className="img-fluid"
              src="https://m.media-amazon.com/images/I/71G1Ib2Cp8L._AC_SR920,736_.jpg"
              height={250}
              width={300}
            ></img>
            <a href="/" className="text-black">
              UGG
            </a>
          </div>
          <div className="col-3 p-4 center">
            <img
              className="img-fluid"
              src="https://m.media-amazon.com/images/I/71VjKroWZ-L._AC_SR920,736_.jpg"
              height={250}
              width={300}
            ></img>
            <a href="/" className="text-black">
              Clarks
            </a>
          </div>
          <div className="col-3 p-4 center">
            <img
              className="img-fluid"
              src="https://m.media-amazon.com/images/I/61l26D9rRiL._AC_SR920,736_.jpg"
              height={250}
              width={300}
            ></img>
            <a href="/" className="text-black">
              Teva
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Imgslide;
