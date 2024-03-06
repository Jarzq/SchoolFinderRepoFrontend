import React from "react";
import "./Navbar.css";
import { Button, Link } from "@nextui-org/react";

const Navbar: React.FC = () => {
  return (
    <div className="mainNavbarContainer">
      <div className="contentContainer">
        <div>SchoolFinder </div>
        <div className="chooseActionContainer">
          <div className="mr-5">Lista szkół i oddziałów</div>
          <div>Dopasuj klasę</div>
        </div>
        <Button as={Link} color="primary" href="#" variant="flat">
          Zaloguj się
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
