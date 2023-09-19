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
                            {data.skills && (
                                <p className="jobDescription">Skills: {data.skills}</p>
                            )}
                        </Event>
                    ))}
                </Timeline>
            </div>
            <br></br>
            <p className='experience-intro'>View my resume.</p>
            <div className="resume">
                <a href={myResume} class="btn btn-outline-primary" role="button" data-bs-toggle="button" aria-pressed="true">Resume</a>
            </div>
        </div>
    );
};

export default Experience; 