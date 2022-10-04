import axios from "axios";

const TOKEN = "ccng42iad3i3sjb7bj90ccng42iad3i3sjb7bj9g";

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN,
  },
});
