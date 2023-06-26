import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const footerSocialNets = [
  { route: "https://github.com", icon: faGithub },
  { route: "https://linkedin.com", icon: faLinkedin },
  { route: "https://twitter.com", icon: faTwitter },
  { route: "https://instagram.com", icon: faInstagram },
];

const Footer = () => {
  return (
    <>
      <div className="pt-4">
        <div className="mb-6 flex justify-center">
          {footerSocialNets.map(({ route, icon }) => (
            <a key={route} href={route}>
              <FontAwesomeIcon icon={icon} className="mr-6 h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      <div>
        © 2023 Copyright: PorrasF1
      </div>
    </>
  );
};

export default Footer;
