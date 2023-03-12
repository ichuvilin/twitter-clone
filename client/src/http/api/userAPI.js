import {$authHost, $host} from "../http";

const login = async (username, password) => {
    const {data} = await $host.post("/auth/login", {username, password});
    localStorage.setItem("user", JSON.stringify(data.body));
    return data;
}

const registration = async (firstName, lastName, username, email, password) => {
    await $host.post("/auth/registration", {firstName, lastName, username, email, password});
}

const getUserById = async (id) => {
    const {data} = await $authHost.get(`/user/${id}`)
    return data;
}

export {
    login,
    registration,
    getUserById
}