import React from 'react';
import { Card, Button } from 'react-bootstrap';

function DisplayCard(props) {
    return (
        <Card style={{ width: '18rem', margin: "10px" }}>
            <Card.Img style={{width: "100%", objectFit:"cover", alignSelf:"center"}} variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.content}
                </Card.Text>
                {props.link ? <Button href={props.link} variant="primary">More details</Button> : null}
            </Card.Body>
        </Card>
    );
}

export default DisplayCard;