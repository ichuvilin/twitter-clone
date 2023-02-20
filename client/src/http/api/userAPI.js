import {$host} from "../http";

const login = async (username, password) => {
    const {data} = await $host.post("/auth/login", {username, password});
    localStorage.setItem("token", data.token);
    return data;
}

const registration = async (firstName, lastName, username, email, password) => {
    const {data} = await $host.post("/auth/registration", {firstName, lastName, username, email, password});
    localStorage.setItem("token", data.token);
    return data;
}

export {
    login,
    registration
}