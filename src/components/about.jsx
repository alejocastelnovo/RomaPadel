import React, { useEffect, useRef } from "react";
import "../animations.css";

export const About = (props) => {
  const imgRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (imgRef.current) observer.unobserve(imgRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div ref={imgRef} className="fade-in-up">
              <img src="img/about.jpg" className="img-responsive" alt="Roma Padel" />
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div ref={textRef} className="about-text fade-in-up delay-300">
              <h2>Sobre Nosotros</h2>
              <p className="about-paragraph">
                {props.data ? props.data.paragraph : "loading..."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}