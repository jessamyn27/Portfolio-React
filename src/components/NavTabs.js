import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <main className={"main-container"}>
    <ul className={"nav nav-tabs"}>
      <li className={"nav-item"}>

      <a href="#home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}><i className="material-icons"></i><span className="first-letter">b</span>io</a>
        
      </li>
      <li className={"nav-item"}>

      <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}><i className="material-icons" ></i><span className="first-letter">w</span>ork</a>
  
      </li>
      <li className={"nav-item"}>

      <a href="#blog" onClick={() => handlePageChange('Blog')} className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}><i className="material-icons"></i><span className="first-letter">c</span>ontact</a>

      </li>
      <li className={"nav-item"}>
      
      <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}><i className="material-icons"></i><span className="first-letter">r</span>esume</a>

      </li>
    </ul>
    </main>
  );
}

export default NavTabs;
