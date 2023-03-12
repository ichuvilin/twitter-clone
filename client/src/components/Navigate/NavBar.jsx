import React, {useContext, useEffect, useState} from 'react';
import {Button, Container, Navbar} from 'react-bootstrap';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {getUserById} from "../../http/api/userAPI";


const NavBar = observer(() => {

    const {user} = useContext(Context)

    const [userData, setUserDate] = useState({});

    const getUserData = () => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user !== null && user !== undefined) {
            getUserById(user.id).then(r => setUserDate(r));
        }
    }

    useEffect(() => {
        getUserData()
    }, [])

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Twitter clone</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    {
                        user.isAuth ?
                            <Navbar.Text>
                                <a href={"/profile/" + userData.id}> {userData.firstName} {userData.lastName} </a>
                            </Navbar.Text>
                            :
                            <Button href={"/login"}>Login</Button>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
});

export default NavBar;