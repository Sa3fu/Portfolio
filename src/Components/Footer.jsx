import React from "react";
import instaicon from "../assets/Icons/instagram-white-icon.png";
import linkedin from "../assets/Icons/—Pngtree—white linkedin icon png_3562068.png";
import github from "../assets/kisspng-github-pages-logo-repository-fork-github-logo-1-magentys-5b69de71b51265.8586076615336648817417.png";

function Footer() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-700">
      <div className="p-9">
        <ul className="flex justify-center items-center gap-8 mb-4">
          <li>
            <a href="https://www.linkedin.com/in/m-saifuddin-057796221/">
              <img className="w-10" src={linkedin} alt="linkedin" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Sa3fu">
              <img className="w-8" src={github} alt="github" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/sa_3fu/">
              <img className="w-8" src={instaicon} alt="linkedin" />
            </a>
          </li>
        </ul>
        <div className="flex relative justify-center items-start bottom-0">
          <p className="text-white font-medium text-xl">
            &#169; <sapn className="text-base">Mohammad Saifuddin 2024</sapn>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
