import React, { useState } from "react";
import { Form, Input } from "antd";

const CalculateInput = ({ label, name, multiplyNumber }) => {
  const handleInputChange = (e) => {
    const newValue = e.target.value;

    const updatedPoints = newValue
      ? Math.round(parseFloat(newValue) * multiplyNumber).toString()
      : "";
    const inputElement = document.getElementById(
      `${name}Points`
    ) as HTMLInputElement;

    if (inputElement) {
      setTimeout(() => {
        inputElement.value = updatedPoints;
      });
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
          className="inputStyle"
          placeholder="Wynik [%]"
          onChange={handleInputChange}
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
