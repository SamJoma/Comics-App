import React from "react";
import captain from "../assets/captain-planet.jpg";

function Header() {
  return (
    <div>
      <img src={captain} alt="Captain Planet" id="main-header" />
    </div>
  );
}

export default Header;
