import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

function NavBar() {
    return (
        <ButtonGroup className="btn-group" aria-label="Basic example">
            <Button href="#introduction" variant="secondary">Introduction</Button>
            <Button href="#background" variant="secondary">Background</Button>
            <Button href="#projects" variant="secondary">Projects</Button>
            <Button href="#about" variant="secondary">About Me</Button>
        </ButtonGroup> 
    )
}

export default NavBar;