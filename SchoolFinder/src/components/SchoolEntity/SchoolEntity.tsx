import React from "react";
import { SchoolEntityType } from "../../interfaces/SchoolEntityType";

interface SchoolEntityProps {
  data: SchoolEntityType;
}

const SchoolEntity: React.FC<SchoolEntityProps> = ({ data }) => {
  return (
    <div className="EntityContainer">
      <p className="titleSchoolName">{data.schoolName}</p>
      <p className="schoolEntityName">{data.schoolEntityName}</p>
      <p>Minimalne punkty {data.minPoints}</p>
      <p>Przedmioty rozszerzone {data.extendedSubjects.join(", ")}</p>
      <p>Języki {data.languages.join(", ")}</p>
      <p>Dzielnica {data.dzielnica}</p>
    </div>
  );
};

export default SchoolEntity;
