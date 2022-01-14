const request = require("postman-request");
const axios = require("axios");
const superagent = require("superagent");

const API_URL = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";

async function usingRequest() {
  request({ url: API_URL, json: true }, (err, { body }) => (err ? console.log(`err`, err) : console.log(`usingRequest data\n`, body[0])));
}

async function usingAxios() {
  const { data } = await axios.get(API_URL);
  console.log(`usingAxios data\n`, data[0]);
}

async function usingSuperagent() {
  superagent.get(API_URL).end((err, { body }) => (err ? console.log(`err`, err) : console.log(`usingSuperagent data\n`, body[0])));
}

function main() {
  usingRequest();
  usingAxios();
  usingSuperagent();
}

main();
