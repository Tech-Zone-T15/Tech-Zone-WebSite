import axios from "axios";

export const api = axios.create({
    baseURL: 'https://tech-zone-api.onrender.com/',
    timeout: 7000
})