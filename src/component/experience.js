import { Timeline, Event } from 'react-trivial-timeline';
import myResume from "../images/Jung_Choi_Resume.pdf"

import './experience.css'

function Experience(){
    return(
        <div id="experience">
            <h1 className="experience-title">Places I've worked</h1>
            <p className='experience-intro'>At this point, I have worked in numerous companies. 
            From each places I have learned and gained valuable skills and knowledge. Here is my journey so far.
            </p>
            <div className='timeline'>
                <Timeline lineColor="black">
                    <Event interval="Nov 2020 - Jun 2022" iconFill="#cccccc" iconOutline={null} lineColor="#cccccc">
                        <h1 className='companyName'>
                            <a className='linkStyle' href="https://www.getredlist.com/">Redlist</a>{" "}- Software QA Intern
                        </h1>
                        <ul>
                            <li className='jobDescription'>
                                Performed manual and regression testing for Android app and Web app
                            </li>
                            <li className='jobDescription'>Used Appium, WebdriverIO, and Cucumber in JavaScript to create automation scripts</li>
                            <li className='jobDescription'>Tracked and reported bugs in Microsoft Azure</li>
                            <li className='jobDescription'>Collaborated with Developers for test requirement clarification</li>
                        </ul>
                    </Event>
                    <Event interval="Sept 2019 – Dec 2019" iconFill="#cccccc" iconOutline={null} lineColor="#cccccc">
                        <h1 className='companyName'>
                            <a className='linkStyle' href="https://www.nuskin.com/en_US/home.html">NuSkin</a>{" "}- Customer Service Representative - Korean
                        </h1>
                        <ul>
                            <li className='jobDescription'>Helped clients by placing orders of all types, setting up new accounts, and answering questions</li>
                            <li className='jobDescription'>Trouble shoot software and other technological problems with Nu Skin related apps and devices</li>
                        </ul>
                    </Event>
                    <Event interval="Jul 2017 – Aug 2019" iconFill="#cccccc" iconOutline={null} lineColor="#cccccc">
                        <h1 className='companyName'>
                            <a className='linkStyle' href="https://provo.mtc.byu.edu/">Missionary Training Center</a>{" "}- Interpreter Trainer - Korean
                        </h1>
                        <ul>
                            <li className='jobDescription'>Supervised average of 6 events and 3 meetings weekly for interpreters</li>
                            <li className='jobDescription'>Trained and coordinated 20+ interpreters to improve the overall quality of interpretation</li>
                        </ul>
                    </Event>
                </Timeline>
            </div>
            <br></br>
            <p className='experience-intro'>Here is my resume below to view my works descriptions in detail.</p>
            <div className="resume">
                <a href={myResume} class="btn btn-outline-primary" role="button" data-bs-toggle="button" aria-pressed="true">Resume</a>
            </div>
        </div>
    );
};

export default Experience; 