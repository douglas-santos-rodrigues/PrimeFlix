import axios from "axios";
//https://api.themoviedb.org/3/
//https://api.themoviedb.org/3/movie/now_playing?api_key=68e7e9c5658dec92e451ff7ccbd655c4&language=pt-BR

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
});

export default api;

