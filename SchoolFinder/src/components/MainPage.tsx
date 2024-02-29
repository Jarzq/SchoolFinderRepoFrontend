import React from "react";
import "./MainPage.css";
import purpleIlustration from "../assets/PurpleIlustration.svg";
import { Link } from "react-router-dom";

const Main: React.FC = () => {
  return (
    <>
      <div className="mainContainer">
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
          preferowane kryteria, takie jak lokalizacja, typ oddziału, rozszerzone
          przedmioty i wiele innych. Nasz algorytm odnajdzie i przedstawi Ci
          szkoły oraz oddziały, które doskonale spełniają Twoje oczekiwania!
        </p>
        <Link to="/calculatorPage">
          <button className="actionButton bg-primaryPurple">
            Dopasuj klasę
          </button>
        </Link>

        <div className="titleListSection">
          <p className="calculatorTitle">
            Filtruj i sortuj szkoły
            <br /> jak tylko zechcesz
          </p>
          <img src={purpleIlustration} alt="Purple Illustration" />
        </div>
        <p className="descriptionListSection">
          Zaczniemy od wyliczenia Twoich punktów. Następnie wybierzesz
          preferowane kryteria, takie jak lokalizacja, typ oddziału, rozszerzone
          przedmioty i wiele innych. Nasz algorytm odnajdzie i przedstawi Ci
          szkoły oraz oddziały, które doskonale spełniają Twoje oczekiwania!
        </p>
        <Link to="/listPage">
          <button className="actionButton bg-primaryBlue">
            Przejdź do listy szkół
          </button>
        </Link>
      </div>
    </>
  );
};

export default Main;
