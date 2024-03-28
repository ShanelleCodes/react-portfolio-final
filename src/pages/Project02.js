
import React from "react";

export default function Project02(){
    return(
        <>
        <section className="intro" id="">
        <h1 className="section__title section__title--intro">
            E-Commerce<strong>My Tunes</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">ASP.Net Core 8 MVC</p>
        <img src="/img/projectImg/project02.jpg" alt="" className="intro__img" />
    </section>
 

    <div className="portfolio-item-individual">
        <p>My Tunes is an e-commerce platform crafted meticulously for music lovers and collectors. 
            It serves as a one-stop digital storefront where users can browse, sample, and purchase 
            a diverse collection of musical tracks and albums. This project represents the confluence 
            of my passion for music with my skills in modern web development.</p>

            <h4>Take a look at the following Demo's of my project.</h4>
        
           
            <iframe
            src="https://www.youtube.com/embed/j-KSKD6nqnQ?si=g_EAZQ8V9urVo9ym?autoplay=1&mute=1" allowfullscreen>
            </iframe>
            <iframe
            src="https://youtube.com/embed/sZj1wF4brg0?si=FEEN2XsH05MaO_HY?autoplay=1&mute=1" allowfullscreen>
            </iframe>


        <h3>Development Process:</h3>
        <p>Leveraging the robust capabilities of ASP.NET Core 8 MVC, My Tunes was developed using Visual 
            Studio Community as the integrated development environment. The MVC architecture allowed me to 
            create a clear separation of concerns, making the website scalable and maintainable. Entity 
            Framework Core was utilized for ORM, aiding in the efficient manipulation and retrieval of data 
            from the SQL database, while Razor views facilitated the dynamic rendering of the HTML. Bootstrap 
            was incorporated for responsive design, ensuring a seamless user experience across various devices.</p>

        <h3>Learning Experience:</h3>
        <p>Throughout the development process, I gained a deeper understanding of RESTful service architecture, 
            as I implemented API endpoints for the music catalog. I honed my skills in both client-side and server-side 
            validation to ensure data integrity and security. Asynchronous programming in C# was employed to enhance 
            site performance and responsiveness. Additionally, I developed a proficiency in user authentication and 
            authorization, securing user transactions and data.</p>

        <h3>Insights:</h3>
        <p>Building My Tunes provided me with invaluable insights into the

            complexities of e-commerce systems. One key takeaway was the importance of creating a user-centric design; 
            it's not just about listing products, but also about crafting an engaging and intuitive user journey.
            
            Another focal point was the need for a third-party checkout. I learned to implement secure payment 
            processing with appropriate encryption and data protection standards, ensuring that user transactions 
            were safe and reliable. </p>

            <p>In conclusion, MyTunes was not just a development project but a comprehensive learning experience 
            that enhanced my technical skills and deepened my understanding of creating functional, user-friendly 
            e-commerce platforms. It solidified my foundation in ASP.NET Core development and prepared me for 
            tackling more complex web applications in the future.</p>
    </div>
        </>
    )
}