import React from "react";

const CenterNav = () => {
  return (
    <>
      <section>
        <nav class="navbar burger_menu">
          <div class="container-fluid">
            <a class="navbar-brand ms-5 me-0" href="/">
              <img
                src="https://m.media-amazon.com/images/G/01/zappos/global/logos/zappos-logo-black.svg"
                alt="/"
              ></img>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                  <i class="fa-solid fa-circle-user"></i>
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      aria-current="page"
                      href="{<Sale/>}"
                    >
                      Sale
                    </a>
                  </li>
                  <li class="nav-item" aria-current="page" href="women">
                    <a class="nav-link" href="/">
                      Women
                    </a>
                  </li>
                  <li class="nav-item" aria-current="page" href="#men">
                    <a class="nav-link" href="/">
                      men
                    </a>
                  </li>
                  <li class="nav-item" aria-current="page" href="#women">
                    <a class="nav-link" href="/">
                      Women
                    </a>
                  </li>
                  <li class="nav-item" aria-current="page" href="#kids">
                    <a class="nav-link" href="/">
                      kids
                    </a>
                  </li>
                  <li class="nav-item" aria-current="page" href="#collections">
                    <a class="nav-link" href="/">
                      Collections
                    </a>
                  </li>
                  <li class="nav-item" aria-current="page" href="#brands">
                    <a class="nav-link" href="/">
                      Brands
                    </a>
                  </li>
                  <li class="nav-item" aria-current="page" href="#new">
                    <a class="nav-link" href="/">
                      New
                    </a>
                  </li>
                  <li class="nav-item" aria-current="page" href="#clothings">
                    <a class="nav-link" href="/">
                      Clothings
                    </a>
                  </li>
                  <li class="nav-item" aria-current="page" href="#tools & help">
                    <a class="nav-link" href="/">
                      Tools & Helps
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </section>

      
      <section>
        <div className="container-fluid no_burger_menu pt-2">
          <div class="row">
            <nav class="navbar  d-flex  align-items-start">
              <div class="col-2">
                <div>
                  <a class="navbar-brand ms-5 me-0" href="/">
                    <img
                      src="https://m.media-amazon.com/images/G/01/zappos/global/logos/zappos-logo-black.svg"
                      alt="/"
                    ></img>
                  </a>
                </div>
              </div>
              <div class="col-7 form_">
                <form class="d-flex pe-0 " role="search">
                  <input
                    class="form-control ps-4 pe-5 pt-2 pb-2  "
                    style={{
                      width: "30vw",
                      border: "1px solid black",
                      borderRadius: "50px 0px 0px 50px",
                      fontWeight: "600",
                      fontSize: "16px",
                    }}
                    type="search"
                    placeholder="Search for shoes,cloths,etc"
                    aria-label="Search"
                  />
                  <button
                    class="btn btn-outline  ps-4 pe-5 pt-2 pb-2"
                    style={{
                      borderRadius: "0px 50px 50px 0px",
                      border: "1px solid black",
                    }}
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </div>
              <div class="col-3 pe-5">
                <div className=" icon ">
                  <a href="/">
                    <img
                      className="img-fluid m-2"
                      src={require("../img/login_icon_.png")}
                      height={"30px"}
                      width={"30px"}
                      alt=""
                    />
                  </a>
                  <a href="/">
                    <img
                      className="img-fluid m-2"
                      src={require("../img/shopping_bag_icon_.png")}
                      height={"30px"}
                      width={"35px"}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default CenterNav;
