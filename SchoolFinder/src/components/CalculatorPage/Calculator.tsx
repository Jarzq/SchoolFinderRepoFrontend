import React from "react";
import "./Calculator.css";
import { Button, Checkbox, Form, Input } from "antd";

const Calculator: React.FC = () => {
  function onFinish(values: any): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <Form
        labelCol={{ span: 14 }}
        wrapperCol={{ span: 16 }}
        className="formStyle"
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        colon={false}
      >
        <div className="sectionDivider">
          <h1>1. Oblicz swoje punkty</h1>
        </div>

        <div className="formSection">
          <Checkbox className="checkboxStyle">
            Wiem już ile będę mieć punktów
          </Checkbox>
          <div className="subSectionDivider">
            <p>Oceny na świadectwie</p>
          </div>
          {/* <div className="subSection"> */}

          <Form.Item
            label="język polski"
            name="jezykPolski"
            rules={[{ required: true, message: "Proszę podaj wynik" }]}
            labelCol={{ span: 8 }} // Set a fixed width for the label column
            className="customFormItem"
            labelAlign="left"
          >
            <div className="inputContainer">
              <Input className="inputStyle" placeholder="Wynik [%]" />
              <Input className="inputStyle" placeholder="Wynik [%]" />
            </div>
          </Form.Item>

          <Form.Item
            label="język polski"
            name="jezykPolski"
            rules={[{ required: true, message: "Proszę podaj wynik" }]}
            labelCol={{ span: 8 }} // Set a fixed width for the label column
            className="customFormItem"
            labelAlign="left"
          >
            <div className="inputContainer">
              <Input className="inputStyle" placeholder="Wynik [%]" />
              <Input className="inputStyle" placeholder="Wynik [%]" />
            </div>
          </Form.Item>

          <Form.Item
            label="język obcy"
            name="jezykObcy"
            rules={[{ required: true, message: "Proszę podaj wynik" }]}
            labelCol={{ span: 8 }} // Set a fixed width for the label column
            className="customFormItem"
            labelAlign="left"
          >
            <div className="inputContainer">
              <Input className="inputStyle" placeholder="Wynik [%]" />
              <Input className="inputStyle" placeholder="Wynik [%]" />
            </div>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </div>
        {/* </div> */}
      </Form>
    </>
  );
};

export default Calculator;
