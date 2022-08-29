import React from "react";
// import { Link } from "react-router-dom";
import { BsInstagram, BsGithub } from "react-icons/bs";
// import { GiDjinn } from "react-icons/gi";
import { FaTelegramPlane, FaLinkedin, FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://t.me/Savantess" target="_blank">
          <FaTelegramPlane onClick="" />
        </a>
      </div>
      <div>
        <a href="https://github.com/Orsten" target="_blank">
          <BsGithub />
        </a>
      </div>
      {/* <div>
        <a
          href="https://www.linkedin.com/in/andrey-tkachenko-56045992/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div> */}
      <div>
        <a href="https://www.facebook.com/orsten.forever" target="_blank">
          <FaFacebookF />
        </a>
      </div>
      {/* <div>
        <a href="https://www.instagram.com/savantess/" target="_blank">
          <BsInstagram />
        </a>
      </div> */}
    </div>
  );
};

export default SocialMedia;
