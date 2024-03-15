import React from "react";
import BgImg from "../assets/dawid-liberadzki-vPFbVB7DPZI-unsplash.jpg";
import Webdevpng from "../assets/webdev.png";

function Whatido() {
  return (
    <div className="relative">
      {/* Black overlay with opacity */}
      <div className="absolute inset-0 bg-black opacity-45"></div>

      {/* Background image */}
      <div
        className="text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="relative sm:px-20 sm:pt-5 p-5 lg:px-40">
          <div className="mt-5">
            <h1 className="font-titleFont text-4xl font-medium mb-5">
              What I Do
            </h1>
            <div className="border-[1px] border-cyan-400 w-36 mb-10"></div>
            <div className="sm:container sm:grid sm:grid-cols-2 sm:p-18 gap-10 lg:gap-10">
              <div className="mb-9 sm:mb-0 ">
                <div className="flex gap-2 mb-3 items-center">
                  <span>
                    <img className="w-6" src={Webdevpng} alt="" />
                  </span>
                  <h3 className="font-tilteFont text-lg text-semibold">
                    WEB DEVELOPMENT
                  </h3>
                </div>
                <p className="text-base ">
                  Using HTML, CSS, and JavaScript with pre-processors and build
                  tools such as Sass and Grunt, I have a passion for developing
                  pixel-perfect websites and apps while maintaining a semantic,
                  modular, and DRY code base.
                </p>
              </div>
              <div className="mb-9 sm:mb-0">
                <div className="flex gap-2 mb-3 items-center">
                  <span>
                    <img
                      className="w-6"
                      src="https://cdn3d.iconscout.com/3d/premium/thumb/responsive-web-design-10435541-8411732.png?f=webp"
                      alt=""
                    />
                  </span>
                  <h3 className="font-tilteFont text-lg text-semibold">
                    RESPONSIVE UI DESIGN
                  </h3>
                </div>
                <p className="text-base ">
                  "A user interface is like a joke. If you have to explain it,
                  it's not that good." I strive to develop and implement
                  responsive and aesthetically pleasing interfaces for websites
                  and apps that adapt to any type of device, platform, or
                  browser.
                </p>
              </div>
              <div className="mb-9">
                <div className="flex gap-2 mb-3 items-center">
                  <span>
                    <img
                      className="w-6"
                      src="https://cdn3d.iconscout.com/3d/premium/thumb/responsive-web-design-10435541-8411732.png?f=webp"
                      alt=""
                    />
                  </span>
                  <h3 className="font-tilteFont text-lg text-semibold">
                    RESPONSIVE UI DESIGN
                  </h3>
                </div>
                <p className="text-base ">
                  "A user interface is like a joke. If you have to explain it,
                  it's not that good." I strive to develop and implement
                  responsive and aesthetically pleasing interfaces for websites
                  and apps that adapt to any type of device, platform, or
                  browser.
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
