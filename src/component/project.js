import React from "react"; 
import Card from './card';
// import { Card } from 'react-bootstrap';
import './project.css'

function Project(){
    return(
        <div class="project-title" id="project">
            Projects I've worked on
            <div className="card-block">
                <Card/>
            </div>
        </div>
    );
};

export default Project; 

