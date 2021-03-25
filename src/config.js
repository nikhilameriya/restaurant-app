import axios from "axios";
const config = require('../config/default.js');

export default axios.create({
  baseURL: config.baseURL,
  headers: {
    Authorization: config.authToken
  },
});
