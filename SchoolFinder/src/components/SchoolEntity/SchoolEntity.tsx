import React from "react";
import { SchoolEntityType } from "../../interfaces/SchoolEntityType";
import "./SchoolEntity.css";

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
        <p className="entityValue">{data.extendedSubjects.join(", ")}</p>
      </p>

      <p className="entityLabel">
        Języki:<p className="entityValue">{data.languages.join(", ")}</p>
      </p>

      <p className="entityLabel">
        Dzielnica:<p className="entityValue">{data.dzielnica}</p>
      </p>
    </div>
  );
};

export default SchoolEntity;
