import React from "react"; 
import portfolio from "../../images/portfolio.png"
import expenseApp from "../../images/project-expenseapp.png"
import weatherApp from "../../images/weather.png"
import stopwatch from "../../images/stopwatch.png"
import './card.css'

import Icon from "../icon/icon";
import Link from "../icon/linkIcon"; 

function Card(){
    const myStyle = {
        width: "100%",
    };
    
    return(
        <div class="row">
            <div class="col-sm-3">
                <div class="card text-bg-light mb-3">
                    <a href="https://github.com/choijung121/portfolio" className="card-text">
                        <img src={portfolio} class="card-img-top" alt="Example of my portfolio website" style={myStyle}/>
                        <div class="card-body">
                            <h5 class="card-title">Portfolio</h5>
                            <p class="card-text">This project was built with React.JS and Bootstrap to show my portfolio</p>
                            <a href="https://github.com/choijung121/portfolio" class="link-dark icon-link">
                                <Icon name="github" />
                            </a>
                            <a href="https://choijung.netlify.app/" class="link-dark icon-link">
                                <Link name="link" />
                            </a>
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card text-bg-light mb-3">
                    <a href="https://github.com/choijung121/stopwatch" className="card-text">
                        <img src={stopwatch} class="card-img-top" alt="Example of my portfolio website" style={myStyle}/>
                        <div class="card-body">
                            <h5 class="card-title">Stopwatch App</h5>
                            <p class="card-text">Used React to create stopwatch</p>
                            <a href="https://github.com/choijung121/stopwatch" class="link-dark icon-link">
                                <Icon name="github" />
                            </a>
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card text-bg-light mb-3">
                    <a href="https://github.com/choijung121/Expense-App/tree/main/learn-react" className="card-text">
                        <img src={expenseApp} class="card-img-top" alt="Example of Expense App" style={myStyle}/>
                        <div class="card-body">
                            <h5 class="card-title">Expense App</h5>
                            <p class="card-text">This is an expense app to keep track of your spendings on money</p>
                            <a href="https://github.com/choijung121/Expense-App/tree/main/learn-react" class="link-dark icon-link">
                                <Icon name="github" />
                                <div className="progress-button">
                                    <p1>In Progress</p1>
                                </div>
                            </a>
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card text-bg-light mb-3">
                    <a href="https://github.com/choijung121/weatherapp" className="card-text">
                        <img src={weatherApp} class="card-img-top" alt="Example of Weather App" style={myStyle}/>
                        <div class="card-body">
                            <h5 class="card-title">Weather App</h5>
                            <p class="card-text">Simple weather app to get information on temperature and other informations</p>
                            <a href="https://github.com/choijung121/weatherapp" class="link-dark icon-link">
                                <Icon name="github" />
                            </a>
                            <a href="https://reliable-panda-6559d7.netlify.app/" class="link-dark icon-link">
                                <Link name="link" />
                            </a>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card; 

