export default function About(){
    return(
        <>
            <section className="about-me" id="about">
        <h2 className="section__title section__title--about">About Me</h2>
        <p className="section__subtitle section__subtitle--about">Designer & Developer based out of Toronto</p>

        <div className="about-me__body">
            <p>With more than ten years in customer service, I'm not just a front-end web developer; 
                I'm your go-to girl for creating websites that people actually enjoy using. My knack for 
                understanding users' needs comes from a background of making customers happy, and I bring 
                that same vibe to my web projects. </p>
            <p>Let's team up to build sites that not only look cool 
                but also feel like a friendly conversation – because a great user experience is the best 
                kind of customer service!</p>
        </div>

        <img src="img/full-body1.png" alt="pixar style shanelle standing" className="about-me__img" />
    </section>
        </>
    )
}