import React from "react"; 
import Card from '../../component/card/card'
import './project.css'
import jsonData from "../../data.json"
import ProjectInfo from "./project-info";

function Project(){
    return(
        <div id="project">
            <h1 class="project-title">Projects I've worked on</h1>
            <div className="card-block">
                <Card projectData={jsonData.projectData}>
                    <ProjectInfo projectData={jsonData.projectData} />
                </Card>
            </div>
        </div>
    );
};

export default Project; 

