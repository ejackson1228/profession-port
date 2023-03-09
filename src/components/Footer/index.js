import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub, faLinkedin, faStackOverflow);

function Footer() {


    return(
        <footer className="app-footer text-center text-white">
            <div className="container p-4">
                <section className="social-media mb-4">
                    <a className="linkedin btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/ejackson1228/">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </a>
                    <a className="github btn btn-outline-light btn-floating m-1" href="https://github.com/ejackson1228">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                    <a className="gmail btn btn-outline-light btn-floating m-1" href="https://stackoverflow.com/users/19438705/ejackson1228">
                        <FontAwesomeIcon icon={['fab', 'stack-overflow']} />
                    </a>
                </section>
            </div>
            <div>
                <p>Thank you for visiting my Portfolio Page!</p>
            </div>
        </footer>
    )
}

export default Footer;