import React from "react";
import BgImg from "../assets/dawid-liberadzki-vPFbVB7DPZI-unsplash.jpg";

function Whatido() {
  return (
    <div className="relative">
      {/* Black overlay with opacity */}
      <div className="absolute inset-0 bg-black opacity-25"></div>

      {/* Background image */}
      <div
        className="text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="relative p-5">
          <div className="mt-5">
            <h1 className="font-titleFont text-4xl font-medium mb-5">
              What I Do
            </h1>
            <div className="border-[1px] border-cyan-400 w-36 mb-10"></div>
            <div>
              <div>
                <div className="flex gap-2 mb-3 items-center">
                  <span>
                    <img
                      className="w-6"
                      src="https://www.svgrepo.com/show/1699/web-development.svg"
                      alt=""
                    />
                  </span>
                  <h3 className="font-tilteFont text-lg text-semibold">WEB DEVELOPMENT</h3>
                </div>
                <p className="text-base">
                  Using HTML, CSS, and JavaScript with pre-processors and build
                  tools such as Sass and Grunt, I have a passion for developing
                  pixel-perfect websites and apps while maintaining a semantic,
                  modular, and DRY code base.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whatido;
