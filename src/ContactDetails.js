import React from 'react';
import { MdEmail } from "react-icons/md"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { Alert } from "react-bootstrap"

function ContactDetails() {
    return (
        <Alert variant="secondary">
            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <span>
                    <a className="no-css-link" href="mailto:aagam97.as@gmail.com"><MdEmail size="25px" style={{marginLeft:"10px", marginRight:"10px"}} /></a>
                    <a className="no-css-link" href="https://www.linkedin.com/in/agam-shah-161097/"><FaLinkedin size="25px" style={{marginLeft:"10px", marginRight:"10px"}} /></a>
                    <a className="no-css-link" href="https://github.com/agamshah97"><FaGithub size="25px" style={{marginLeft:"10px", marginRight:"10px"}} /></a>
                </span>
            </div>
        </Alert>
    )
}

export default ContactDetails;
