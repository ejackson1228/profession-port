import React from "react";

const projects = [
    {
        id: 0,
        title: 'Operation Pokedex',
        image: '/images/operation-pokedex.jpg',
        description: 'A collaborative application that is a blog-style CMS that allows users to create pokemon teams and share them.',
        repo: 'https://github.com/zasen01/smooth-ops',
        app: 'https://operation-pokedex.herokuapp.com/'
    },
    {
        id: 1,
        title: 'Weather Wonder',
        image: '/images/weather-wonder-ss.jpg',
        description: 'A weather app that allows users to view current & upcoming weather conditions for an area. Weather details include: Temperature, Humidity, Wind Speed, and UV Index.',
        repo: 'https://github.com/ejackson1228/weather-wonder',
        app: 'https://ejackson1228.github.io/weather-wonder/'
    },
    {
        id: 2,
        title: 'Booze Buddy',
        image: '/images/booze-buddy.jpg',
        description: 'This collaborative project is an application inspired by everyday cocktail crafting. Users can search drinks by name or ingredient and find all the necessary information they need to construct a beautiful cocktail.',
        repo: 'https://github.com/Raenique27/spirit-heroes',
        app: 'https://raenique27.github.io/spirit-heroes/'
    },
    {
        id: 3,
        title: 'Inkling',
        image: '/images/Inkling-screenshot.jpg',
        description: 'A unique take on a twitter/BeReal crossover social application.',
        repo: 'https://github.com/ejackson1228/space-whY',
        app: 'https://salty-wave-70415.herokuapp.com/'
    },
    {
        id: 4,
        title: 'Quiz Queen',
        image: '/images/quiz-queen-screenshot.jpg',
        description: 'An application for testing your coding knowledge!',
        repo: 'https://github.com/ejackson1228/quiz-queen',
        app: 'https://ejackson1228.github.io/quiz-queen/'
    },
    {
        id: 5,
        title: 'Password Professional',
        image: '/images/password-professional-screenshot.jpg',
        description: 'Generate an 8+ character password with numbers, the alphabet, and special characters.',
        repo: 'https://github.com/ejackson1228/password-professional',
        app: 'https://ejackson1228.github.io/password-professional/'
    }
]

function Portfolio() {

   return(
    <div className="row projects-div justify-content-around">
        {projects.map((project) => {
    return <div className="card col-md-3 projects">
                <img className="card-image-top" src={process.env.PUBLIC_URL + project.image} alt={`Screenshot of ${project.title}`}></img>
                <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <div className="card-footer">
                        <a className="repo-btn btn" href={project.repo}>Go to Repo</a>
                        <a className="app-btn btn" href={project.app}>Go to App</a>
                    </div>
                </div>
            </div>
        })}
    </div>
   )
};


export default Portfolio; 



// return(
    //     <div className="devProjects">
    //         <div className="card operation-pokedex">
    //             <img className="card-img-top" src="../../../public/images/operation-pokedex.jpg" alt="Operation Pokedex Screenshot"></img>
    //             <div className="card-body">
    //                 <h5 className="card-title">Title</h5>
    //                 <p className="card-text">Some text here</p>
    //                 <a className="btn btn-primary">Go to App</a>
    //                 <a className="btn btn-primary">Go to Repo</a>
    //             </div>
    //         </div>
    //         <div className="card ">
    //             <img className="card-img-top"></img>
    //             <div className="card-body">
    //                 <h5 className="card-title">Title</h5>
    //                 <p className="card-text">Some text here</p>
    //                 <a className="btn btn-primary">Go to App</a>
    //                 <a className="btn btn-primary">Go to Repo</a>
    //             </div>
    //         </div>
    //         <div className="card ">
    //             <img className="card-img-top"></img>
    //             <div className="card-body">
    //                 <h5 className="card-title">Title</h5>
    //                 <p className="card-text">Some text here</p>
    //                 <a className="btn btn-primary">Go to App</a>
    //                 <a className="btn btn-primary">Go to Repo</a>
    //             </div>
    //         </div>
    //         <div className="card ">
    //             <img className="card-img-top"></img>
    //             <div className="card-body">
    //                 <h5 className="card-title">Title</h5>
    //                 <p className="card-text">Some text here</p>
    //                 <a className="btn btn-primary">Go to App</a>
    //                 <a className="btn btn-primary">Go to Repo</a>
    //             </div>
    //         </div>
    //         <div className="card ">
    //             <img className="card-img-top"></img>
    //             <div className="card-body">
    //                 <h5 className="card-title">Title</h5>
    //                 <p className="card-text">Some text here</p>
    //                 <a className="btn btn-primary">Go to App</a>
    //                 <a className="btn btn-primary">Go to Repo</a>
    //             </div>
    //         </div>
    //         <div className="card ">
    //             <img className="card-img-top"></img>
    //             <div className="card-body">
    //                 <h5 className="card-title">Title</h5>
    //                 <p className="card-text">Some text here</p>
    //                 <a className="btn btn-primary">Go to App</a>
    //                 <a className="btn btn-primary">Go to Repo</a>
    //             </div>
    //         </div>
    //     </div>
    // )