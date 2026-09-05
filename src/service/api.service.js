// // api.service.js
// import axios from "axios";

// const BASE_URL = "https://www.googleapis.com/youtube/v3";
// const API_KEY = process.env.REACT_APP_PUBLIC_KEY;

// export const ApiService = {
//   async fetching(endpoint, extraParams = {}) {
//     try {
//       const response = await axios.get(`${BASE_URL}/${endpoint}`, {
//         params: {
//           part: "snippet",
//           type: "video",
//           maxResults: 10,
//           key: API_KEY,
//           ...extraParams, // faqat shu yerdan q keladi
//         },
//       });
//       return response;
//     } catch (error) {
//       console.log("STATUS:", error.response?.status);
//       console.log("DATA:", error.response?.data);
//       throw error;
//     }
//   },
// };

// api.service.js
import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
// const RAPIDAPI_KEY = process.env.REACT_APP_RAPIDAPI_KEY;
const RAPIDAPI_KEY ="d669b3671dmsh43368bc6277852dp193c92jsn5b895318d07b"

export const ApiService = {
  async fetching(endpoint, extraParams = {}) {
    try {
      const response = await axios.get(`${BASE_URL}/${endpoint}`, {
        params: {
          part: "snippet",
          type: "video",
          maxResults: 10,
          ...extraParams, // faqat shu yerdan q keladi
        },
        headers: {
          "X-RapidAPI-Key": RAPIDAPI_KEY,
          "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
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