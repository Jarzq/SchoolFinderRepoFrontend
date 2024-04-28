import { SCHOOL_TYPE, SchoolEntityType } from "../interfaces/SchoolEntityType";

const mockedSchoolEntities: SchoolEntityType[] = [
  {
    schoolName: "X Liceum Ogólnokształcące im. Królowej Jadwigi",
    entityName: "[O] hist-pol-geo (ang-fra)",
    minPoints: 80,
    extendedSubjects: ["historia", "j.polski", "geografia"],
    languages: ["Język angielski", "j.francuski"],
    schoolType: SCHOOL_TYPE.Liceum,
    district: "Praga Północ",
    id: 0,
    entitySymbol: null,
    maxPoints: 160,
    schoolTypeEnum: 1,
    specializationId: null,
    specialization: null,
  },
  {
    schoolName: "X Liceum Ogólnokształcące im. Jana Kowala",
    entityName: "[O] hist-pol-mat (ang-niem)",
    minPoints: 150,
    extendedSubjects: [],
    languages: ["Język angielski", "j.niemiecki"],
    schoolType: SCHOOL_TYPE.Liceum,
    district: "Mokotów",
    id: 1,
    entitySymbol: null,
    maxPoints: 190,
    schoolTypeEnum: 2,
    specializationId: null,
    specialization: "technik informatyk",
  },
];

const mockedDistricts: string[] = ["Wola", "Praga Północ", "Praga Południe"];
const mockedLanguages: string[] = [
  "j.angielski",
  "j.hiszpański",
  "j.włoski",
  "j.niemiecki",
  "j.francuski",
];
const mockedSubjects: string[] = [
  "historia",
  "j.angielski",
  "fizyka",
  "biologia",
  "chemia",
  "geografia",
];
const mockedSpecialization: string[] = [
  "Technik informatyk",
  "Technik handlowiec",
  "Technik hotelarstwa",
];
export {
  mockedSchoolEntities,
  mockedDistricts,
  mockedLanguages,
  mockedSubjects,
  mockedSpecialization,
};
