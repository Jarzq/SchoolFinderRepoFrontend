import React from "react";
import "./MainPage.css";
import purpleIlustration from "../assets/PurpleIlustration.svg";
import { Link } from "react-router-dom";

const Main: React.FC = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="calculatorTopic">
          <div className="titleSection">
            <p className="calculatorTitle">
              Dopasuj oddział <br />
              do swoich
              <br /> preferencji
            </p>
            <img src={purpleIlustration} alt="Purple Illustration" />
          </div>
          <p className="descriptionSection">
            Zaczniemy od wyliczenia Twoich punktów. Następnie wybierzesz
            preferowane kryteria, takie jak lokalizacja, typ oddziału,
            rozszerzone przedmioty i wiele innych. Nasz algorytm odnajdzie i
            przedstawi Ci szkoły oraz oddziały, które doskonale spełniają Twoje
            oczekiwania!
          </p>
        </div>
        <Link to="/subpage1">
          <button className="calculatorButton bg-primaryPurple">
            Dopasuj klasę
          </button>
        </Link>
        <div> Second topic</div>
      </div>
    </>
  );
};

export default Main;
