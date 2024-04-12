import { SCHOOL_TYPE, SchoolEntityType } from "../interfaces/SchoolEntityType";

const mockedSchoolEntities: SchoolEntityType[] = [
  {
    schoolName: "X Liceum Ogólnokształcące im. Królowej Jadwigi",
    schoolEntityName: "[O] hist-pol-geo (ang-fra)",
    minPoints: 80,
    extendedSubjects: ["historia", "j.polski", "geografia"],
    languages: ["Język angielski", "j.francuski"],
    type: SCHOOL_TYPE.Liceum,
    dzielnica: "Praga Północ",
  },
  {
    schoolName: "X Liceum Ogólnokształcące im. Karola Sobieskiego Jadwigi",
    schoolEntityName: "[O] hist-ang-fiz (ang-fra)",
    minPoints: 90,
    extendedSubjects: ["historia", "język angielski", "fizyka"],
    languages: ["Język angielski", "Język hiszpański"],
    type: SCHOOL_TYPE.Liceum,
    dzielnica: "Praga Południe",
  },
  {
    schoolName: "X Liceum Ogólnokształcące im. Karola Sobieskiego Jadwigi",
    schoolEntityName: "[O] hist-biol-chem (ang-hiszp)",
    minPoints: 180,
    extendedSubjects: ["historia", "chemia", "biologia"],
    languages: ["j.angielski", "j.hiszpański"],
    type: SCHOOL_TYPE.Technikum,
    dzielnica: "Praga Południe",
  },
  {
    schoolName: "Technikum informatyczne wiśniowa",
    schoolEntityName: "[O] Technik hotelarstwa (ang-niem)",
    minPoints: 175,
    extendedSubjects: [],
    languages: ["j.włoski", "j.niemiecki"],
    type: SCHOOL_TYPE.Technikum,
    specialization: "Technik hotelarstwa",
    dzielnica: "Wola",
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
