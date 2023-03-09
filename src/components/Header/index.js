import React, { useState } from "react";
import Nav from "../Nav";
import About from "../About";
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Resume from "../Resume";

function Header() {
    const [currentPage, setCurrentPage] = useState('About');

    const switchPage = () => {
        switch (currentPage) {
            case 'About':
                return <About />;
            case 'Contact':
                return <Contact />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Resume':
                return <Resume />;

            default:
                return <About />;
        }
    };

    return(
    <div>
        <div className="navbar navbar-expand-xlg navbar-light app-header">
            <h3 className="heading" onClick={() => window.location.reload()}>Elijah Jackson, <span className="header-span">Jr. Web Developer 🖥️</span></h3>
            <Nav
            currentPage = {currentPage}
            setCurrentPage = {setCurrentPage}
            />
        </div>
        <main className="root-page">
            <div>{switchPage(currentPage)}</div>
        </main>
    </div>
    );
};


export default Header;