import React, { useEffect, useState } from "react";
import "./Calculator.css";
import { Button, Checkbox, Form, Input, Radio, Select, Slider } from "antd";
import SchoolEntitiesList from "../SchoolEntitiesList/SchoolEntitiesList";
import { mockedSchoolEntities } from "../../mocks/MockedSchoolTypes";
import CalculateInput from "../CalculateInput/CalculateInput";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import {
  MAX_KONKURSY_PUNKTY,
  PUNKTY_ZA_SWIADECTWO_Z_WYROZNIENIEM,
  PUNKTY_ZA_WOLONTARIAT,
} from "../constants/calculateConsts";
import SchoolApiService from "../../infrastructure/api/schoolsApi/schoolsApiService";
import Subject from "../../interfaces/SubjectType";

const Calculator: React.FC = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [districts, setDistricts] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [knowPoints, setKnowPoints] = useState(false);
  const [isSwiadectwoChecked, setIsSwiadectwoChecked] = useState(false);
  const [isWolontariatChecked, setIsWolontariatChecked] = useState(false);
  const onFinish = (values) => {
    console.log("Received values:", values);
  };
  const [rangeValue, setRangeValue] = useState<[number, number]>([10, 190]);

  const subjectNames = subjects.map((subject) => subject.fullName);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const subjectsData = await SchoolApiService.getSubjects();
        if (Array.isArray(subjectsData)) {
          setSubjects(subjectsData);
        } else {
          console.error("Subjects data is not an array:", subjectsData);
        }
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }

      try {
        const districtsData = await SchoolApiService.getDistricts();
        if (Array.isArray(districtsData)) {
          setDistricts(districtsData);
        } else {
          console.error("districts data is not an array:", districtsData);
        }
      } catch (error) {
        console.error("Error fetching districts:", error);
      }

      try {
        const languagesData = await SchoolApiService.getLanguages();
        if (Array.isArray(languagesData)) {
          setLanguages(languagesData);
        } else {
          console.error("languages data is not an array:", languagesData);
        }
      } catch (error) {
        console.error("Error fetching languages:", error);
      }
    };

    fetchData();
  }, []);

  const handleSwiadectwoCheckboxChange = (e: CheckboxChangeEvent) => {
    setIsSwiadectwoChecked(e.target.checked);
  };

  const handleWolontariatCheckboxChange = (e: CheckboxChangeEvent) => {
    setIsWolontariatChecked(e.target.checked);
  };

  const handleSliderChange = (value: [number, number]) => {
    if (value[0] <= value[1] && value[0] > 0 && value[1] < 1000) {
      setRangeValue(value);
    }
  };

  const mockedEntities = mockedSchoolEntities;

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
          <Checkbox
            className="checkboxStyle"
            onChange={(e) => setKnowPoints(e.target.checked)}
          >
            Wiem już ile będę mieć punktów
          </Checkbox>
          {!knowPoints ? (
            <>
              <div className="subSectionDivider">
                <p>Wynik z egzaminu ósmoklasisty</p>
              </div>
              <CalculateInput
                placeholder="Wynik [%]"
                label="język polski"
                name="jezykPolskiOcena"
                multiplyNumber={0.35}
                isGrade={false}
                minValue={0}
                maxValue={100}
              />
              <CalculateInput
                placeholder="Wynik [%]"
                label="matematyka"
                name="matematykaOcena"
                multiplyNumber={0.35}
                isGrade={false}
                minValue={0}
                maxValue={100}
              />
              <CalculateInput
                placeholder="Wynik [%]"
                label="język obcy"
                name="jezykObcyOcena"
                multiplyNumber={0.3}
                isGrade={false}
                minValue={0}
                maxValue={100}
              />
              <div className="subSectionDivider">
                <p>Oceny na świadectwie</p>
              </div>
              <CalculateInput
                placeholder="Ocena"
                label="język polski"
                name="jezykPolskiEgzamin"
                isGrade={true}
                minValue={1}
                maxValue={6}
              />
              <CalculateInput
                placeholder="Ocena"
                label="matematyka"
                name="matematykaEgzaimn"
                isGrade={true}
                minValue={1}
                maxValue={6}
              />
              <div className="extraSubjectContainer">
                <Form.Item
                  name="extraSubject1"
                  rules={[
                    { required: true, message: "Proszę wybrać przedmiot" },
                  ]}
                >
                  <Select
                    placeholder="Wybierz przedmiot"
                    className="selectStyle mr-5"
                  >
                    {subjects.map((subject, index) => (
                      <Select.Option key={index} value={subject.fullName}>
                        {subject.fullName}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>

                <CalculateInput
                  placeholder="Ocena"
                  label=""
                  name="extraSubject1Egzamin"
                  isGrade={true}
                  minValue={1}
                  maxValue={6}
                />
              </div>
              <div className="extraSubjectContainer">
                <Form.Item
                  name="extraSubject2"
                  rules={[
                    { required: true, message: "Proszę wybrać przedmiot" },
                  ]}
                >
                  <Select
                    placeholder="Wybierz przedmiot"
                    className="selectStyle mr-5"
                  >
                    {subjects.map((subject, index) => (
                      <Select.Option key={index} value={subject.fullName}>
                        {subject.fullName}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>

                <CalculateInput
                  placeholder="Ocena"
                  label=""
                  name="extraSubject2Egzamin"
                  isGrade={true}
                  minValue={2}
                  maxValue={6}
                />
              </div>
              <div className="subSectionDivider">
                <p>dodatkowe aktywności</p>
              </div>
              <Form.Item
                name="swiadectwoZWyroznieniem"
                className="customFormItem"
              >
                <div className="formRowContainer">
                  <Checkbox
                    className="text-white mb-4"
                    onChange={handleSwiadectwoCheckboxChange}
                  >
                    Świadectwo z wyróżnieniem
                  </Checkbox>
                  <Input
                    className="inputStyle"
                    placeholder="Uzyskane punkty"
                    disabled
                    value={
                      isSwiadectwoChecked
                        ? PUNKTY_ZA_SWIADECTWO_Z_WYROZNIENIEM
                        : "0"
                    }
                  />
                </div>
              </Form.Item>
              <Form.Item name="wolontariat" className="customFormItem">
                <div className="formRowContainer">
                  <Checkbox
                    className="text-white mb-4"
                    onChange={handleWolontariatCheckboxChange}
                  >
                    Wolontariat
                  </Checkbox>
                  <Input
                    className="inputStyle"
                    placeholder="Uzyskane punkty"
                    disabled
                    value={isWolontariatChecked ? PUNKTY_ZA_WOLONTARIAT : "0"}
                  />
                </div>
              </Form.Item>
              <Form.Item name="konkursy" className="customFormItem">
                <div className="formRowContainer">
                  <p className="text-white mb-4 ">Punkty za konkursy</p>
                  <Input
                    type="number"
                    className="inputStyle"
                    placeholder="Podaj liczbę punktów"
                    min={0}
                    max={MAX_KONKURSY_PUNKTY}
                  />
                </div>
              </Form.Item>
            </>
          ) : (
            <Form.Item name="obtainedPoints" className="customFormItem">
              <div className="formRowContainer">
                <Input
                  type="number"
                  className="inputStyle"
                  placeholder="Uzyskane punkty"
                />
              </div>
            </Form.Item>
          )}
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
            <Checkbox.Group options={districts} style={{ width: "100%" }} />
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
            <Checkbox.Group options={subjectNames} style={{ width: "100%" }} />
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

          <Form.Item name="languages" className="customFormItem">
            <Checkbox.Group options={languages} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            name="ilePrzedmiotowRozszerzonych"
            labelCol={{ flex: "auto" }}
            wrapperCol={{ flex: "none" }}
            className="customFormItem"
            labelAlign="left"
          >
            <div className="formRowContainer">
              <Input
                min={1}
                max={10}
                className="inputNumber"
                placeholder="1"
                type="number"
              />
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

          <div className="subSectionDivider">
            <p>Zakres progu punktowego</p>
          </div>
          <p>
            Wybierz przedział minimalnej liczby punktów, która jest potrzebna,
            aby dostać się na dany profil
          </p>

          <div className="sliderContainer">
            <Form.Item name="zakresProgu">
              ws
              <Input.Group compact>
                <Input
                  className="rangeInput rangeInputLeft"
                  value={rangeValue[0]}
                  onChange={(e) =>
                    handleSliderChange([+e.target.value, rangeValue[1]])
                  }
                />
                <Slider
                  range
                  value={rangeValue}
                  min={0}
                  max={200}
                  onChange={handleSliderChange}
                  className="slider"
                />
                <Input
                  className="rangeInput ml-5"
                  value={rangeValue[1]}
                  onChange={(e) =>
                    handleSliderChange([rangeValue[0], +e.target.value])
                  }
                />
              </Input.Group>
            </Form.Item>
          </div>
          {/* ////////////////////////////submit button//////////////////////////// */}
          <Form.Item>
            <Button type="primary" htmlType="submit" className="submitButton">
              Zapisz swój wybór i wyszukaj dopasowane do Ciebie oddziały
            </Button>
          </Form.Item>
        </div>
      </Form>
      <SchoolEntitiesList
        data={mockedEntities}
        title="Oddziały pasujące w 100% do twoich preferencji"
      ></SchoolEntitiesList>
      <SchoolEntitiesList
        data={mockedEntities}
        title="Podobne oddziały różniące się jednym kryterium"
      ></SchoolEntitiesList>
    </>
  );
};

export default Calculator;
