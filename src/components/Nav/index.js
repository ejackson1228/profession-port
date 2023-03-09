import React from "react";


function Nav(props) {
    const pages = ['About', 'Contact', 'Portfolio', 'Resume'];

    // useEffect(() => {
    //     document.title = currentPage.name;
    // }, [currentPage]);

    return (
      <div className="flex">
        <ul className="flex-row">
        {pages.map((page) => (
          <button
            className={`navigate-items ${props.currentPage === page && 'nav-active'}`}
            key={page}  >
            <span className="gradient-underline"
              onClick={() => {
                props.setCurrentPage(page);
              }}    >
             {page} 
            </span>
          </button>
        ))}
        </ul>
      </div>
    );
};

export default Nav;
