import React from "react";
import "./MainPage.css";
import purpleIlustration from "../../assets/PurpleIlustration.svg";
import lupa from "../../assets/lupa.svg";
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
          <img
            src={purpleIlustration}
            alt="Purple Illustration"
            className="ml-5"
          />
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
          <img src={lupa} alt="Purple Illustration" />
          <div className="textContainer">
            <p>
              Filtruj i sortuj szkoły
              <br /> jak tylko zechcesz
            </p>
            <p className="descriptionListSection">
              Przetestuj zaawansowaną wyszukiwarkę oddziałów, która pozwala na
              sortowanie, filtrowanie na tyle sposobów na ile jesteś w stanie
              sobie wyobrazić. Chcesz posortować według najniższego progu licea
              na Mokotowie z rozszerzoną geografią, z językiem hiszpańskim z
              przedziałem progu punktowego między 130 a 140? Nie ma sprawy,
              możesz to zrobić właśnie tutaj!
            </p>
          </div>
        </div>

        <Link to="/listPage">
          <button className="actionListButton bg-primaryBlue">
            Przejdź do listy szkół
          </button>
        </Link>
      </div>
    </>
  );
};

export default Main;
