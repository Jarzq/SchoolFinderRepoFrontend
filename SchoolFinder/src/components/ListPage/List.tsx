import React, { useState } from "react";
import "./List.css";
import { Input, Select } from "antd";
import SchoolEntitiesTable from "./SchoolEntitiesTable/SchoolEntitiesTable";
import {
  mockedSchoolEntities,
  mockedDistricts,
  mockedLanguages,
  mockedSpecialization,
  mockedSubjects,
} from "../../mocks/MockedSchoolTypes";
import { SCHOOL_TYPE } from "../../interfaces/SchoolEntityType";
import { CloseCircleOutlined } from "@ant-design/icons";
import { DownCircleTwoTone } from "@ant-design/icons";

const { Search } = Input;
const { Option } = Select;

const List: React.FC = () => {
  const [filteredData, setFilteredData] = useState(mockedSchoolEntities);
  const [searchValue, setSearchValue] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
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

  const handleSearch = (value: string) => {
    setSearchValue(value);
    filterData(
      value,
      selectedDistrict,
      selectedType,
      selectedLanguages,
      selectedSpecialization,
      selectedSubjects
    );
  };

  const handleDistrictFilter = (value: string | null) => {
    setSelectedDistrict(value);
    filterData(
      searchValue,
      value,
      selectedType,
      selectedLanguages,
      selectedSpecialization,
      selectedSubjects
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
      selectedSubjects
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
      selectedSubjects
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
      selectedSubjects
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
      value
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
      value
    );
  };

  const filterData = (
    search: string,
    district: string | null,
    type: SCHOOL_TYPE | null,
    languages: string[] | null,
    specialization: string | null,
    subjects: string[] | null,
    sortOption?: string | null
  ) => {
    let filtered = mockedSchoolEntities.filter((entity) =>
      entity.schoolName.toLowerCase().includes(search.toLowerCase())
    );

    if (languages !== null && languages !== undefined && languages.length > 0) {
      filtered = filtered.filter((entity) =>
        languages.every((lang) => entity.languages.includes(lang))
      );
    }
    if (district !== null && district !== undefined) {
      filtered = filtered.filter((entity) => entity.dzielnica === district);
    }

    if (type !== null && type !== undefined) {
      filtered = filtered.filter((entity) => entity.type === type);
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

  return (
    <>
      <div className="mainListContainer">
        <p className="titleListPage">Lista oddziałów</p>
        <div className="filtersContainer">
          <Select
            className="filterElement"
            placeholder="Filter by district"
            style={{ width: 200, marginRight: 10 }}
            onChange={handleDistrictFilter}
            allowClear
            clearIcon={<CloseCircleOutlined className="closeCircle" />}
          >
            {mockedDistricts.map((district, index) => (
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
            {mockedLanguages.map((language, index) => (
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
            {mockedSubjects.map((subject, index) => (
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
        <div className="searchAndSortContainer">
          <Input
            placeholder="Wyszukaj szkołę po nazwie"
            onChange={(e) => handleSearch(e.target.value)}
            style={{ width: 200, marginRight: 10 }}
          />
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

        <SchoolEntitiesTable data={filteredData}></SchoolEntitiesTable>
      </div>
    </>
  );
};

export default List;
