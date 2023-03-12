import React, {memo, useContext, useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Context} from "../../index";
import {createNewTweet} from "../../http/api/tweetAPI";

const TweetCreate = () => {

    const {user} = useContext(Context)

    const [text, setText] = useState("");

    const createTweet = async () => {
        await createNewTweet(text, user.user.id);
    }

    return (
        <Form>
            <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                <Form.Label>Tweet text</Form.Label>
                <Form.Control as="textarea" type="text" value={text} onChange={e => setText(e.target.value)}
                              placeholder="Your tweet"/>
            </Form.Group>
            <Button onClick={() => createTweet()} variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default TweetCreate;