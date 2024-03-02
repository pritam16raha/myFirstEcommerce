import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDQ2NDQ1Y2Y2MDA4ZGJkN2FiZDM4YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwOTM4ODAzMywiZXhwIjoxNzA5NjQ3MjMzfQ.EhUcZCBmbUKmWiHOtjrDqfYX7sNiHttVHsOaFCTQsG0"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
})
