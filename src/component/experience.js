import { Timeline, Event } from 'react-trivial-timeline';

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
                            <li className='jobDescription'>Performed manual and regression testing for Android app and Web app</li>
                            <li className='jobDescription'>Used Appium, WebdriverIO, and Cucumber in JavaScript to create automation scripts</li>
                            <li className='jobDescription'>Tracked and reported bugs in Microsoft Azure</li>
                            <li className='jobDescription'>Collaborated with Developers for test requirement clarification</li>
                        </ul>
                    </Event>
                    <Event interval="Sept 2019 – Dec 2019" iconFill="#cccccc" iconOutline={null} lineColor="#cccccc">
                        <h1 className='companyName'>
                            <a className='linkStyle' href="https://www.nuskin.com/en_US/home.html">NuSkin</a>{" "}- Customer Service Representative - Korean
                        </h1>
                    </Event>
                    <Event interval="Jul 2017 – Aug 2019" iconFill="#cccccc" iconOutline={null} lineColor="#cccccc">
                        <h1 className='companyName'>
                            <a className='linkStyle' href="https://provo.mtc.byu.edu/">Missionary Training Center</a>{" "}- Interpreter Trainer - Korean
                        </h1>
                    </Event>
                </Timeline>
            </div>
        </div>
    );
};

export default Experience; 