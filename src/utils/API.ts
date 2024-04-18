import axios from "axios";

const API = axios.create({
    baseURL : "http://54.180.155.53:8080"
})

export default API;