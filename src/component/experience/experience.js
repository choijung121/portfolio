import { Timeline, Event } from 'react-trivial-timeline';
import { experiences } from "../../data.json";
import myResume from "../../images/Jung_Choi_Resume.pdf";
import './experience.css';

function Experience(){
    return(
        <div id="experience">
            <h1 className="experience-title">Places I've worked</h1>
            <div className='timeline'>
                <Timeline lineColor="black">
                    {experiences.map(experience => (
                        <Event 
                            key={experience.id}
                            dates={experience.dates}
                            iconFill="#cccccc"
                            iconOutline={null}
                            lineColor="#cccccc"
                        >
                            <h2 className="companyName">
                                <a 
                                    className="linkStyle" 
                                    href={experience.companyLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    title={experience.companyName}
                                >
                                    {experience.companyName}
                                </a>
                                {' - '}
                                {experience.jobTitle}
                            </h2>
                            {experience.jobDescription && (
                                <p className="jobDescription">{experience.jobDescription}</p>
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