import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <div className="mainNavbarContainer">
      <div className="contentContainer">
        <div>Logo i Nazwa </div>
        <div className="chooseActionContainer">
          <div className="mr-5">Lista szkół i oddziałów</div>
          <div>Dopasuj klasę</div>
        </div>
        <div>lego</div>
      </div>
    </div>
  );
};

export default Navbar;
