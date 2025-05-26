import React from "react";
import { WhatsAppButton } from "./WhatsAppButton";

export const Contact = (props) => {
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Contactanos</h2>
                <p>
                  ¡Hacé click en el botón de WhatsApp para reservar tu turno!
                </p>
              </div>
              <WhatsAppButton />
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Información de Contacto</h3>

            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Celular
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Mail
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
            <p>
                <span>
                  <i className="fa fa-map-marker"></i> Dirección
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.876524407426!2d-60.95266072362582!3d-31.964246322951073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5bf002c735045%3A0x923d66c375179033!2sRoma%20Padel%20Coronda!5e0!3m2!1ses!2sar!4v1748283109161!5m2!1ses!2sar" 
                width="100%"
                height="200"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.instagram : "/"}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2025{" "}
            <a href="https://portfolio-react-nu-weld.vercel.app/" rel="nofollow">
              Desarrollo pagina Web
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};