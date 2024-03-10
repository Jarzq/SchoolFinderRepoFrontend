import React from "react";
import "./Calculator.css";
import { Checkbox, Input } from "@nextui-org/react";

const Calculator: React.FC = () => {
  return (
    <>
      <div className="mainCalculatorContainer">
        <div className="sectionDivider">
          <h1>1.Oblicz swoje punkty</h1>
        </div>
        <div className="formSection">
          <Checkbox className="checkboxStyle" color="secondary">
            Wiem już ile będę mieć punktów
          </Checkbox>
          <div className="subSectionDivider">
            <p>Oceny na świadectwie</p>
          </div>
          <div className="subSection">
            <div className="formRow">
              <p className="mr-24">język polski</p>
              <Input
                className="mr-6"
                type="number"
                max={100}
                min={0}
                label="Wynik"
                placeholder="0"
                endContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">%</span>
                  </div>
                }
              />
              <Input type="text" label="Uzyskane punkty" />
            </div>

            <div className="formRow">
              <p className="mr-24">język polski</p>
              <Input
                className="mr-6"
                type="number"
                max={100}
                min={0}
                label="Wynik"
                placeholder="0"
                endContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">%</span>
                  </div>
                }
              />
              <Input type="text" label="Uzyskane punkty" />
            </div>

            <div className="formRow">
              <p className="mr-24">język polski</p>
              <Input
                className="mr-6"
                type="number"
                max={100}
                min={0}
                label="Wynik"
                placeholder="0"
                endContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">%</span>
                  </div>
                }
              />
              <Input type="text" label="Uzyskane punkty" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
