import React from "react";

function About() {

    return(
        <div>
            <div className="center-div">
                <div className="profile-pic-div">
                    <img src={process.env.PUBLIC_URL + '/images/Profile_Pic@Ruth.jpg'} alt='Me!' className="profile-pic"/>
                </div>
            </div>
            <div className="aboutme container">
                <h2 className="about-header">Welcome! My name is Elijah!</h2>
                <p className="about-business">Thank you for visiting my portfolio website! Here you will find my portfolio of projects as well as a downloadable resume.
                Just a bit about me, myself, and I: 
                <br/>
                <br/>
                I am a Californian raised Floridian, recently turned Charlottian! (Charlotte, NC).
                My Partner and I took a big leap moving here, away from our families, to start a brand-new life for ourselves. 
                On this journey, I discovered Web Development and decided it was time to start a career in something I am interested and passionate about.
                So, I enrolled in the UNCC Full-Stack Web Development Bootcamp.
                In the bootcamp, I learned a plethura of skills and critical-thinking applications to jumpstart my journey in Web Development. 
                I am particularly fond of working with JavaScript and its inummerable amount of packages, but plan to expand my knowledge by learning more languages such as Python, PHP, and Java.
                As I continue to polish my skills, I am looking for a job opportunity to get my career started! 
                If you believe I am an eligible candidate for your business, please contact me via the Contact tab in the navigation bar above.</p>
                
                
                <p className="about-personal">Whenever I am not honing my development skills, you can find me amongst my cats, spending time with my partner, playing Pokémon, or having an adventure in life!
                Speaking of life, it is a wonderful yet troublesome thing. Life is full of successes and faliures. 
                While it may not be possible to master life, there are opportunities waiting for everyone out there and I intend to take advantage of mine! 
                I will end this introduction with one of my favorite quotes that keeps me going through tough times and failure: 
                </p>

                <h5 className="fav-quote text-center">“The master has failed more times than the beginner has even tried."</h5>
                <h6 className="quote-author text-center"> -- Stephen McCranie</h6>
            </div>
        </div>
    )
};

export default About;