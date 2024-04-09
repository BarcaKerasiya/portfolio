import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://43.204.154.26:5000/api", // Replace with your API base URL
  // baseURL: "http://localhost:5000/api", // Replace with your API base URL

  timeout: 5000, // Set a timeout for requests (optional)
  headers: {
    "Content-Type": "application/json",
    // You can add any default headers here
  },
});
