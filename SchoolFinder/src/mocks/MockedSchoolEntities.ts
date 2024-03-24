import { SchoolEntityType } from "../interfaces/SchoolEntityType";

const mockedSchoolEntities: SchoolEntityType[] = [
  {
    schoolName: "X Liceum Ogólnokształcące im. Królowej Jadwigi",
    schoolEntityName: "[O] hist-pol-geo (ang-fra)",
    minPoints: 80,
    extendedSubjects: ["historia", "j.polski", "geografia"],
    languages: ["j.angielski", "j.francuski"],
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
