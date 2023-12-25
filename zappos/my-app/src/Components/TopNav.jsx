import React from "react";

const TopNav = () => {
  return (
    <>
      <section>
        <div className="container-fluid" style={{ backgroundColor: "#f5f5f5" }}>
          <div className="center" style={{ fontSize: "17px" }}>
            <span style={{ color: "#000000", fontWeight: "400" }}>
              {"  Send an E-Gift Card for easy last-minute gifting."}
            </span>
            <a href="/" className="hover_text" style={{ fontWeight: "600" }}>
              {" Shop E-Gift Cards"}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopNav;
