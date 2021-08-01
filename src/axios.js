import axios from "axios";

var instance = axios.create({
    baseURL:"https://backnovo.herokuapp.com",
    xsrfCookieName: "mytoken",
    xsrfHeaderName: "csrf-token",
});

export default instance;
