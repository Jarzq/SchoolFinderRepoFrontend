export interface SchoolEntityType {
  id: number;
  district: string;
  schoolName: string;
  entitySymbol: string | null;
  entityName: string;
  minPoints: number;
  maxPoints: number;
  schoolTypeEnum: number;
  schoolType: string;
  specializationId: number | null;
  specialization: string | null;
  extendedSubjects: string[];
  languages: string[];
}

export enum SCHOOL_TYPE {
  Liceum = "Liceum",
  Technikum = "Technikum",
  SzkolaBranzowa = "Szkoła Branżowa",
}
