import axios from "axios";

const BASE_URL = "https://www.googleapis.com/youtube/v3";
const RAPID_API_KEY=process.env.REACT_APP_API_KEY
const API_KEY = "AIzaSyCElhHYIArOdxk4Ml9e21LaZwWPRqXDwzI"

export const ApiService = {
  async fetching(endpoint) {
    try {
      const params = { key: API_KEY };

      if (endpoint.startsWith("search?")) {
        params.maxResults = 100;
      }

      const response = await axios.get(`${BASE_URL}/${endpoint}`, {
        params,
      });
      return response.data;
    } catch (error) {
      console.log("STATUS:", error.response?.status);
      console.log(
        "GOOGLE ERROR:",
        JSON.stringify(error.response?.data, null, 2),
      );

      throw error;
    }
  },
};
