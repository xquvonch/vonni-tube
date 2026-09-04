// api.service.js
import axios from "axios";

const BASE_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = "AIzaSyDo9QmmQGGIJnqyrdF0KZKJ1qzQPDTegtY";

export const ApiService = {
  async fetching(endpoint, extraParams = {}) {
    try {
      const response = await axios.get(`${BASE_URL}/${endpoint}`, {
        params: {
          part: "snippet",
          type: "video",
          maxResults: 10,
          key: API_KEY,
          ...extraParams, // faqat shu yerdan q keladi
        },
      });
      return response;
    } catch (error) {
      console.log("STATUS:", error.response?.status);
      console.log("DATA:", error.response?.data);
      throw error;
    }
  },
};