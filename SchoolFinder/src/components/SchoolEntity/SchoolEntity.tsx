import React from "react";
import { SchoolEntityType } from "../../interfaces/SchoolEntityType";
import "./SchoolEntity.css";
import { Tag } from "antd";

interface SchoolEntityProps {
  data: SchoolEntityType;
}

const SchoolEntity: React.FC<SchoolEntityProps> = ({ data }) => {
  return (
    <div className="EntityContainer">
      <p className="titleSchoolName">{data.schoolName}</p>
      <p className="titleSchooEntitylName mb-6">{data.entityName}</p>

      <p className="entityLabel">
        Typ szkoły:<p className="entityValue">{data.schoolType}</p>
      </p>

      <p className="entityLabel">
        Minimalne punkty:<p className="entityValue">{data.minPoints}</p>
      </p>

      <p className="entityLabel">
        Twoje punkty:<p className="entityValue">{data.minPoints}</p>
      </p>

      <p className="entityLabel">
        {data.extendedSubjects && data.extendedSubjects.length > 0
          ? "przedmioty rozszerzone"
          : "specjalizacja"}
        <span className="entityValue">
          {data.extendedSubjects && data.extendedSubjects.length > 0 ? (
            data.extendedSubjects.map((subject) => (
              <Tag color="#6559af">{subject.toUpperCase()}</Tag>
            ))
          ) : (
            <Tag color="#6559af">{data.specialization?.toUpperCase()}</Tag>
          )}
        </span>
      </p>

      <p className="entityLabel">
        Języki obce:
        <span className="entityValue">
          {data.languages.map((language) => (
            <Tag color="#207ea7">{language.toUpperCase()}</Tag>
          ))}
        </span>
      </p>

      <p className="entityLabel">
        Dzielnica:<p className="entityValue">{data.district}</p>
      </p>
    </div>
  );
};

export default SchoolEntity;
