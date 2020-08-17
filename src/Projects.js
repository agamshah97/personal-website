import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import DisplayCard from "./DisplayCard"
import reactPhoto from "./images/logo512.png"
import androidPhoto from "./images/android.png"
import flaskPhoto from "./images/flask.png"

function Projects() {
    return (
        <Jumbotron>
            <h2>Projects</h2>
            <p>Some of the projects I have worked on</p>
            <hr/>

            <div style={{display:"flex", justifyContent:"space-around", flexFlow:"wrap"}}>
                <DisplayCard 
                    title="React News Web App"
                    content="Single Page Application developed using React in the frontend and Node.js in the backend, fetching news data from Guardian and NY Times APIs"
                    link="https://github.com/agamshah97/NewsWebApp"
                    image={reactPhoto}
                />
                <DisplayCard
                    title="Android News Application"
                    content="Android News Application developed using similar backend as React News App along with other APIs used for trending charts and weather data."
                    link="https://github.com/agamshah97/AndroidNewsApp"
                    image={androidPhoto}
                />
                <DisplayCard 
                    title="News App developed using Flask"
                    content="Simple News App developed using only HTML, CSS and Javascript in the frontend and Flask in the backend to serve static pages and news data with API calls to FOX and CNN News APIs for news data."
                    link="https://github.com/agamshah97/SimpleNewsApp"
                    image={flaskPhoto}
                />
            </div>
            <div style={{display:"flex", justifyContent:"space-between", margin:"10px"}}>
                <Button variant="secondary" href="#background">Previous</Button>
                <Button variant="secondary" href="#about">Next</Button>
            </div>
        </Jumbotron>
    );
}

export default Projects;