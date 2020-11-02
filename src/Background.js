import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import FlipCard from "./FlipCard"
import vjtiPhoto from "./images/vjti.png"
import uscPhoto from "./images/usc.jpg"
import samsungPhoto from "./images/samsung.png"
import amazonPhoto from "./images/amazon.png"

function Background() {
    return (
        <Jumbotron>
            <h2>About Me!</h2>
            <p>My Educational Background and Work Experience.</p>
            <hr/>
            
            <div style={{display:"flex", flexDirection:"column"}}>
                <h4 style={{margin:"20px"}}>Educational Background</h4>
                <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                    <FlipCard 
                        image={vjtiPhoto}
                        title="Veermata Jijabai Technological Institute"
                        contentTopLeft="Bachelor of Technology"
                        contentTopRight="2015 - 2019"
                        contentBottomLeft="Computer Engineering"
                        contentBottomRight="9.29/10"
                        backLine1="Ranked in the Top 5 of my class."
                        backLine2={"Some of the courses as part of my undergrad were - " + 
                        "Artificial Intelligence, Machine Learning, Data Mining and Warehousing, Internet of Things, Big Data Analytics, Human Computer Interaction."}
                    />
                    <FlipCard 
                        image={uscPhoto}
                        title="University of Southern California"
                        contentTopLeft="Master of Science"
                        contentTopRight="2019 - Current"
                        contentBottomLeft="Computer Science"
                        contentBottomRight="4.0/4.0"
                        backLine1="On track to graduate with MS Honors."
                        backLine2="Serving as a Course Producer for CSCI 561."
                        backLine3={"Courses taken as a part of my graduate studies - " + 
                        "Foundations of Artificial Intelligence (CSCI 561), Analysis of Algorithms (CSCI 570), Web Technologies (CSCI 571), Foundations and Applications of Data Mining (INF 553)."
                        }
                    />
                </div>
                <h4 style={{margin:"20px"}}>Work Experience</h4>
                <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                    <FlipCard 
                        image={samsungPhoto}
                        title="Samsung R&D Institute"
                        contentTopLeft="SE Intern"
                        contentTopRight="May 2018 - July 2018"
                        contentBottomLeft="Intelligent Media Solutions Team"
                        backLine1="Developed an AI Powered Media Player."
                        backLine2="Demonstrated an improvement in streaming perfomance (longer high quality playing times, reduced buffering, and fewer quality switches) by at least 22% compared to standard media player."
                    />
                    <FlipCard 
                        image={amazonPhoto}
                        title="Amazon.com"
                        contentTopLeft="SDE Intern"
                        contentTopRight="May 2020 - August 2020"
                        contentBottomLeft="FC Inventory Team - Amazon Fulfillment Technologies"
                        backLine1="Developed an Onboarding Tool to facilitate the team's operations."
                        backLine2="Reduced the time to onboard customers to the team's services by approx. 5 days, eliminated the margin of error in the onboarding process and automated several otherwise manual steps in the onboarding process."
                    />
                </div>
            </div>

            <div style={{display:"flex", justifyContent:"space-between", margin:"10px"}}>
                <Button variant="secondary" href="#introduction">Previous</Button>
                <Button variant="secondary" href="#projects">Next</Button>
            </div>
        </Jumbotron>
    );
}

export default Background;