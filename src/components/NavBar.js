import React, { useState } from 'react';
import "../styles/navbar.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';


export default function NavBar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const navigate = useNavigate(); // Hook to navigate

    const closeNavbar = () => {
        setIsNavExpanded(false);
      };

    const location = useLocation();

    const isProjectPage = ["/project01", "/project02", "/graphicdesign"].includes(location.pathname);

    const handleLogoClick = () => {
        // If on the homepage, scroll to the top
        if (location.pathname === '/home') {
          window.scrollTo(0, 0);
        } else {
          // If on any other page, navigate to the homepage
          navigate('/home');
        }
        closeNavbar();
      };

  return (
    <nav className={`navbar ${isNavExpanded ? "expanded" : ""}`}>
    <button
        className="hamburger"
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
 
    <div className="logo">
            {/* <a href="#home" className="nav__link"><img src="img/logoBlack.png" alt="" /></a> */}
            <img src="/img/logoBlack.png" alt="" className="nav__link" onClick={handleLogoClick} />
    </div>

    <div className={`links ${isNavExpanded ? "expanded" : ""}`}>
        <Link to='/home' onClick={closeNavbar} >Home</Link>
        {!isProjectPage && (
            <>
            <a href="#skills" onClick={closeNavbar} className="nav_link">Skills</a>
        <a href="#about" onClick={closeNavbar} className="nav_link">About Me</a>
        <a href="#projects" onClick={closeNavbar} className="nav_link">Projects</a>
        <a href="#tutorials" onClick={closeNavbar} className="nav_link">Tutorials</a>
        <div className='nav-social'>
                <a className="socail-list__link" target="_blank" rel="noopener noreferrer"
                href="https://www.youtube.com/channel/UCpabSA4KaybPjoxM2b_xAFQ">
                <i className="fa-brands fa-youtube"></i></a>

                <a className="socail-list__link" target="_blank" rel="noopener noreferrer"
                href="https://github.com/ShanelleCodes">
                <i className="fa-brands fa-github"></i></a>

                <a className="socail-list__link" target="_blank" rel="noopener noreferrer"
                href="https://www.linkedin.com/in/shanelle-haye/">
                <i className="fa-brands fa-linkedin"></i></a>
                </div>
            </>
        )}
    </div>
   </nav>
  )
}

