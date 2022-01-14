const http = require("http");
const API_URL = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";

function fetchData() {
  http.get(API_URL, (res) => {
    res.setEncoding("utf8");
    let rawData = "";
    res.on("data", (chunk) => {
      rawData += chunk;
    });
    res.on("end", () => {
      try {
        const parsedData = JSON.parse(rawData);
        console.log(parsedData);
      } catch (e) {
        console.error(e.message);
      }
    });
  });
}

function main() {
  fetchData();
}

main();
