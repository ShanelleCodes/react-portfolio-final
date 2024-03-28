import React from "react";
import { Link } from 'react-router-dom';

export default function Projects(){
    return(
        <> 
        <section className="projects" id="projects">
        <h2 className="section__title">My Projects</h2>
        <p className="section__subtitle section__subtitle--projects">A selection of my range of work</p>

        <div className="portfolio">
          
            <Link to="/project01" className="portfolio__item">
                <img src="img/projectImg/project01.jpg" alt="" className="portfolio__img" />
            </Link>
            
            <Link to="/project02" className="portfolio__item">
                <img src="/img/projectImg/project02.jpg" alt="" className="portfolio__img" />
            </Link>
           
            <Link to="/graphicdesign" className="portfolio__item" hidden >
                <img src="/img/projectImg/graphic-design.jpg" alt="" className="portfolio__img" />
            </Link>
            
            <Link to="/project01" className="portfolio__item" hidden>
                <img src="/img/projectImg/project03.jpg" alt="" className="portfolio__img" />
            </Link>
            
            <Link to="/project01" className="portfolio__item" hidden>
                <img src="/img/projectImg/project-img.jpg" alt="" className="portfolio__img" />
            </Link>
            
            <Link to="/project01" className="portfolio__item" hidden>
                <img src="/img/projectImg/project-img.jpg" alt="" className="portfolio__img" />
            </Link>           
 
        </div>
    </section>
    
        </>
    )
}