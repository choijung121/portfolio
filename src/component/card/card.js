import React from "react"; 
import './card.css'

import Icon from "../icon/icon";
import Link from "../icon/linkIcon"; 
import projectData from "../../data.json"

function ProjectInfo({data}) {
    return (
        <div className="row gy-4">
            {data.projectData.map(data => (
                <div className="col-md-6">
                    <div className="cards bounce text-bg-light mb-3">
                        <div className="card-body">
                            <div className="card-body-body" key={data.id}>
                                {data.inProgress ? (
                                    <p className="progress-button">In Progress</p>
                                ) : (
                                    <></>
                                )}
                                <img src={data.imagePath} class="card-img-top" />
                                <div className="card-texts">
                                    <h5 className="card-project-title">{data.title}</h5>
                                    <p className="card-project-text">{data.description}</p>
                                </div>
                                <div className="tools">
                                    <ul className="tool-list">
                                        {data.tools.split(",").map((tool) => (
                                            <li className="tools-tag">{tool}</li>
                                        ))}
                                    </ul> 
                                </div>
                                <div className="website-link">
                                    <a href={data.githubLink} className="link-dark icon-link">
                                        <Icon name="github" />
                                    </a>
                                    {data.link ? (
                                        <a href={data.link} className="link-dark icon-link"><Link name="link" /></a>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
         </div>
    )
}

function Card() {
    return(
        <ProjectInfo data={projectData}/>
    );
};

export default Card; 

