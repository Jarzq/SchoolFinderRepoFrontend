import React from "react";
import "./Navbar.css";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="mainNavbarContainer">
      <div className="contentContainer">
        <Link to="/">
          <div className="buttonNavbar">SchoolFinder </div>
        </Link>
        <div className="chooseActionContainer">
          <Link to="/listPage">
            <div className="mr-5 buttonNavbar">Lista szkół i oddziałów</div>
          </Link>
          <Link to="/calculatorPage">
            <div className="buttonNavbar">Dopasuj klasę</div>
          </Link>
        </div>
        <Button as={Link} color="primary" href="#" variant="flat">
          Zaloguj się
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
