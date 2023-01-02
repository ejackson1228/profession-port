import React from "react";


function Resume () {
   
   
    return (
        <div className="container resume">
            <div className="resume-box">
                <iframe className="resume-frame" src={ process.env.PUBLIC_URL + "/files/Resume.pdf"} width="100%" height="500px" title="myResume"></iframe>
                <a className="resume-download btn btn-secondary" href={ process.env.PUBLIC_URL + "/files/resume.pdf"} download={'ElijahJackson_Resume.pdf'}>Click to download resume</a>
            </div>
            <div className="row lists">
                <div className="col-6">
                    <div> 
                        <h3>Proficiencies</h3>
                        <ul className="prof-list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>MySQL</li>
                            <li>NoSQL</li>
                            <li>RESTful API's</li>
                            <li>MongoDb</li>
                            <li>Express.js</li>
                            <li>React</li>
                            <li>Node</li>
                            <li>MERN Stack</li>
                            <li>Progressive Web Applications (PWA)</li>
                            <li>Git & GitHub</li>
                            <li>Databases</li>
                        </ul>
                    </div>
                </div>

                <div className="col-6">
                    <div>
                        <h3>Credentials</h3>
                        <ul className="cred-list">
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Resume;