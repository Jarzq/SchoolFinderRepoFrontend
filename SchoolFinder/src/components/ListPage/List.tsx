import React, { useEffect, useState } from "react";
import "./List.css";
import { Input, Select, Slider, Spin } from "antd";
import SchoolEntitiesTable from "./SchoolEntitiesTable/SchoolEntitiesTable";
import { mockedSpecialization } from "../../mocks/MockedSchoolTypes";
import {
  SCHOOL_TYPE,
  SchoolEntityType,
} from "../../interfaces/SchoolEntityType";
import { CloseCircleOutlined } from "@ant-design/icons";
import Subject from "../../interfaces/SubjectType";
import SchoolApiService from "../../infrastructure/api/schoolsApi/schoolsApiService";

const { Option } = Select;

const List: React.FC = () => {
  const [schoolEntities, setSchoolEntities] = useState<SchoolEntityType[]>([]);
  const [filteredData, setFilteredData] = useState(schoolEntities);
  const [searchValue, setSearchValue] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState<string[] | null>(
    null
  );
  const [selectedType, setSelectedType] = useState<SCHOOL_TYPE | null>(null);
  const [selectedLanguages, setSelectedLanguagesType] = useState<
    string[] | null
  >(null);
  const [selectedSpecialization, setSelectedSpecialization] = useState<
    string | null
  >(null);
  const [selectedSubjects, setSelectedSubjectsType] = useState<string[] | null>(
    null
  );
  const [sortOption, setSortOption] = useState<string | null>(null);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [districts, setDistricts] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
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

      try {
        const schoolEntitiesData = await SchoolApiService.getSchoolEntities();
        if (Array.isArray(schoolEntitiesData)) {
          setSchoolEntities(schoolEntitiesData);
        } else {
          console.error(
            "school entities data is not an array:",
            schoolEntitiesData
          );
        }
      } catch (error) {
        console.error("Error fetching school entities:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (value: string) => {
    setSearchValue(value);
    filterData(
      value,
      selectedDistrict,
      selectedType,
      selectedLanguages,
      selectedSpecialization,
      selectedSubjects,
      sortOption,
      rangeValue
    );
  };

  const handleDistrictFilter = (value: string[] | null) => {
    setSelectedDistrict(value);
    filterData(
      searchValue,
      value,
      selectedType,
      selectedLanguages,
      selectedSpecialization,
      selectedSubjects,
      sortOption,
      rangeValue
    );
  };

  const handleTypeFilter = (value: SCHOOL_TYPE | null) => {
    setSelectedType(value);
    filterData(
      searchValue,
      selectedDistrict,
      value,
      selectedLanguages,
      selectedSpecialization,
      selectedSubjects,
      sortOption,
      rangeValue
    );
  };

  const handleLanguagesFilter = (value: string[] | null) => {
    setSelectedLanguagesType(value);
    filterData(
      searchValue,
      selectedDistrict,
      selectedType,
      value,
      selectedSpecialization,
      selectedSubjects,
      sortOption,
      rangeValue
    );
  };

  const handleSpecializationFilter = (value: string | null) => {
    setSelectedSpecialization(value);
    filterData(
      searchValue,
      selectedDistrict,
      selectedType,
      selectedLanguages,
      value,
      selectedSubjects,
      sortOption,
      rangeValue
    );
  };

  const handleSubjectsFilter = (value: string[] | null) => {
    setSelectedSubjectsType(value);
    filterData(
      searchValue,
      selectedDistrict,
      selectedType,
      selectedLanguages,
      selectedSpecialization,
      value,
      sortOption,
      rangeValue
    );
  };

  const handleSortChange = (value: string | null) => {
    setSortOption(value);
    filterData(
      searchValue,
      selectedDistrict,
      selectedType,
      selectedLanguages,
      selectedSpecialization,
      selectedSubjects,
      value,
      rangeValue
    );
  };

  const handleSliderChange = (value: [number, number]) => {
    if (value[0] <= value[1] && value[0] > 0 && value[1] < 1000) {
      setRangeValue(value);
    }
    filterData(
      searchValue,
      selectedDistrict,
      selectedType,
      selectedLanguages,
      selectedSpecialization,
      selectedSubjects,
      sortOption,
      value
    );
  };

  const applyFilters = () => {
    filterData(
      searchValue,
      selectedDistrict,
      selectedType,
      selectedLanguages,
      selectedSpecialization,
      selectedSubjects,
      sortOption,
      rangeValue
    );
  };

  useEffect(() => {
    applyFilters();
  }, [
    schoolEntities,
    searchValue,
    selectedDistrict,
    selectedType,
    selectedLanguages,
    selectedSpecialization,
    selectedSubjects,
    sortOption,
    rangeValue,
  ]);

  const filterData = (
    search: string,
    district: string[] | null,
    type: SCHOOL_TYPE | null,
    languages: string[] | null,
    specialization: string | null,
    subjects: string[] | null,
    sortOption?: string | null,
    rangeValue?: [number, number]
  ) => {
    let filtered = schoolEntities.filter((entity) =>
      entity.schoolName.toLowerCase().includes(search.toLowerCase())
    );

    if (languages !== null && languages !== undefined && languages.length > 0) {
      filtered = filtered.filter((entity) =>
        languages.every((lang) => entity.languages.includes(lang))
      );
    }
    if (district && district.length > 0) {
      filtered = filtered.filter((entity) =>
        district.some((dist) => entity.district.includes(dist))
      );
    }

    if (type !== null && type !== undefined) {
      filtered = filtered.filter((entity) => entity.schoolType === type);
    }

    if (specialization !== null && specialization !== undefined) {
      filtered = filtered.filter(
        (entity) => entity.specialization === specialization
      );
    }
    if (subjects !== null && subjects !== undefined && subjects.length > 0) {
      filtered = filtered.filter((entity) =>
        subjects.every((subj) => entity.extendedSubjects.includes(subj))
      );
    }
    if (rangeValue !== undefined) {
      filtered = filtered.filter(
        (entity) =>
          entity.minPoints >= rangeValue[0] && entity.minPoints <= rangeValue[1]
      );
    }

    if (sortOption !== null) {
      if (sortOption === "nameAsc") {
        filtered = filtered.sort((a, b) =>
          a.schoolName.localeCompare(b.schoolName)
        );
      } else if (sortOption === "nameDesc") {
        filtered = filtered.sort((a, b) =>
          b.schoolName.localeCompare(a.schoolName)
        );
      } else if (sortOption === "minPointsAsc") {
        filtered = filtered.sort((a, b) => a.minPoints - b.minPoints);
      } else if (sortOption === "minPointsDesc") {
        filtered = filtered.sort((a, b) => b.minPoints - a.minPoints);
      }
    }

    setFilteredData(filtered);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data...
      } catch (error) {
        console.error("Error fetching school entities:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="mainListContainer">
        <p className="titleListPage">Lista oddziałów</p>
        <div className="filtersContainer">
          <Select
            mode="multiple"
            className="filterElement"
            placeholder="Filtruj po dzielnicy"
            style={{ width: 200, marginRight: 10 }}
            onChange={handleDistrictFilter}
            allowClear
            clearIcon={<CloseCircleOutlined className="closeCircle" />}
          >
            {districts.map((district, index) => (
              <Option key={index} value={district}>
                {district}
              </Option>
            ))}
          </Select>

          <Select
            className="filterElement"
            placeholder="Filtruj po typie szkoły"
            style={{ width: 200 }}
            onChange={handleTypeFilter}
            allowClear
            clearIcon={<CloseCircleOutlined className="closeCircle" />}
          >
            {Object.keys(SCHOOL_TYPE).map((type) => (
              <Option
                key={type}
                value={SCHOOL_TYPE[type as keyof typeof SCHOOL_TYPE]}
              >
                {SCHOOL_TYPE[type as keyof typeof SCHOOL_TYPE]}
              </Option>
            ))}
          </Select>

          <Select
            className="filterElement"
            mode="multiple"
            placeholder="Filtruj po językach"
            style={{ width: 200 }}
            onChange={handleLanguagesFilter}
            allowClear
            clearIcon={<CloseCircleOutlined className="closeCircle" />}
          >
            {languages.map((language, index) => (
              <Option key={index} value={language}>
                {language}
              </Option>
            ))}
          </Select>

          <Select
            className="filterElement"
            mode="multiple"
            placeholder="Filtruj po przedmiotach"
            style={{ width: 200 }}
            onChange={handleSubjectsFilter}
            allowClear
            clearIcon={<CloseCircleOutlined className="closeCircle" />}
          >
            {subjectNames.map((subject, index) => (
              <Option key={index} value={subject}>
                {subject}
              </Option>
            ))}
          </Select>
          <Select
            className="filterElement"
            placeholder="Filtruj po specjalizacji"
            style={{ width: 200, marginRight: 10 }}
            onChange={handleSpecializationFilter}
            allowClear
            clearIcon={<CloseCircleOutlined className="closeCircle" />}
          >
            {mockedSpecialization.map((district, index) => (
              <Option key={index} value={district}>
                {district}
              </Option>
            ))}
          </Select>
        </div>
        <div className="zakresProguTitle">Zakres progu punktowego</div>
        <div className="searchAndSortContainer">
          <Input
            placeholder="Wyszukaj szkołę po nazwie"
            onChange={(e) => handleSearch(e.target.value)}
            style={{ width: 200, marginRight: 10 }}
          />

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

          <Select
            placeholder="Sortuj"
            style={{ width: 200 }}
            onChange={handleSortChange}
            allowClear
          >
            <Option value="nameAsc">Nazwa (A-Z)</Option>
            <Option value="nameDesc">Nazwa (Z-A)</Option>
            <Option value="minPointsAsc">Próg punktowy (Rosnąco)</Option>
            <Option value="minPointsDesc">Próg punktowy (Malejąco)</Option>
          </Select>
        </div>

        {loading ? (
          <Spin size="large" />
        ) : (
          <SchoolEntitiesTable data={filteredData}></SchoolEntitiesTable>
        )}
      </div>
    </>
  );
};

export default List;
