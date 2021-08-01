import axios from "axios";

var instance = axios.create({
    baseURL:"https://backnovo2.herokuapp.com",
    xsrfCookieName: "mytoken",
    xsrfHeaderName: "csrf-token",
});

export default instance;
