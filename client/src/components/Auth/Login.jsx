import React, {useContext, useState} from 'react';
import {Context} from "../../index";
import {login} from "../../http/api/userAPI";
import jwtDecode from "jwt-decode";

const Login = () => {

    const {user} = useContext(Context)

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const fetchUser = async () => {
        const data = await login(username, password);
        user.isAuth = true;
        user.data = jwtDecode(data.token)
    }

    return (
        <div>
            <input placeholder={"username"} value={username} onChange={e => setUsername(e.target.value)}/>
            <input placeholder={"password"} value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={fetchUser} >Login</button>
            <button onClick={() => console.log(user)}>Check user state</button>
        </div>
    );
};

export default Login;