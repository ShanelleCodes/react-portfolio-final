
import React, { useState } from 'react';

const images = [
    {
      src: "/public/img/gallery/photoshop-and-illustrator/eazyt-logo-3.png",
      alt: "",
      category: "adobe",
      caption: "Logo desgined using Photoshop"
    },
    {
      src: "/public/img/gallery/photoshop-and-illustrator/eazyt-logo01.png.png",
      alt: "",
      category: "adobe",
      caption: "Logo desgined using Photoshop"
    },
    {
      src: "/public/img/gallery/photoshop-and-illustrator/erykah-print.jpeg.png",
      alt: "",
      category: "adobe",
      caption: "Art print created using Photoshop"
    },
    {
      src: "/public/img/gallery/photoshop-and-illustrator/glam-logo.png.png",
      alt: "",
      category: "adobe",
      caption: "Logo designed with Illustrator"
    },
   
    {
      src: "/public/img/gallery/canva/253-flyer-01.png",
      alt: "",
      category: "canva",
      caption: "Promotional Flyer for local business"
    },
    {
      src: "/public/img/gallery/canva/llu-flyer-03.png.png",
      alt: "",
      category: "canva",
      caption: "Promotional Flyer for local business"
    },
    {
      src: "/public/img/gallery/canva/pp-flyer-01.png.png",
      alt: "",
      category: "canva",
      caption: "Promotional Flyer for local business"
    },
    {
      src: "/public/img/gallery/canva/pp-flyer-03.png.png",
      alt: "",
      category: "canva",
      caption: "Promotional Flyer for local business"
    },

    {
      src: "/public/img/gallery/prototype-and-wire fram/android-wireframe-01.png",
      alt: "",
      category: "prototype",
      caption: "Wireframe for Android App 1/2"
    },
    {
      src: "/public/img/gallery/prototype-and-wire fram/android-wireframe-02.png.png",
      alt: "",
      category: "prototype",
      caption: "Wireframe for Android App 1/2"
    },
  ];


export default function GraphicDesign(){

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  const handleImageClick = (image) => {
    setLightboxImage(image);
  };

  const categories = [...new Set(images.map((img) => img.category)), 'all'];
    
    return(
        <>
        <section className="intro" id="">
        <h1 className="section__title section__title--intro">
            Graphic Design<strong>Gallery</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">A collection of digital artwork</p>
        <img src="/img/projectImg/graphic-design.jpg" alt="" className="intro__img" />
    </section>

    <div className="image-filters">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="gallery">
        {images
          .filter((img) => selectedCategory === 'all' || img.category === selectedCategory)
          .map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              onClick={() => handleImageClick(image)}
            />
          ))}
      </div>
      {lightboxImage && (
        <div className="lightbox">
          <img src={lightboxImage.src} alt={lightboxImage.alt} />
          <p>{lightboxImage.caption}</p>
          <button onClick={() => setLightboxImage(null)}>Close</button>
        </div>
      )}

        </>
    )
}