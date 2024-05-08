import { SchoolEntityType } from "./SchoolEntityType";

export interface PrefferedSchoolsRequest {
  prefferedDzielnica: string[];
  acheivedPunkty: number;
  rangeIncrease: number;
  rangeDecrease: number;
  prefferedSchoolType: string;
  prefferedSpecialization: string;
  prefferedExtendedSubjects: string[];
  numberMatchingSubjects: number;
  prefferedLanguages: string[];
  numberMatchingLanguages: number;
}

export interface PrefferedSchoolsResponse {
  exactPrefferedSchools: SchoolEntityType[];
  notExactPrefferedSchools: SchoolEntityType[];
}
