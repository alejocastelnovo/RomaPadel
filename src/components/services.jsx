import React, {useRef } from "react";
import "../animations.css";

export const Services = (props) => {
  const titleRef = useRef();
  const cardRefs = useRef([]);



  return (
    <div id="services" className="text-center">
      <div className="container">
        <div ref={titleRef} className="section-title">
          <h2>¿Por qué elegirnos?</h2>
          <p>
            Descubrí las razones que nos hacen únicos
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-md-4"
                  ref={(el) => (cardRefs.current[i] = el)}
                >
                  <div className={`service-card`}>
                    <div className="service-icon">
                      <i className={d.icon}></i>
                    </div>
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                </div>
              ))
            : "Cargando..."
          }
        </div>
      </div>
    </div>
  );
}
