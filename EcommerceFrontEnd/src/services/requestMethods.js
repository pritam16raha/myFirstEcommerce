import axios from "axios";


const BASE_URL = "http://localhost:5000/api/";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDQ2NDQ1Y2Y2MDA4ZGJkN2FiZDM4YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwOTAwMzc4OCwiZXhwIjoxNzA5MjYyOTg4fQ.O8q9Bz5MDbJOC_2fdrcmjhMPIhf7wNJnzlPms5GzwVI";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})