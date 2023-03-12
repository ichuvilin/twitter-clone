import React, {useState} from 'react';
import {registration} from "../../http/api/userAPI";
import {Button, Container, Form} from "react-bootstrap";

const Registration = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const fetchUser = async () => {
        await registration(firstName, lastName, username, email, password);
    }

    return (
        <Container>
            <Form style={{marginTop: 50}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" value={firstName} onChange={e => setFirstName(e.target.value)}
                                  placeholder="Enter first name"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" value={lastName} onChange={e => setLastName(e.target.value)}
                                  placeholder="Enter last name"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" value={email} onChange={e => setEmail(e.target.value)}
                                  placeholder="Enter email"/>
                </Form.Group>
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
                <a href={"/login"}>If you have an account.</a>
            </Form>
        </Container>

    )
};

export default Registration;