import React from "react";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="content">
          <h1>N'hésitez pas à me contacter !</h1>
          <h2>
            {" "}
            lamagnere.quentin@gmail.com
            <br /> Téléphone pro: 0635402450
          </h2>

          <div className="socialNetwork">
            <ul>
              <li>
                <a
                  href="https://fr.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"> </i>
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-discord"> </i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/?lang=fr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"> </i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"> </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
