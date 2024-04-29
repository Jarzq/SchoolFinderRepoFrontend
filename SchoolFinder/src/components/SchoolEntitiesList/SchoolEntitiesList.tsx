import React from "react";
import SchoolEntity from "../SchoolEntity/SchoolEntity";
import { SchoolEntityType } from "../../interfaces/SchoolEntityType";
import "./SchoolEntitiesList.css";

interface SchoolEntityListProps {
  data: SchoolEntityType[] | undefined;
  title: string;
}

const SchoolEntitiesList: React.FC<SchoolEntityListProps> = ({
  data,
  title,
}) => {
  return (
    <div className="schoolEntitiesContainer">
      <p className="text-4xl mb-7">{title}</p>
      {data &&
        data.map((entity, index) => <SchoolEntity key={index} data={entity} />)}
    </div>
  );
};

export default SchoolEntitiesList;
