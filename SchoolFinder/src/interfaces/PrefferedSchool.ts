import { SchoolEntityType } from "./SchoolEntityType";

export interface PrefferedSchoolsRequest {
  prefferedDzielnica: string[];
  acheivedPunkty: number;
  pointsMax: number;
  pointsMin: number;
  prefferedSchoolType: string;
  prefferedSpecializations: string;
  prefferedExtendedSubjects: string[];
  numberMatchingSubjects: number;
  prefferedLanguages: string[];
  numberMatchingLanguages: number;
}

export interface PrefferedSchoolsResponse {
  exactPrefferedSchools: SchoolEntityType[];
  notExactPrefferedSchools: SchoolEntityType[];
}
