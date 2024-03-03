import React from "react"; 
import jsonData from "../../data.json";
import './experience.css';
import '../card/card.css'

function ExperienceInfo(){
    const dataExperience = jsonData.dataExperience

    return(
        <>
            {dataExperience.map(data => (
                <div className="cards bounce"> 
                    <div className="job-cards"  key={data.id}>
                        <a className="job-link" href={data.companyLink}>
                            <div className="job-dates">
                                <p>{data.dates}</p>
                            </div>
                            <div className="job-info">
                                <h2 className="companyName">
                                    <a className="linkStyle" href={data.companyLink}>{data.companyName}</a>
                                    {' - '}
                                    {data.jobTitle}
                                </h2>
                                {data.jobDescription && (
                                    <p className="jobDescription">{data.jobDescription}</p>
                                )}
                                {data.skills && (
                                    <ul className="tool-list">
                                        {data.skills.split(",").map((skill, index) => (
                                        <li className="tools-tag" key={index}>{skill}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </a>
                    </div>
                </div>
            ))}
        </>
        
    );
};

export default ExperienceInfo; 