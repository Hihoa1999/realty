import React from "react";
import "./css.scss";
import Foot from "./footer";
import Info from "./Info";

function Footer(props) {
  return (
    <div className="Index-Footer row col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <Foot />
      <div className="Infomation  row col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
        <Info />
      </div>
    </div>
  );
}

export default Footer;
