import axios from "axios";

var instance = axios.create({
    withCredentials: true,
    baseURL: "https://veg2.herokuapp.com",
    xsrfCookieName: "mytoken",
    xsrfHeaderName: "csrf-token",
});

export default instance;
