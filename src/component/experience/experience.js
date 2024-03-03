import jsonData from "../../data.json";
import myResume from "../../images/Jung_Choi_Resume.pdf";
import './experience.css';
import ExperienceInfo from './experience-info';
import Card from '../../component/card/card'
import '../card/card.css'

function Experience(){
    return(
        <div id="experience">
            <h1 className="experience-title">Places I've worked</h1>
            <div className='card-block'>
                <Card>
                    <ExperienceInfo dataExperience={jsonData.dataExperience}/>
                </Card>
            </div>
            <br></br>
            <div className="resume">
                <a href={myResume} class="btn btn-outline-primary" role="button" data-bs-toggle="button" aria-pressed="true">View my Resume</a>
            </div>
        </div>
    );
};

export default Experience; 