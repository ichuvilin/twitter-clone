import React, {useContext} from 'react';
import {Navbar, Container, Button} from 'react-bootstrap';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";


const NavBar = observer(() => {

    const {user} = useContext(Context);

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Twitter clone</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    {
                        user.isAuth ?
                            <Navbar.Text>
                                Signed in as: <a href={"/profile/" + user.user.id}> {user.user.first_name} {user.user.last_name} </a>
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