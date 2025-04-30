import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "./image";

export const Gallery = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '60px',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '30px',
        },
      },
    ],
  };

  return (
    <div id="portfolio" className="gallery-section">
      <div className="container">
        <div className="section-title text-center">
          <h2>Galería</h2>
          <p className="section-description">Explora nuestras fotos y videos destacados.</p>
        </div>

        <div className="gallery-container">
          {props.data ? (
            <div className="slider-wrapper">
              <Slider {...settings}>
                {props.data.map((d, i) => (
                  <div key={`${d.title}-${i}`} className="gallery-item">
                    <div className="image-wrapper">
                      <Image title={d.title} smallImage={d.smallImage} />
                      <div className="image-overlay">
                        <h3>{d.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            <div className="loading">Cargando galería...</div>
          )}
        </div>

        <div className="gallery-footer">
          <a
            href=" // aca va el link del drive "
            className="btn btn-custom btn-lg gallery-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Galería Completa
          </a>
        </div>
      </div>
    </div>
  );
};