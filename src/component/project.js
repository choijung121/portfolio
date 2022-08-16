import React from "react"; 
import Card from './card';
// import { Card } from 'react-bootstrap';
import './project.css'

function Project(){
    return(
        <div id="project">
            <h1 class="project-title">Projects I've worked on</h1>
            <div className="card-block">
                <Card/>
            </div>
        </div>
    );
};

export default Project; 

