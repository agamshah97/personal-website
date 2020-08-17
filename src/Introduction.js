import React from 'react';
import { Jumbotron, Image, Button } from 'react-bootstrap';
import photo from "./images/full-photo.jpg"

function Introduction() {
    return (
        <Jumbotron>
            <h2>Hey There!</h2>
            <p>Welcome to my world. You can know a little bit about me here.</p>
            <hr/>
            <div style={{width: "100%", alignItems: "center", justifyContent: "center", textAlign: "center"}}>
                <Image className="full-photo" src={photo} rounded />
            </div>
            <div class="learn-more"><Button href="#background" variant="secondary">Let's get started!</Button></div>
        </Jumbotron>
    );
}

export default Introduction;