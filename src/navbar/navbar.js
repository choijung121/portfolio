import React from "react"; 

function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg sticky-top bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">JC</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end">
                        <li class="nav-item">
                            <a class="nav-link active" href="#aboutMe">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#experience">Experience</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#project">Project</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent" className="icon-nav">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-end">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="https://github.com/choijung121?tab=repositories">
                                <img src="https://img.icons8.com/sf-ultralight-filled/35/000000/github.png"/>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="https://www.linkedin.com/in/jung-choi-4767a7172/">
                                <img src="https://img.icons8.com/color/35/000000/linkedin.png"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}; 

export default Navbar; 