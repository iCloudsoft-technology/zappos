import React from "react";
import "./Bgblue.css";
const Bgblue = () => {
  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center con">
        <p className="p">
          *From November 28, 2023 to December 19, 2023, for each item purchased
          on Zappos.com from the Sneaker Give-<br></br>Back Gift Guide, Zappos
          will donate $20 to Soles4Souls, up to a maximum donation of $100,000,
          to benefit the 4EveryKid<br></br> initiative which provides new
          athletic shoes for children in the U.S. experiencing homelessness.
          Each $20 donation<br></br> provides one new pair of shoes to a child
          in need. For more information on Soles4Souls and 4EveryKid, <br></br>
          visit https://soles4souls.org/4everykid/. Customer purchases on
          Zappos.com are not tax deductible. By clicking on the Soles4Souls
          link, you<br></br> will be redirected to an external website.
        </p>
      </div>

      <div className="container-fluid bg-primary bb ">
        <h5 className="bbb">Make Zappos (Emails) Your New BFF!</h5>
        <h6 className="bbb"> Email</h6>
        <input
          className="bbb"
          type="email"
          placeholder="h"
          style={{ background: "transparent", padding: "0" }}
        ></input>
      </div>
    </>
  );
};

export default Bgblue;
