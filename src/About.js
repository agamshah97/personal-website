import React from 'react';
import { Jumbotron, Carousel, Button } from 'react-bootstrap';
import lakeMeadPhoto from "./images/Photos/LakeMead.jpg"
import MalibuPhoto from "./images/Photos/Malibu.jpg"
import GrandCanyonPhoto from "./images/Photos/GrandCanyon1.jpg"
import MtBaldyPhoto from "./images/Photos/MtBaldy.jpg"
import TFIPhoto from "./images/Photos/TeachForIndia.jpg"
import DisplayCard from "./DisplayCard"

function About() {
    return (
        <Jumbotron>
            <h2>Some fun facts about me</h2>
            <hr/>
            <div style={{display:"flex", flexDirection:"column"}}>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <p>I like to travel and visit new places. </p>
                <div style={{display:"flex", justifyContent:"space-evenly", maxWidth:"500px"}}>
                <Carousel interval="3000">
                    <Carousel.Item>
                        <img
                        className="d-block w-100 h-100"
                        src={lakeMeadPhoto}
                        alt="Lake Mead, Nevada"
                        />
                        <Carousel.Caption>
                        <h3>Lake Mead, Nevada</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 h-100"
                        src={GrandCanyonPhoto}
                        alt="Grand Canyon, Arizona"
                        />
                        <Carousel.Caption>
                        <h3>Grand Canyon, Arizona</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 h-100"
                        src={MalibuPhoto}
                        alt="Malibu, California"
                        />
                        <Carousel.Caption>
                        <h3>Malibu, California</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 h-100"
                        src={MtBaldyPhoto}
                        alt="Mt. Baldy, California"
                        />

                        <Carousel.Caption>
                        <h3>Mt. Baldy, California</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>
                <hr/>
                </div>
                <div style={{marginTop:"20px", marginBottom:"20px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <p >I like to teach, volunteer and give back to the society.</p>
                <DisplayCard
                    title="Teach for India"
                    content="I completed 60 hours of volunteer work, teaching kids of grade 6 subjects like Math, Geography and English."
                    image={TFIPhoto}
                />
                </div>
                
                <div style={{display:"flex", justifyContent:"space-between", margin:"10px"}}>
                    <Button variant="secondary" href="#projects">Previous</Button>
                </div>
            </div>
        </Jumbotron>
    );
}

export default About;