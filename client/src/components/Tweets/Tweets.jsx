import React, {useContext} from 'react';
import {Context} from "../../index";
import {Card, Container} from 'react-bootstrap';
import {observer} from "mobx-react-lite";
import TweetCreate from "./TweetCreate";
import TweetsItems from "./TweetsItems";

const Tweets = observer(() => {

    const {user, tweets} = useContext(Context)

    return (
        <Container>
            {
                user.isAuth && <TweetCreate />
            }
            {
                tweets.tweets.map(e => <TweetsItems key={e.id} item={e}/>)
            }
        </Container>
    );
});

export default Tweets;