import axios from "axios";

const API = axios.create({
    baseURL : "http://43.201.27.119:8080"
})

export default API;