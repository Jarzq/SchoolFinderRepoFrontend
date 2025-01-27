import React from "react";
import "./Navbar.css";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { Popover } from "antd";

const Navbar: React.FC = () => {
  return (
    <div className="mainNavbarContainer">
      <div className="contentContainer">
        <Link to="/">
          <div className="buttonNavbar mr-2">SchoolFinder </div>
        </Link>
        <div className="chooseActionContainer">
          <Link to="/calculatorPage">
            <div className="mr-9  buttonNavbar">Dopasuj klasę</div>
          </Link>
          <Link to="/listPage">
            <div className="buttonNavbar">Lista szkół i oddziałów</div>
          </Link>
        </div>
        <Popover
          content={"W przypadku problemów z działaniem strony lub pytań, prosimy o kontakt mailowy na adres: abc@gmail.com"} 
          trigger="click" className="PopoverContainer">
          <Button as={Link} color="primary" href="#" variant="flat">
             Pomoc
          </Button>
        </Popover>
        
      </div>
    </div>
  );
};

export default Navbar;
