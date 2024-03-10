import React from "react";
import Navbar from "../components/common/Navbar/Navbar";
import Calculator from "../components/CalculatorPage/Calculator";

const SubPage1: React.FC = () => {
  return (
    <>
      <Navbar></Navbar>
      <Calculator></Calculator>
    </>
  );
};

export default SubPage1;
