import React from "react"; 
import './card.css'

function Card(){
    return(
        <div class="card">
            <img src="./portfolio.png" class="card-img-top"/>
            <div class="card-body">
                <h5 class="card-title">Portfolio</h5>
                <p class="card-text">This project was built with React.JS to show my portfolio</p>
                <a href="https://github.com/choijung121/portfolio" class="btn btn-primary">Github</a>
            </div>
        </div>
    );
};

export default Card; 

