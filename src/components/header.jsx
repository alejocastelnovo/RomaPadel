import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1 className="cursive-title">
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#about"
                  className="btn btn-custom btn-lg slideDown" >Ver mas!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
