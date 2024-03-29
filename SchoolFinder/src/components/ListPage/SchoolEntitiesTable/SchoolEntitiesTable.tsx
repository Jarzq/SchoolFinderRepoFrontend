import React from "react";
import { Table, Tag } from "antd";
import "./SchoolEntitiesTable.css";
import { SchoolEntityType } from "../../../interfaces/SchoolEntityType";

interface SchoolEntitiesTableProps {
  data: SchoolEntityType[];
}
const SchoolEntitiesTable: React.FC<SchoolEntitiesTableProps> = ({ data }) => {
  const columns = [
    {
      title: "Nazwa",
      dataIndex: "schoolName",
      key: "schoolName",
      render: (text: string) => <p className="schoolNameStyle">{text}</p>,
    },
    {
      title: "Rozsz.Przemioty/Zawód",
      key: "extendedSubjects",
      dataIndex: "extendedSubjects",
      render: (extendedSubjects: string[], record: SchoolEntityType) => (
        <>
          {extendedSubjects && extendedSubjects.length > 0 ? (
            extendedSubjects.map((subject) => (
              <Tag color="#AA9CFF" key={subject}>
                {subject.toUpperCase()}
              </Tag>
            ))
          ) : (
            <Tag color="#AA9CFF">{record.specialization}</Tag>
          )}
        </>
      ),
    },
    {
      title: "Języki obce",
      key: "languages",
      dataIndex: "languages",
      render: (languages: string[]) => (
        <>
          {languages.map((language) => {
            return (
              <Tag color="#68B8DB" key={language}>
                {language.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Próg punktowy",
      dataIndex: "minPoints",
      key: "minPoints",
    },
    {
      title: "Typ",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Dzielnica",
      dataIndex: "dzielnica",
      key: "dzielnica",
    },
  ];

  return <Table className="tableStyles" columns={columns} dataSource={data} />;
};

export default SchoolEntitiesTable;
