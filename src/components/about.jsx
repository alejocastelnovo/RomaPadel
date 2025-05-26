import React, { useEffect, useRef } from "react";
import "../animations.css";

export const About = (props) => {
  const imgRef = useRef();
  const textRef = useRef();
  const reviewsRef = useRef();

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
    if (reviewsRef.current) observer.observe(reviewsRef.current);

    return () => {
      if (imgRef.current) observer.unobserve(imgRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
      if (reviewsRef.current) observer.unobserve(reviewsRef.current);
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

        {/* Sección de reseñas de Google */}
        <div className="row">
          <div className="col-xs-12">
            <div ref={reviewsRef} className="google-reviews fade-in-up delay-350">
            <h2>Reseñas de Google</h2> 
              <iframe 
                src="https://widgets.sociablekit.com/google-reviews/iframe/25560866" 
                frameBorder="0" 
                width="100%" 
                height="500"
                title="Google Reviews"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}