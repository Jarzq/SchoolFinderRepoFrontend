import axios from "axios";
import Subject from "../../../interfaces/SubjectType";

const SchoolApiService = {
  getSubjects: async (): Promise<Subject[]> => {
    try {
      const apiUrl =
        import.meta.env.VITE_REACT_APP_API_URL || "https://localhost:44358";
      const getSubjectsUrl = `${apiUrl}/Subjects`;

      const response = await axios.get<Subject[]>(getSubjectsUrl);

      return response.data;
    } catch (error) {
      console.error("Error fetching subjects:", error);
      throw error;
    }
  },
};

export default SchoolApiService;
