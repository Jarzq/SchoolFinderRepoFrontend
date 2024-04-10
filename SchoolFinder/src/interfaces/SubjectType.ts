interface Subject {
  id: number;
  name: string;
  fullName: string;
  schoolEntitySubjects: any; // You can define a more specific type for this property if needed
  schoolEntityLanguageSubjects: any; // You can define a more specific type for this property if needed
}

export default Subject;
