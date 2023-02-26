import React, {useContext, useState} from 'react';
import {Context} from "../../index";
import {login} from "../../http/api/userAPI";
import jwtDecode from "jwt-decode";
import {Button, Container, Form} from 'react-bootstrap';

const Login = () => {

    const {user} = useContext(Context)

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const fetchUser = async () => {
        const data = await login(username, password);
        user.setIsAuth(true);
        user.setUser(jwtDecode(data.token))
    }

    return (
        <Container>
            <Form style={{marginTop: 50}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)}
                                  placeholder="Enter username"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)}
                                  placeholder="Password"/>
                </Form.Group>
                <Button variant="primary" onClick={fetchUser} type="submit">
                    Submit
                </Button>
            </Form>
        </Container>

    )
};

export default Login;