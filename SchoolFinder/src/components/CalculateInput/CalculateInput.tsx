import React, { useState, useEffect } from "react";
import { Form, Input } from "antd";
import CalculateSinglePoints from "../../infrastructure/services/CalculateSinglePoints";

interface CalculateInputProps {
  label: string;
  name: string;
  multiplyNumber?: number;
  isGrade: boolean;
  minValue: number;
  maxValue: number;
  placeholder: string;
  onPointsChange: (points: number) => void; // Updated prop definition
}

const CalculateInput: React.FC<CalculateInputProps> = ({
  label,
  name,
  multiplyNumber,
  isGrade,
  minValue,
  maxValue,
  placeholder,
  onPointsChange,
}: CalculateInputProps) => {
  const [inputValue, setInputValue] = useState<number | undefined>(undefined);
  const [points, setPoints] = useState<string>("");

  useEffect(() => {
    if (!isNaN(inputValue) && inputValue !== undefined) {
      const updatedPoints = CalculateSinglePoints(
        isGrade,
        "",
        inputValue.toString(),
        multiplyNumber
      );
      setPoints(updatedPoints);
      const pointsAsNumber = parseFloat(updatedPoints); // Parse the string to a float
      onPointsChange(pointsAsNumber); // Pass calculated points as a number to parent
    }
  }, [inputValue, isGrade, multiplyNumber, onPointsChange]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue) && newValue >= minValue && newValue <= maxValue) {
      setInputValue(newValue);
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
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          min={minValue}
          max={maxValue}
        />
        <Input
          className="inputStyle"
          placeholder="Uzyskane punkty"
          value={points}
          disabled
        />
      </div>
    </Form.Item>
  );
};

export default CalculateInput;
