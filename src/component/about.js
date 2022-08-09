import './about.css'

function About(){
    return(
        <div id="aboutMe">
            <div className='container-title'>
                <h1 className="intro-me-title">About</h1>
            </div>
            <div className='container-intro'>
                <div className='intro-me-summary'>
                    <p1 className="intro-me-text">My name is Jung Choi, or call me James if you would like.  
                    <br></br>      
                    <br></br>
                    I am on a journey to become a self-taught software engineer. My interest in Web Development and Software 
                    Engineering peeked as I have an opportunity to have worked with amazing engineers as an QA intern in a start-up. 
                    I was very involved with the development cycle, learning ins and outs of software development. 
                    <br></br>
                    <br></br>
                    My focus is to learn React.JS to build websites to show what I can do. I am trying to
                    apply the knowledge I have gained from college and internship to build amazing web applications!
                    <br></br>
                    <br></br>
                    Here are some of the skills I've been working with: 
                    </p1>
                </div>
                <div className='intro-me-image'>
                    <img src="./IMG_0180.jpeg"></img>
                </div> 
            </div>
            <div className='intro-me-icons'>
                    <ul class = 'intro-icons'>                   
                        <li className="icons"><a><img src="https://img.icons8.com/color/48/000000/javascript--v1.png"/></a></li>
                        <li className="icons"><a><img src="https://img.icons8.com/color/48/000000/html-5--v1.png"/></a></li>
                        <li className="icons"><a><img src="https://img.icons8.com/color/48/000000/css3.png"/></a></li>
                        <li className="icons"><a><img src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"/></a></li>
                        {/* <li className="icons"><a><img src="https://img.icons8.com/color/48/000000/python--v1.png"/></a></li>               */}
                        <li className="icons"><a><img src="https://img.icons8.com/color/48/000000/react-native.png"/></a></li>
                        <li className="icons"><a><img src="https://img.icons8.com/color/48/000000/vue-js.png"/></a></li>
                    </ul>
                </div>
        </div>
    );
};

export default About; 