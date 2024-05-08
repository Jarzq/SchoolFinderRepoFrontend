import axios from "axios";
import Subject from "../../../interfaces/SubjectType";
import { SchoolEntityType } from "../../../interfaces/SchoolEntityType";
import {
  PrefferedSchoolsRequest,
  PrefferedSchoolsResponse,
} from "../../../interfaces/PrefferedSchool";

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

  getDistricts: async (): Promise<string[]> => {
    try {
      const apiUrl =
        import.meta.env.VITE_REACT_APP_API_URL || "https://localhost:44358";
      const getDistrictsUrl = `${apiUrl}/Districts`;

      const response = await axios.get<string[]>(getDistrictsUrl);

      return response.data;
    } catch (error) {
      console.error("Error fetching districts:", error);
      throw error;
    }
  },

  getLanguages: async (): Promise<string[]> => {
    try {
      const apiUrl =
        import.meta.env.VITE_REACT_APP_API_URL || "https://localhost:44358";
      const getLanguagesUrl = `${apiUrl}/Languages`;

      const response = await axios.get<string[]>(getLanguagesUrl);

      return response.data;
    } catch (error) {
      console.error("Error fetching languages:", error);
      throw error;
    }
  },

  getSchoolEntities: async (): Promise<SchoolEntityType[]> => {
    try {
      const apiUrl =
        import.meta.env.VITE_REACT_APP_API_URL || "https://localhost:44358";
      const getSchoolEntitiesUrl = `${apiUrl}/SchoolEntities`;

      const response = await axios.get<SchoolEntityType[]>(
        getSchoolEntitiesUrl
      );

      return response.data;
    } catch (error) {
      console.error("Error fetching school entities:", error);
      throw error;
    }
  },

  getSpecializations: async (): Promise<string[]> => {
    try {
      const apiUrl =
        import.meta.env.VITE_REACT_APP_API_URL || "https://localhost:44358";
      const getSpecializationsUrl = `${apiUrl}/Specializations`;

      const response = await axios.get<string[]>(getSpecializationsUrl);

      return response.data;
    } catch (error) {
      console.error("Error fetching specializations:", error);
      throw error;
    }
  },

  getPrefferedSchools: async (
    requestData: PrefferedSchoolsRequest
  ): Promise<PrefferedSchoolsResponse> => {
    try {
      const apiUrl =
        import.meta.env.VITE_REACT_APP_API_URL || "https://localhost:44358";
      const getPrefferedSchoolsUrl = `${apiUrl}/PrefferedSchoolEntities`;

      const response = await axios.post<PrefferedSchoolsResponse>(
        getPrefferedSchoolsUrl,
        requestData
      );

      return response.data;
    } catch (error) {
      console.error("Error fetching school entities:", error);
      throw error;
    }
  },
};

export default SchoolApiService;
