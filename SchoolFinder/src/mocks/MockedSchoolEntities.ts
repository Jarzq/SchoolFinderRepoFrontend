import { SchoolEntityType } from "../interfaces/SchoolEntityType";

const mockedSchoolEntities: SchoolEntityType[] = [
  {
    schoolName: "Example School 1",
    schoolEntityName: "Entity 1",
    minPoints: 80,
    extendedSubjects: ["Mathematics", "Physics", "Chemistry"],
    languages: ["English", "French"],
    dzielnica: "Praga Północ",
  },
  {
    schoolName: "Example School 2",
    schoolEntityName: "Entity 2",
    minPoints: 75,
    extendedSubjects: ["Biology", "History"],
    languages: ["Spanish", "German"],
    dzielnica: "Wola",
  },
];

export default mockedSchoolEntities;
