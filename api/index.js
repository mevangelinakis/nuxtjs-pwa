import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://www.omdbapi.com/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  async getMovies(term) {
    return apiClient.get(`?apikey=f536b085&type=movie&s=${term}&page=1`);
  },

  getMovie(id) {
    return apiClient.get(`?apikey=f536b085&type=movie&plot=full&i=${id}`);
  }
};
