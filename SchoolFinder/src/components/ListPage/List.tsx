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

  const filterData = (
    search: string,
    district: string | null,
    type: SCHOOL_TYPE | null,
    languages: string[] | null,
    specialization: string | null,
    subjects: string[] | null
  ) => {
    let filtered = mockedSchoolEntities.filter((entity) =>
      entity.schoolName.toLowerCase().includes(search.toLowerCase())
    );

    if (languages !== null && languages.length > 0) {
      filtered = filtered.filter((entity) =>
        languages.every((lang) => entity.languages.includes(lang))
      );
    }
    if (district !== null) {
      filtered = filtered.filter((entity) => entity.dzielnica === district);
    }

    if (type !== null) {
      filtered = filtered.filter((entity) => entity.type === type);
    }

    if (specialization !== null) {
      filtered = filtered.filter(
        (entity) => entity.specialization === specialization
      );
    }
    if (subjects !== null && subjects.length > 0) {
      filtered = filtered.filter((entity) =>
        subjects.every((subj) => entity.extendedSubjects.includes(subj))
      );
    }

    setFilteredData(filtered);
  };

  return (
    <>
      <div className="mainListContainer">
        <p className="titleListPage">Lista oddziałów</p>
        <div className="filtersContainer">
          <Search
            placeholder="Search by school name"
            onSearch={handleSearch}
            onChange={(e) => handleSearch(e.target.value)}
            style={{ width: 200, marginRight: 10 }}
          />
          <Select
            placeholder="Filter by district"
            style={{ width: 200, marginRight: 10 }}
            onChange={handleDistrictFilter}
            allowClear
          >
            <Option value={null}>Clear Selection</Option>
            {mockedDistricts.map((district, index) => (
              <Option key={index} value={district}>
                {district}
              </Option>
            ))}
          </Select>

          <Select
            placeholder="Filter by type"
            style={{ width: 200 }}
            onChange={handleTypeFilter}
            allowClear
          >
            <Option value={null}>Clear Selection</Option>
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
            mode="multiple"
            placeholder="Filter by languages"
            style={{ width: 200 }}
            onChange={handleLanguagesFilter}
            allowClear
          >
            <Option value={null}>Clear Selection</Option>
            {mockedLanguages.map((language, index) => (
              <Option key={index} value={language}>
                {language}
              </Option>
            ))}
          </Select>

          <Select
            mode="multiple"
            placeholder="Filter by subjects"
            style={{ width: 200 }}
            onChange={handleSubjectsFilter}
            allowClear
          >
            <Option value={null}>Clear Selection</Option>
            {mockedSubjects.map((subject, index) => (
              <Option key={index} value={subject}>
                {subject}
              </Option>
            ))}
          </Select>

          <Select
            placeholder="Filter by specialization"
            style={{ width: 200, marginRight: 10 }}
            onChange={handleSpecializationFilter}
            allowClear
          >
            <Option value={null}>Clear Selection</Option>
            {mockedSpecialization.map((district, index) => (
              <Option key={index} value={district}>
                {district}
              </Option>
            ))}
          </Select>
        </div>
        <SchoolEntitiesTable data={filteredData}></SchoolEntitiesTable>
      </div>
    </>
  );
};

export default List;
