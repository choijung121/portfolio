import React from 'react';
import './about.css'
import myImage from "../../images/IMG_0180.jpeg";
import textData from "../../data.json"

function WelcomeText({data}) {
    return (
        <div className="container-intro">
            {data.intro.map(text => (
            <div key={text.id}>
                <p>{text.welcome}</p>
                <p>{text.paragraph1}</p>
                <p>{text.paragraph2}</p>
            </div>
            ))}
        </div>
    )
}

function About(){
    return(
        <div id="aboutMe">
            <div className='container-image'>
                <div className='intro-me-image'>
                    <img className='myimage' src={myImage} alt="My profile"></img>
                </div> 
            </div>
            <WelcomeText data={textData}/>
        </div>          
    );
};

export default About; 