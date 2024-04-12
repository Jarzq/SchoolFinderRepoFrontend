export interface SchoolEntityType {
  id: number;
  dzielnica: string;
  nazwaSzkoly: string;
  symbolOddzialu: string | null;
  nazwaOddzialu: string;
  minimalnePunkty: number;
  maksymalnePunkty: number;
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
