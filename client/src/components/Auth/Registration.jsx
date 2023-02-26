import React, {useContext, useState} from 'react';
import {Context} from "../../index";
import {login, registration} from "../../http/api/userAPI";
import jwtDecode from "jwt-decode";

const Registration = () => {

    const {user} = useContext(Context)

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const fetchUser = async () => {
        const data = await registration(firstName, lastName, username, email, password);
        user.setIsAuth(true);
        user.setUser(jwtDecode(data.token))
    }

    return (
        <div>
            <input placeholder={"firstName"} value={firstName} onChange={e => setFirstName(e.target.value)}/>
            <input placeholder={"lastName"} value={lastName} onChange={e => setLastName(e.target.value)}/>
            <input placeholder={"email"} value={email} onChange={e => setEmail(e.target.value)}/>
            <input placeholder={"username"} value={username} onChange={e => setUsername(e.target.value)}/>
            <input placeholder={"password"} value={password} onChange={e => setPassword(e.target.value)}/>
            <button onClick={fetchUser}>Login</button>
        </div>
    );
};

export default Registration;