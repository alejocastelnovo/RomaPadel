import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "./image";

export const Gallery = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Galería</h2>
          <p>Explora nuestras fotos y videos destacados.</p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data ? (
              <Slider {...settings}>
                {props.data.map((d, i) => (
                  <div key={`${d.title}-${i}`}>
                    <Image title={d.title} smallImage={d.smallImage} />
                  </div>
                ))}
              </Slider>
            ) : (
              "Loading..."
            )}
          </div>
        </div>
      </div>
    </div>
  );
};