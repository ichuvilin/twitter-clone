import React, {useContext} from 'react';
import {Context} from "../../index";
import {Card, Container} from 'react-bootstrap';

const Tweets = () => {

    const {tweets} = useContext(Context)

    return (
        <Container>
            {
                tweets.tweets.map(({id, text, user}) =>
                    <Card style={{width: '18rem'}}>
                        <Card.Body>
                            <Card.Title> <a href={"/profile/" + user.id}>
                                {user.firstName} {user.lastName}
                            </a> </Card.Title>
                            <Card.Text>
                                {text}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            }
        </Container>
    );
};

export default Tweets;