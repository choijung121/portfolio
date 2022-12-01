import React from "react"; 
import Github from "./githubIcon";
import Link from "./linkIcon";

function Icon (props) {
    switch (props.name) {
        case "github": 
            return <Github {...props} />;
        case "link": 
            return <Link {...props} />;
        default: 
            return; 
    }
}

export default Icon; 