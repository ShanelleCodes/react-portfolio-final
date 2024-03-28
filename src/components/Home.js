import { useEffect } from "react";

export default function Home(){
    useEffect(() => {
        const hash = window.location.hash;
        if (hash){
            const section = document.querySelector(hash);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    return(
        <>

    <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
            Hi, I'm <strong>Shanelle Haye</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">Front-End Dev</p>
        <img src="img/ProfileImg.jpg" alt="Shanelle Haye smiling" className="intro__img" />
    </section>

        </>
    )
}