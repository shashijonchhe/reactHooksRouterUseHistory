import React from "react";
import {useLocation, useHistory} from 'react-router';


function About(){
    const location=useLocation();
    const history=useHistory();

    function goBack(){
        history.goBack()
    }
    return (
        <div>
            <div>About</div>
            <div>Location={location.pathname}</div>
            <div>From={location.state.from}</div>
            <button onClick={goBack}>Go Back</button>
        </div>
        )
}

export default About;