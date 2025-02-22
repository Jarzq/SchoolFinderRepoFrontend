import React, { useEffect, useState } from "react";
import "./Calculator.css";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  Slider,
  Statistic,
  StatisticProps,
  Tag,
} from "antd";
import SchoolEntitiesList from "../SchoolEntitiesList/SchoolEntitiesList";
import CalculateInput from "../CalculateInput/CalculateInput";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import {
  MAX_KONKURSY_PUNKTY,
  PUNKTY_ZA_SWIADECTWO_Z_WYROZNIENIEM,
  PUNKTY_ZA_WOLONTARIAT,
} from "../constants/calculateConsts";
import SchoolApiService from "../../infrastructure/api/schoolsApi/schoolsApiService";
import CountUp from "react-countup";
import { PrefferedSchoolsRequest } from "../../interfaces/PrefferedSchool";
import { SchoolEntityType } from "../../interfaces/SchoolEntityType";

const Calculator: React.FC = () => {
  const [subjects, setSubjects] = useState<string[]>([]);
  const [exactPrefferedSchools, setExactPrefferedSchools] = useState<
    SchoolEntityType[] | undefined
  >();
  const [notExactPrefferedSchools, setNotExactPrefferedSchools] = useState<
    SchoolEntityType[] | undefined
  >();
  const [districts, setDistricts] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [specializations, setSpecializations] = useState<string[]>([]);
  const [knowPoints, setKnowPoints] = useState(false);
  const [swiadectwoPoints, setSwiadectwoPoints] = useState<number>(0);
  const [wolontariatPoints, setWolontariatPoints] = useState<number>(0);
  const [rangeValue, setRangeValue] = useState<[number, number]>([10, 190]);
  const [totalPoints, setTotalPoints] = useState<number>(0);
  const [polishExamScore, setPolishExamScore] = useState<number>(0);
  const [mathExamScore, setMathExamScore] = useState<number>(0);
  const [languageExamScore, setLanguageExamScore] = useState<number>(0);
  const [polishGradeScore, setPolishGradeScore] = useState<number>(0);
  const [mathGradeScore, setMathGradeScore] = useState<number>(0);
  const [extendedSubjectsCount, setExtendedSubjectsCount] = useState<number>(1);
  const [languagesCount, setLanguagesCount] = useState<number>(1);
  const [extraSubject1GradeScore, setExtraSubject1GradeScore] =
    useState<number>(0);
  const [extraSubject2GradeScore, setExtraSubject2GradeScore] =
    useState<number>(0);
  const [konkursyPoints, setKonkursyPoints] = useState<number>(0);
  const [alreadyKnowPoints, setAlreadyKnowPoints] = useState<number>(0);
  const [anyExtendedSubjectsCheckbox, setAnyExtendedSubjectsCheckbox] =
    useState(false);
  const [anyDistrictCheckbox, setAnyDistrictCheckbox] = useState(false);
  const [anyLanguageCheckbox, setAnyLanguageCheckbox] = useState(false);
  const [anySpecializationCheckbox, setAnySpecializationCheckbox] =
    useState(false);
  const [schoolType, setSchoolType] = useState<string>("");

  const onFinish = async (values: Record<string, any>) => {
    try {
      const requestData: PrefferedSchoolsRequest = {
        prefferedDzielnica: anyDistrictCheckbox ? null : values.district,
        acheivedPunkty: totalPoints,
        pointsMin: rangeValue[0],
        pointsMax: rangeValue[1],
        prefferedSchoolType: values.schoolType,
        prefferedSpecializations: anySpecializationCheckbox
          ? null
          : values.specializations,
        prefferedExtendedSubjects: anyExtendedSubjectsCheckbox
          ? null
          : values.extendedSubjects,
        numberMatchingSubjects: extendedSubjectsCount,
        prefferedLanguages: anyLanguageCheckbox ? null : values.languages,
        numberMatchingLanguages: languagesCount,
      };

      const schoolEntitiesData = await SchoolApiService.getPrefferedSchools(
        requestData
      );

      setExactPrefferedSchools(schoolEntitiesData.exactPrefferedSchools);
      setNotExactPrefferedSchools(schoolEntitiesData.notExactPrefferedSchools);
    } catch (error) {
      console.error("Error fetching school entities:", error);
    }
  };

  useEffect(() => {
    let calculatedTotalPoints = 0;

    if (alreadyKnowPoints) {
      setTotalPoints(alreadyKnowPoints);
      setAllPointsToZero();
    } else {
      calculatedTotalPoints =
        polishExamScore +
        mathExamScore +
        languageExamScore +
        polishGradeScore +
        mathGradeScore +
        extraSubject1GradeScore +
        extraSubject2GradeScore +
        swiadectwoPoints +
        wolontariatPoints +
        konkursyPoints;
      setTotalPoints(calculatedTotalPoints);
    }
  }, [
    polishExamScore,
    mathExamScore,
    languageExamScore,
    polishGradeScore,
    mathGradeScore,
    extraSubject1GradeScore,
    extraSubject2GradeScore,
    konkursyPoints,
    wolontariatPoints,
    swiadectwoPoints,
    alreadyKnowPoints,
  ]);

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

      try {
        const specializationsData = await SchoolApiService.getSpecializations();
        if (Array.isArray(specializationsData)) {
          setSpecializations(specializationsData);
        } else {
          console.error(
            "specializations data is not an array:",
            specializationsData
          );
        }
      } catch (error) {
        console.error("Error fetching specializations:", error);
      }
    };

    fetchData();
  }, []);
  const handleSchoolType = (e: Record<string, any>) => {
    setSchoolType(e.target.value);
  };

  const handleAnySubjectsCheckboxChange = (e: CheckboxChangeEvent) => {
    setAnyExtendedSubjectsCheckbox(e.target.checked);
  };

  const handleAnyDistrictCheckboxChange = (e: CheckboxChangeEvent) => {
    setAnyDistrictCheckbox(e.target.checked);
  };

  const handleAnyLanguageCheckboxChange = (e: CheckboxChangeEvent) => {
    setAnyLanguageCheckbox(e.target.checked);
  };

  const handleAnySpecializationCheckboxChange = (e: CheckboxChangeEvent) => {
    setAnySpecializationCheckbox(e.target.checked);
  };

  const handleSwiadectwoCheckboxChange = (e: CheckboxChangeEvent) => {
    setSwiadectwoPoints(
      e.target.checked ? PUNKTY_ZA_SWIADECTWO_Z_WYROZNIENIEM : 0
    );
  };

  const handleWolontariatCheckboxChange = (e: CheckboxChangeEvent) => {
    setWolontariatPoints(e.target.checked ? PUNKTY_ZA_WOLONTARIAT : 0);
  };

  const handleSliderChange = (value: number[]) => {
    if (value[0] <= value[1] && value[0] > 0 && value[1] < 1000) {
      setRangeValue(value as [number, number]);
    }
  };

  const setAllPointsToZero = () => {
    setKonkursyPoints(0);
    setExtraSubject2GradeScore(0);
    setExtraSubject1GradeScore(0);
    setPolishGradeScore(0);
    setMathGradeScore(0);
    setLanguageExamScore(0);
    setPolishExamScore(0);
    setMathExamScore(0);
    setWolontariatPoints(0);
    setSwiadectwoPoints(0);
  };

  const handleKonkursyPointsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      setKonkursyPoints(newValue);
    }
  };

  const handleAlreadyKnowPointsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      setAlreadyKnowPoints(newValue);
    }
  };

  const handleAlreadyKnowCheckboxChange = (e: CheckboxChangeEvent) => {
    setKnowPoints(e.target.checked);
    if (!e.target.checked) {
      setAlreadyKnowPoints(0);
    }
  };

  const formatter: StatisticProps["formatter"] = (value) => (
    <CountUp className="sumNumber" end={value as number} separator="," />
  );

  const handleExtendedSubjectsCountChange = (value: string) => {
    setExtendedSubjectsCount(parseInt(value));
  };

  const handleLanguagesCountChange = (value: string) => {
    setLanguagesCount(parseInt(value));
  };

  useEffect(() => {
    // Your effect code here
  }, [exactPrefferedSchools, notExactPrefferedSchools]);

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
        scrollToFirstError={true}
      >
        <div className="sectionDivider mt-40">
          <h1>1. Oblicz swoje punkty</h1>
        </div>

        <div className="formSection">
          <Checkbox
            className="checkboxStyle"
            onChange={handleAlreadyKnowCheckboxChange}
            checked={knowPoints}
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
                onPointsChange={setPolishExamScore}
              />
              <CalculateInput
                placeholder="Wynik [%]"
                label="matematyka"
                name="matematykaOcena"
                multiplyNumber={0.35}
                isGrade={false}
                minValue={0}
                maxValue={100}
                onPointsChange={setMathExamScore}
              />
              <CalculateInput
                placeholder="Wynik [%]"
                label="język obcy"
                name="jezykObcyOcena"
                multiplyNumber={0.3}
                isGrade={false}
                minValue={0}
                maxValue={100}
                onPointsChange={setLanguageExamScore}
              />
              <div className="subSectionDivider">
                <p>Oceny na świadectwie</p>
              </div>
              <CalculateInput
                placeholder="Ocena"
                label="język polski"
                name="jezykPolskiEgzamin"
                isGrade={true}
                minValue={2}
                maxValue={6}
                onPointsChange={setPolishGradeScore}
              />
              <CalculateInput
                placeholder="Ocena"
                label="matematyka"
                name="matematykaEgzaimn"
                isGrade={true}
                minValue={2}
                maxValue={6}
                onPointsChange={setMathGradeScore}
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
                    {subjects.map((subject) => (
                      <Select.Option key={subject} value={subject}>
                        {subject}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>

                <CalculateInput
                  placeholder="Ocena"
                  label=""
                  name="extraSubject1Ocena"
                  isGrade={true}
                  minValue={2}
                  maxValue={6}
                  onPointsChange={setExtraSubject1GradeScore}
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
                    {subjects.map((subject) => (
                      <Select.Option key={subject} value={subject}>
                        {subject}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>

                <CalculateInput
                  placeholder="Ocena"
                  label=""
                  name="extraSubject2Ocena"
                  isGrade={true}
                  minValue={2}
                  maxValue={6}
                  onPointsChange={setExtraSubject2GradeScore}
                />
              </div>
              <div className="subSectionDivider">
                <p>Dodatkowe aktywności</p>
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
                    value={swiadectwoPoints}
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
                    value={wolontariatPoints}
                  />
                </div>
              </Form.Item>
              <Form.Item name="konkursy" className="customFormItem">
                <div className="formRowContainer">
                  <p className="text-white mb-4 ">Punkty za konkursy</p>
                  <Input
                    onChange={handleKonkursyPointsChange}
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
            <Form.Item name="alreadyKnowPoints" className="customFormItem">
              <div className="formRowContainer">
                <Input
                  onChange={handleAlreadyKnowPointsChange}
                  type="number"
                  className="inputStyle"
                  placeholder="Uzyskane punkty"
                  min={0}
                  max={200}
                />
              </div>
            </Form.Item>
          )}
        </div>

        <div className="sumPointsContainer">
          <Tag className="TagPoints" color="blue">
            Suma uzyskanych punktów
            <Statistic value={totalPoints} formatter={formatter} />
          </Tag>
        </div>

        <div className="sectionDivider">
          <h1>2. Dopasuj do swoich preferencji</h1>
        </div>

        <div className="formSection">
          <div className="subSectionDivider">
            <p>Dzielnica</p>
          </div>

          <div className="formRowContainer mb-5">
            <Checkbox
              className="text-white mb-4"
              onChange={handleAnyDistrictCheckboxChange}
            >
              Nie bierz pod uwagę (każda dzielnica mi odpowiada)
            </Checkbox>
          </div>

          {!anyDistrictCheckbox && (
            <Form.Item name="district" className="customFormItem">
              <Checkbox.Group options={districts} style={{ width: "100%" }} />
            </Form.Item>
          )}

          <div className="subSectionDivider">
            <p>Typ szkoły</p>
          </div>

          <Form.Item
            name="schoolType"
            className="customFormItem"
            rules={[{ required: true, message: "Proszę wybrać typ szkoły" }]}
          >
            <Radio.Group onChange={handleSchoolType}>
              <Radio value="Liceum"> Liceum </Radio>
              <Radio value="Technikum"> Technikum </Radio>
              <Radio value="Branżowa"> Szkoła branżowa </Radio>
            </Radio.Group>
          </Form.Item>

          {schoolType === "Liceum" ? (
            <>
              <div className="subSectionDivider">
                <p>Przedmioty rozszerzone</p>
              </div>
              <div className="formRowContainer mb-5">
                <Checkbox
                  className="text-white mb-4"
                  onChange={handleAnySubjectsCheckboxChange}
                >
                  Nie bierz pod uwagę (każdy przedmiot mi odpowiada)
                </Checkbox>
              </div>

              {!anyExtendedSubjectsCheckbox && (
                <>
                  <Form.Item name="extendedSubjects" className="customFormItem">
                    <Checkbox.Group
                      options={subjects}
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                  <Form.Item
                    name="extendedSubjectsCount"
                    labelCol={{ flex: "auto" }}
                    wrapperCol={{ flex: "none" }}
                    className="customFormItem"
                    labelAlign="left"
                  >
                    <div className="formRowContainer">
                      <Input
                        max={3}
                        min={1}
                        className="inputNumber"
                        placeholder="1"
                        type="number"
                        onChange={(e) =>
                          handleExtendedSubjectsCountChange(e.target.value)
                        }
                      />
                      <div>Ile z wybranych przedmiotów musi pasować?</div>
                    </div>
                    <p className="description">
                      *Jeśli nie jesteś pewien, które dokładnie przedmioty
                      chcesz mieć rozszerzone, oraz jesteś otwarty na możliwość,
                      że nie wszystkie wybrane przedmioty będą dostępne w
                      wybranej szkole, wybierz mniejszą liczbę. Przykład:
                      Zaznaczyłeś chemię, biologię i angielski. Jeśli tylko te
                      trzy konkretne przedmioty Cię interesują, zaznacz "3".
                      Wtedy wyświetlimy Ci propozycje profili tylko z tymi
                      przedmiotami. Jeżeli zaznaczysz "2" to wyświetlimy Ci
                      propozycje, w których będą rozszerzone przynajmniej dwa z
                      wybranych przedmiotów itd.
                    </p>
                  </Form.Item>
                </>
              )}
            </>
          ) : (
            <>
              <div className="subSectionDivider">
                <p>Specjalizacja</p>
              </div>

              <div className="formRowContainer mb-5">
                <Checkbox
                  className="text-white mb-4"
                  onChange={handleAnySpecializationCheckboxChange}
                >
                  Nie bierz pod uwagę (każda specjalizacja mi odpowiada)
                </Checkbox>
              </div>

              {!anySpecializationCheckbox && (
                <>
                  <Form.Item name="specializations" className="customFormItem">
                    <Select
                      mode="multiple"
                      placeholder="Wybierz specializacje"
                      className="selectStyle mr-5 specializationSelect"
                    >
                      {specializations.map((spec) => (
                        <Select.Option key={spec} value={spec}>
                          {spec}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </>
              )}
            </>
          )}

          <div className="subSectionDivider">
            <p>Języki obce</p>
          </div>

          <div className="formRowContainer mb-5">
            <Checkbox
              className="text-white mb-4"
              onChange={handleAnyLanguageCheckboxChange}
            >
              Nie bierz pod uwagę (każdy język mi odpowiada)
            </Checkbox>
          </div>

          {!anyLanguageCheckbox && (
            <Form.Item name="languages" className="customFormItem">
              <Checkbox.Group options={languages} style={{ width: "100%" }} />
            </Form.Item>
          )}

          <Form.Item
            name="languagesCount"
            labelCol={{ flex: "auto" }}
            wrapperCol={{ flex: "none" }}
            className="customFormItem"
            labelAlign="left"
          >
            <div className="formRowContainer">
              <Input
                min={1}
                max={3}
                className="inputNumber"
                placeholder="1"
                type="number"
                onChange={(e) => handleLanguagesCountChange(e.target.value)}
              />
              <div>Ile z wybranych języków musi pasować?</div>
            </div>
            <p className="description">
              *Jeśli nie jesteś pewien, które dokładnie języki chcesz mieć
              rozszerzone, oraz jesteś otwarty na możliwość, że nie wszystkie
              wybrane języki będą dostępne w wybranej szkole, wybierz mniejszą
              liczbę. Przykład: Zaznaczyłeś Język angielski i Język hiszpański.
              Jeśli tylko te dwa konkretne języki Cię interesują, zaznacz "2".
              Wtedy wyświetlimy Ci propozycje profili tylko z tymi dwoma
              językami. Jeżeli zaznaczysz "1" to wyświetlimy Ci propozycje, w
              których jest przynajmniej jeden z wybranych języków itd.
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
        data={exactPrefferedSchools}
        title="Oddziały pasujące w 100% do twoich preferencji"
      ></SchoolEntitiesList>
      <SchoolEntitiesList
        data={notExactPrefferedSchools}
        title="Podobne oddziały różniące się jednym kryterium"
      ></SchoolEntitiesList>
    </>
  );
};

export default Calculator;
