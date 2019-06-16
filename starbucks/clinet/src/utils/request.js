import axios from "axios";
import router from "../router";

const request = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 1000
});

request.interceptors.request.use((config) => {
    return {
        ...config,
        headers: {
            ...config.headers,
            token: window.localStorage.getItem("token")
        }
    }
}, (error) => {
    return Promise.reject(error);
})

request.interceptors.response.use((response) => {
    return response
}, (error) => {
    if (error.response.status > 400) {
        switch (error.response.status) {
            case 401:
                router.push("/login")
                break;
            case 404:
                alert("页面走丢了");
                break;
            case 500:
                alert("服务器端出现错误");
                break;
            case 503:
                alert("网站正在维护");
                break;
            default:
                break;
        }
    }
    return Promise.reject(error)
})

export default {
    get(url, data) {
        return request.get(url, {
            params: data
        })
    },
    post(url, data) {
        return request.post(url, data)
    }
};