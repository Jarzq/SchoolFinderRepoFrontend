export interface SchoolEntityType {
  schoolName: string;
  schoolEntityName: string;
  minPoints: number;
  extendedSubjects: string[];
  languages: string[];
  type: SCHOOL_TYPE;
  specialization?: string;
  dzielnica: string;
}

export enum SCHOOL_TYPE {
  Liceum = "Liceum",
  Technikum = "Technikum",
  SzkolaBranzowa = "Szkoła Branżowa",
}
