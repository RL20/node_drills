import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:9000/weather?address=Hadera",
  baseURL: "http://localhost:9000/weather",
});

export const getWeatherData = async (location) => {
  try {
    let { data } = await api.get("", {
      params: {
        address: `${location}`,
      },
    });
    console.log(`data`, data);
    return data;
  } catch (e) {
    console.log(e.message);
  }
};
