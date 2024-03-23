import React from "react";
import SchoolEntity from "../SchoolEntity/SchoolEntity";
import { SchoolEntityType } from "../../interfaces/SchoolEntityType";

interface SchoolEntityListProps {
  data: SchoolEntityType[];
}

const SchoolEntitiesList: React.FC<SchoolEntityListProps> = ({ data }) => {
  return (
    <div className="SchoolEntitiesContainer">
      {data.map((entity, index) => (
        <SchoolEntity key={index} data={entity} />
      ))}
    </div>
  );
};

export default SchoolEntitiesList;
