import React, {useContext, useState} from 'react';
import {Context} from "../../index";
import {login} from "../../http/api/userAPI";
import {Button, Container, Form} from 'react-bootstrap';

const Login = () => {

    const {user} = useContext(Context)

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const fetchUser = async (e) => {
        e.preventDefault()
        const data = await login(username, password);
        user.setIsAuth(true);
        user.setUser(data.body)
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
                <br/>
                <a style={{marginTop: "10"}} href="/registration"> If you don't have an account.</a>
            </Form>
        </Container>

    )
};

export default Login;