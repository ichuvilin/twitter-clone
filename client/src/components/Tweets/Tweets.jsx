import React, {useContext} from 'react';
import {Context} from "../../index";
import {Card, Container} from 'react-bootstrap';
import {observer} from "mobx-react-lite";
import TweetCreate from "./TweetCreate";

const Tweets = observer(() => {

    const {user, tweets} = useContext(Context)

    return (
        <Container>
            {
                user.isAuth && <TweetCreate />
            }
            {
                tweets.tweets.map(({id, text, user}) =>
                    <Card key={"id__" + id} style={{width: '100%', margin: '20px auto'}}>
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
});

export default Tweets;