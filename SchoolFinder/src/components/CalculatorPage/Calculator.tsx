import React from "react";
import "./Calculator.css";
import { Button, Checkbox, Form, Input, Radio, Select } from "antd";

const Calculator: React.FC = () => {
  function onFinish(values: any): void {
    throw new Error("Function not implemented.");
  }

  const options = [
    "Wesoła",
    "Białołęka",
    "Wola",
    "Tar",
    "Rembertów",
    "Wesoła2",
    "Białołęka2",
    "Wola2",
    "Ta2r",
    "Rembertów2",
    "Wesoła",
    "Białołęka",
    "Wola",
    "Tar",
    "Rembertów",
    "Wesoła2",
    "Białołęka2",
    "Wola2",
    "Ta2r",
    "Rembertów2",
  ];

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
        <div className="sectionDivider mt-40">
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
            labelCol={{ flex: "150px" }}
            className="customFormItem"
            labelAlign="left"
          >
            <div className="formRowContainer">
              <Input className="inputStyle" placeholder="Wynik [%]" />
              <Input className="inputStyle" placeholder="Wynik [%]" />
            </div>
          </Form.Item>

          <Form.Item
            label="matematyka"
            name="matematyka"
            rules={[{ required: true, message: "Proszę podaj wynik" }]}
            labelCol={{ flex: "150px" }}
            className="customFormItem"
            labelAlign="left"
          >
            <div className="formRowContainer">
              <Input className="inputStyle" placeholder="Wynik [%]" />
              <Input className="inputStyle" placeholder="Wynik [%]" />
            </div>
          </Form.Item>

          <Form.Item
            label="język Obcy "
            name="jezykObcy"
            rules={[{ required: true, message: "Proszę podaj wynik" }]}
            labelCol={{ flex: "150px" }}
            className="customFormItem"
            labelAlign="left"
          >
            <div className="formRowContainer">
              <Input className="inputStyle" placeholder="Wynik [%]" />
              <Input className="inputStyle" placeholder="Wynik [%]" />
            </div>
          </Form.Item>
          <div className="subSectionDivider">
            <p>Wynik z egzaminu ósmoklasisty</p>
          </div>

          <Form.Item
            label="język polski"
            name="jezykPolski"
            rules={[{ required: true, message: "Proszę podaj wynik" }]}
            labelCol={{ flex: "150px" }}
            className="customFormItem"
            labelAlign="left"
          >
            <div className="formRowContainer">
              <Input className="inputStyle" placeholder="Wpisz ocenę" />
              <Input className="inputStyle" placeholder="Wpisz ocenę" />
            </div>
          </Form.Item>

          <Form.Item
            label="matematyka"
            name="matematyka"
            rules={[{ required: true, message: "Proszę podaj wynik" }]}
            labelCol={{ flex: "150px" }}
            className="customFormItem"
            labelAlign="left"
          >
            <div className="formRowContainer">
              <Input className="inputStyle" placeholder="Wpisz ocenę" />
              <Input className="inputStyle" placeholder="Wpisz ocenę" />
            </div>
          </Form.Item>

          <div className="extraSubjectContainer">
            <Form.Item
              name="extraSubject1"
              rules={[{ required: true, message: "Proszę wybrać przedmiot" }]}
              className="customFormItem"
              labelAlign="left"
              style={{ marginRight: 20 }}
            >
              <Select placeholder="Wybierz przedmiot" className="selectStyle">
                <Option value="jezyk angielski">język angielski</Option>
                <Option value="fizyka">fizyka</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="extraSubject1Score"
              rules={[{ required: true, message: "Proszę podaj wynik" }]}
              className="customFormItem"
              labelAlign="left"
            >
              <div className="formRowContainer">
                <Input className="inputStyle" placeholder="Wpisz ocenę" />
                <Input
                  className="inputStyle"
                  placeholder="Uzyskane punkty"
                  disabled
                />
              </div>
            </Form.Item>
          </div>

          <div className="extraSubjectContainer">
            <Form.Item
              name="extraSubject2"
              rules={[{ required: true, message: "Proszę wybrać przedmiot" }]}
              className="customFormItem"
              labelAlign="left"
              style={{ marginRight: 20 }}
            >
              <Select placeholder="Wybierz przedmiot" className="selectStyle">
                {/* TODO: fetch data from backend */}
                <Option value="jezyk angielski">język angielski</Option>
                <Option value="fizyka">fizyka</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="extraSubject1Score"
              rules={[{ required: true, message: "Proszę podaj wynik" }]}
              className="customFormItem"
              labelAlign="left"
            >
              <div className="formRowContainer">
                <Input className="inputStyle" placeholder="Wpisz ocenę" />
                <Input
                  className="inputStyle"
                  placeholder="Uzyskane punkty"
                  disabled
                />
              </div>
            </Form.Item>
          </div>

          <div className="subSectionDivider">
            <p>dodatkowe aktywności</p>
          </div>

          <Form.Item name="swiadectwoZWyroznieniem" className="customFormItem">
            <div className="formRowContainer">
              <Checkbox className="text-white mb-4">
                Świadectwo z wyróżnieniem
              </Checkbox>
              <Input
                className="inputStyle"
                placeholder="Uzyskane punkty"
                disabled
              />
            </div>
          </Form.Item>

          <Form.Item name="wolontariat" className="customFormItem">
            <div className="formRowContainer">
              <Checkbox className="text-white mb-4">Wolontariat</Checkbox>
              <Input
                className="inputStyle"
                placeholder="Uzyskane punkty"
                disabled
              />
            </div>
          </Form.Item>

          <Form.Item name="wolontariat" className="customFormItem">
            <div className="formRowContainer">
              <p className="text-white mb-4 ">Punkty za konkursy</p>
              <Input className="inputStyle" placeholder="Uzyskane punkty" />
            </div>
          </Form.Item>
        </div>

        <div className="sectionDivider">
          <h1>2. Dopasuj do swoich preferencji</h1>
        </div>

        <div className="formSection">
          <div className="subSectionDivider">
            <p>Dzielnica</p>
          </div>
          <Form.Item name="dzielnicaDontCount" className="customFormItem">
            <div className="formRowContainer">
              <Checkbox className="text-white mb-4">
                Nie bierz pod uwagę (każda dzielnica mi odpowiada)
              </Checkbox>
            </div>
          </Form.Item>

          <Form.Item name="dzielnica" className="customFormItem">
            <Checkbox.Group
              className="checkboxGroup2"
              options={options}
              style={{ width: "100%" }}
            />
          </Form.Item>

          <div className="subSectionDivider">
            <p>Typ szkoły</p>
          </div>

          <Form.Item name="typSzkoly" className="customFormItem">
            <Radio.Group>
              <Radio value="liecum"> Liceum </Radio>
              <Radio value="technikum"> Technikum </Radio>
              <Radio value="szkolaBranzowa"> Szkoła branżowa </Radio>
            </Radio.Group>
          </Form.Item>

          <div className="subSectionDivider">
            <p>Przedmioty rozszerzone</p>
          </div>
          <Form.Item
            name="przedmiotyRozszerzoneDontCount"
            className="customFormItem"
          >
            <div className="formRowContainer">
              <Checkbox className="text-white mb-4">
                Nie bierz pod uwagę (każdy przedmiot mi odpowiada)
              </Checkbox>
            </div>
          </Form.Item>

          <Form.Item name="przedmiotRozszerzony" className="customFormItem">
            <Checkbox.Group
              className="checkboxGroup2"
              options={options}
              style={{ width: "100%" }}
            />
          </Form.Item>

          <Form.Item
            name="ilePrzedmiotowRozszerzonych"
            labelCol={{ flex: "auto" }}
            wrapperCol={{ flex: "none" }}
            className="customFormItem"
            labelAlign="left"
          >
            <div className="formRowContainer">
              <Input className="inputNumber" placeholder="1" type="number" />
              <div>Ile z wybranych przedmiotów musi pasować?</div>
            </div>
            <p className="description">
              *Jeśli nie jesteś pewien, które dokładnie przedmioty chcesz mieć
              rozszerzone, oraz jesteś otwarty na możliwość, że nie wszystkie
              wybrane przedmioty będą dostępne w wybranej szkole, wybierz
              mniejszą liczbę. Przykład: Zaznaczyłeś chemię, biologię i
              angielski. Jeśli tylko te trzy przedmioty Cię interesują, zaznacz
              "3". Wtedy wyświetlimy Ci propozycje profili tylko z tymi
              przedmiotami. Jeśli chcesz również zobaczyć więcej wyników z
              dopasowanymi tylko dwoma wybranymi przedmiotami, np. biologia,
              chemia, geografia - wybierz "2", itd."
            </p>
          </Form.Item>

          <div className="subSectionDivider">
            <p>Języki obce</p>
          </div>
          <Form.Item
            name="przedmiotyRozszerzoneDontCount"
            className="customFormItem"
          >
            <div className="formRowContainer">
              <Checkbox className="text-white mb-4">
                Nie bierz pod uwagę (każdy język mi odpowiada)
              </Checkbox>
            </div>
          </Form.Item>

          <Form.Item name="przedmiotRozszerzony" className="customFormItem">
            <Checkbox.Group
              className="checkboxGroup2"
              options={options}
              style={{ width: "100%" }}
            />
          </Form.Item>

          <Form.Item
            name="ilePrzedmiotowRozszerzonych"
            labelCol={{ flex: "auto" }}
            wrapperCol={{ flex: "none" }}
            className="customFormItem"
            labelAlign="left"
          >
            <div className="formRowContainer">
              <Input className="inputNumber" placeholder="1" type="number" />
              <div>Ile z wybranych języków musi pasować?</div>
            </div>
            <p className="description">
              *Jeśli nie jesteś pewien, które dokładnie przedmioty chcesz mieć
              rozszerzone, oraz jesteś otwarty na możliwość, że nie wszystkie
              wybrane przedmioty będą dostępne w wybranej szkole, wybierz
              mniejszą liczbę. Przykład: Zaznaczyłeś chemię, biologię i
              angielski. Jeśli tylko te trzy przedmioty Cię interesują, zaznacz
              "3". Wtedy wyświetlimy Ci propozycje profili tylko z tymi
              przedmiotami. Jeśli chcesz również zobaczyć więcej wyników z
              dopasowanymi tylko dwoma wybranymi przedmiotami, np. biologia,
              chemia, geografia - wybierz "2", itd."
            </p>
          </Form.Item>
          {/* ////////////////////////////submit button//////////////////////////// */}
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </>
  );
};

export default Calculator;
