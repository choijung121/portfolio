import { Timeline, Event } from 'react-trivial-timeline';
import dataExperience from "../../data.json";
import myResume from "../../images/Jung_Choi_Resume.pdf";
import './experience.css';

function Experience(){
    const data = dataExperience.dataExperience

    return(
        <div id="experience">
            <h1 className="experience-title">Places I've worked</h1>
            <div className='timeline'>
                <Timeline lineColor="black">
                    {data.map(data => (
                        <Event 
                            key={data.id}
                            interval={data.dates}
                            iconFill="#cccccc"
                            iconOutline={null}
                            lineColor="#cccccc"
                        >
                            <h2 className="companyName" key={data.id} dates={data.dates}>
                                <a 
                                    className="linkStyle" 
                                    href={data.companyLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    title={data.companyName}
                                >
                                    {data.companyName}
                                </a>
                                {' - '}
                                {data.jobTitle}
                            </h2>
                            {data.jobDescription && (
                                <p className="jobDescription">{data.jobDescription}</p>
                            )}
                            {data.skills && (
                                <p className="jobSkills">Skills: {data.skills}</p>
                            )}
                            {/* <div className="skills">
                                <ul className="skill-list">
                                    {data.skills.split(",").map((skill) => (
                                        <li className='skills-tag'>{skill}</li>
                                    ))}  
                                </ul> 
                            </div> */}
                        </Event>
                    ))}
                </Timeline>
            </div>
            <br></br>
            <div className="resume">
                <a href={myResume} class="btn btn-outline-primary" role="button" data-bs-toggle="button" aria-pressed="true">View my Resume</a>
            </div>
        </div>
    );
};

export default Experience; 