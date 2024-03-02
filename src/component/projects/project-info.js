import React from "react"; 
import jsonData from "../../data.json"
import Icon from "../icon/icon";
import Link from "../icon/linkIcon"; 
import '../card/card.css'

function ProjectInfo() {
    const projectData = jsonData.projectData; 

    return (
        <>
            {projectData.map(project => (
                <div className="cards bounce" key={project.id}>
                    {project.inProgress ? (
                        <p className="progress-button">In Progress</p>
                    ) : (
                        <></>
                    )}
                    <div className="card-img-text">
                        <img src={project.imagePath} class="card-img" alt={project.title}/>
                        <div className="card-texts">
                            <h5 className="card-project-title">{project.title}</h5>
                            <p className="card-project-text">{project.description}</p>
                        </div>
                    </div>
                    <div className="tool-website">
                        <div className="tools">
                            <ul className="tool-list">
                                {project.tools.split(",").map((tool) => (
                                    <li className="tools-tag">{tool}</li>
                                ))}
                            </ul> 
                        </div>
                        <div className="website-link">
                            <a href={project.githubLink} className="link-dark icon-link">
                                <Icon name="github" />
                            </a>
                            {project.link ? (
                                <a href={project.link} className="link-dark icon-link"><Link name="link" /></a>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ProjectInfo; 