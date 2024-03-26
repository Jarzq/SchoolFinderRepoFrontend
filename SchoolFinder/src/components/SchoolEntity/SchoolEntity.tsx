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
      <p className="titleSchooEntitylName mb-6">{data.schoolEntityName}</p>

      <p className="entityLabel">
        Minimalne punkty:<p className="entityValue">{data.minPoints}</p>
      </p>

      <p className="entityLabel">
        Twoje punkty:<p className="entityValue">{data.minPoints}</p>
      </p>

      <p className="entityLabel">
        Przedmioty rozszerzone:
        <span className="entityValue">
          {data.extendedSubjects.map((subject) => (
            <Tag color="#AA9CFF" key={subject}>
              {subject.toUpperCase()}
            </Tag>
          ))}
        </span>
      </p>

      <p className="entityLabel">
        Języki obce:
        <span className="entityValue">
          {data.languages.map((language) => (
            <Tag color="#68B8DB" key={language}>
              {language.toUpperCase()}
            </Tag>
          ))}
        </span>
      </p>

      <p className="entityLabel">
        Dzielnica:<p className="entityValue">{data.dzielnica}</p>
      </p>
    </div>
  );
};

export default SchoolEntity;
