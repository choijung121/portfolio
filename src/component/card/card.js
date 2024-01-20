import React from "react"; 
// import portfolio from "../../images/portfolio.png"
// import expenseApp from "../../images/project-expenseapp.png"
// import weatherApp from "../../images/weather.png"
// import stopwatch from "../../images/stopwatch.png"
// src/images/stopwatch.png
import './card.css'

import Icon from "../icon/icon";
import Link from "../icon/linkIcon"; 
import projectData from "../../data.json"

function ProjectInfo({data}) {
    return (
        <div className="row">
            {data.projectData.map(data => (
                <div className="col-6">
                    <div className="cards text-bg-light mb-3">
                        <a href="https://github.com/choijung121/portfolio" className="card-text">
                            {/* <img src={data.imagePath} class="card-img-top" /> */}
                            <div className="card-body">
                                <div key={data.id}>
                                    <h5 className="card-title">{data.title}</h5>
                                    <p className="card-text">{data.description}</p>
                                    <a href={data.githubLink} className="link-dark icon-link">
                                        <Icon name="github" />
                                    </a>
                                    {data.link ? (
                                        <a href={data.link} className="link-dark icon-link"><Link name="link" /></a>
                                    ) : (
                                        <a></a>
                                    )}
                                </div>
                            </div>
                        </a>
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

