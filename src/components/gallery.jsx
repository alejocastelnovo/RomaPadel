import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Galería</h2>
          <p>Explora nuestras fotos y videos destacados.</p>
        </div>
        <div className="row">


          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-sm-6 col-md-4 col-lg-4"
                >
                  <Image
                    title={d.title}
                    smallImage={d.smallImage}
                  />
                </div>
              ))
              : "Loading..."}
          </div>
          <div className="col-md-4">
            <div className="portfolio-item">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};