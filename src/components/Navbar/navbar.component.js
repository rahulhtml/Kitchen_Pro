import React from "react";
import "./navbar.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faPinterest, faDribbble } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
    return (
      <nav className="sticky-nav">
        <h3 className="brand-name">kitchen pro ✔</h3>
        <ul className="main-nav">
          <li>
            <FontAwesomeIcon icon={faFacebook} />
          </li>
          <li>
            <FontAwesomeIcon button component="a" href="https://www.google.com" icon={faInstagram} />

          </li>
          <li>
            <FontAwesomeIcon icon={faPinterest} />
          </li>
          <li>
            <FontAwesomeIcon icon={faDribbble} />
          </li>
        </ul>
      </nav>
    );
}

export default Navbar;