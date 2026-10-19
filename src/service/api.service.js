import axios from "axios";

const BASE_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = "AIzaSyCElhHYIArOdxk4Ml9e21LaZwWPRqXDwzI"



export const ApiService = {
  async fetching(endpoint, extraParams={}) {
    try {
      const params = { key: API_KEY,...extraParams };

      if (endpoint.startsWith("search?") && !params.maxResults) {
        params.maxResults = 48;
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
