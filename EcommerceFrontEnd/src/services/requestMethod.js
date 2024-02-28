import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDQ2NDQ1Y2Y2MDA4ZGJkN2FiZDM4YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwOTA5MzMzMSwiZXhwIjoxNzA5MzUyNTMxfQ.en9Brc3OLu0tdqyCx_u40njIBKDJmGieaKHEZY4061M"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
})