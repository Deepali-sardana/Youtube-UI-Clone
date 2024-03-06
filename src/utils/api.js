import axios from "axios";
const BASE_URL="https://youtube138.p.rapidapi.com";
const options = {
    // method: 'GET',
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_KEY || "a8e161a6acmshf6fa62e7389e3a9p154e51jsna27f6d3f1ff3",
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
    },
  };
  
  export const fetchdatafromapi=async(url)=>{
    try {
      const response = await axios.get(`${BASE_URL}/${url}`, options);
      return response.data;
    } catch (error) {
      console.error("Error fetching data from API:", error);
      throw new Error("Failed to fetch data from API");
    }
  };