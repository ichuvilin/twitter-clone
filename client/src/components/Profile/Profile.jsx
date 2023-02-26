import React, {useContext, useEffect, useState} from 'react';
import {userProfile} from "../../http/api/userAPI";
import {useParams} from "react-router-dom";
import {Card, Col, Container, Row} from "react-bootstrap";
import {Context} from "../../index";
import TweetsItems from "../Tweets/TweetsItems";
import {getAllTweetsByUser} from "../../http/api/tweetAPI";

const Profile = () => {

    const [candidate, setCandidate] = useState([]);
    const [userTweet, setUserTweet] = useState([])
    const params = useParams();


    const fetchUser = async () => {
        const data = await userProfile(params.id);
        return data;
    }

    useEffect(() => {
        fetchUser().then(r => setCandidate(r))
        getAllTweetsByUser(params.id).then(r => setUserTweet(r));
    }, [])


    return (
        <Container className={"mt-3"}>
            <Row>
                <Col>
                    <Card style={{width: '100%', margin: "20px auto"}}>
                        <Card.Body>
                            <Card.Title>{candidate.firstName} {candidate.lastName}</Card.Title>
                            <Card.Text>
                                {candidate.email}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    {
                        userTweet.map(i => <TweetsItems key={`tweet_id__${i.id}`} item={i} />)
                    }
                </Col>
            </Row>

        </Container>
    );
};

export default Profile;