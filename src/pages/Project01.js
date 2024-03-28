
import React from "react";
import "../styles/styles.css";

export default function Project01(){
    return(
        <>
         <section className="intro" id="">
        <h1 className="section__title section__title--intro project__intro">
            Rick & Morty<strong>Space Invaders</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">Vanilla JavaScript Game</p>
        <img src="/img/projectImg/project01.jpg" alt="" className="intro__img" />
    </section>

    <div className="portfolio-item-individual">
        <p>Embark on a cosmic adventure with the Intergalactic Showdown, a Rick 
            and Morty-themed Space Invaders game that merges the classic arcade experience 
            with the quirky universe of the beloved animated series. Developed using pure 
            Vanilla JavaScript, this game is a testament to the power of fundamental web 
            technologies.</p>

            <a href="https://rick-and-morty-js-game.netlify.app/" className="rick__vid--click" target="_blank" rel="noopener noreferrer">
                {/* <video autoPlay loop muted style={{ width: '100%', height: 'auto' }}>
                    <source src="/public/videos/rickGame.mp4" type="video/mp4" />
                </video> */}
                <img src="/img/projectImg/project01-2.jpg" alt=''  />
            </a>

        <a href="https://rick-and-morty-js-game.netlify.app/" className="btn" target="_blank" rel="noopener noreferrer">Try Me</a>

        <h3>Development Process:</h3>
        <p>Crafted meticulously with HTML5, CSS3, and Vanilla JavaScript, the game 
            showcases animated sprites of iconic characters and enemies that players 
            must outmaneuver and defeat. The layout was structured in HTML, styled for 
            the galactic theme with CSS, and brought to life with JavaScript, demonstrating 
            collision detection, score tracking, and responsive controls. No libraries or 
            frameworks were used, which challenged me to deeply understand and implement core 
            programming logic and DOM manipulation.</p>

        <h3>Learning Experience:</h3>
        <p>This project honed my problem-solving skills and solidified my understanding 
            of JavaScript event handling, allowing me to create an engaging user experience 
            through interactive gameplay. I delved into the realms of game loops, animation 
            frames, and audio integration, pushing the boundaries of what can be achieved 
            without external plugins.</p>

        <h3>Insights:</h3>
        <p>The development of Intergalactic Showdown was a journey in appreciating the 
            importance of clean, organized code, and the value of comments and documentation 
            for future maintenance and scalability.This project sharpened my abilities to translate 
            a concept into a fully functional application and underscored the endless 
            possibilities of creative coding.</p>
    </div>
        </>
    )
}