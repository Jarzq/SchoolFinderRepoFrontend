import React, { useState } from "react";
import { Form, Input } from "antd";
import CalculateSinglePoints from "../../services/CalculateSinglePoints";

interface CalculateInputProps {
  label: string;
  name: string;
  multiplyNumber?: number;
  isGrade: boolean;
  minValue: number;
  maxValue: number;
}

const CalculateInput: React.FC<CalculateInputProps> = ({
  label,
  name,
  multiplyNumber,
  isGrade,
  minValue,
  maxValue,
}: CalculateInputProps) => {
  const [inputValue, setInputValue] = useState<number | undefined>(undefined);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);

    if (!isNaN(newValue) && newValue >= minValue && newValue <= maxValue) {
      setInputValue(newValue);

      let updatedPoints: string = "";
      updatedPoints = CalculateSinglePoints(
        isGrade,
        updatedPoints,
        newValue.toString(),
        multiplyNumber
      );

      const inputElement = document.getElementById(
        `${name}Points`
      ) as HTMLInputElement;

      if (inputElement) {
        setTimeout(() => {
          inputElement.value = updatedPoints;
        });
      }
    }
  };

  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required: true, message: "Proszę podaj wynik" }]}
      labelCol={{ flex: "150px" }}
      className="customFormItem"
      labelAlign="left"
    >
      <div className="formRowContainer">
        <Input
          type="number"
          className="inputStyle"
          placeholder="Wynik [%]"
          value={inputValue}
          onChange={handleInputChange}
          min={minValue}
          max={maxValue}
        />
        <Input
          id={`${name}Points`}
          className="inputStyle"
          placeholder="Uzyskane punkty"
          disabled
        />
      </div>
    </Form.Item>
  );
};

export default CalculateInput;
