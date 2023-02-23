import {$authHost, $host} from "../http";

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

const check = async () => {
    let token = localStorage.getItem("token");
    if (token !== null) {
        const {data} = await $authHost.post("/auth/user", {token});
        localStorage.setItem('token', data.token)
        return data;
    }
    return null;
}

export {
    login,
    registration,
    check
}