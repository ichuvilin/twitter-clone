import React, {useEffect} from 'react';
import {Card} from "react-bootstrap";

const TweetsItems = ({item}) => {
    return (
        <Card style={{width: '100%', margin: "20px auto"}}>
            <Card.Body>
                <Card.Title> <a href={"/profile/" + item.user.id}>
                    {item.user.firstName} {item.user.lastName}
                </a> </Card.Title>
                <Card.Text>
                    {item.text}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default TweetsItems;