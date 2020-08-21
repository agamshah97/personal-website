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
            <p style={{margin:"auto", marginTop:"10px", maxWidth:"500px"}}>My name is Agam Ketan Shah.
            I am currently pursuing my Master's in Computer Science at University of Southern California.
            I have an inquisitive nature and always look for opportunities to learn new skills! </p>
            <div className="learn-more"><Button href="#background" variant="secondary">Let's get started!</Button></div>
        </Jumbotron>
    );
}

export default Introduction;