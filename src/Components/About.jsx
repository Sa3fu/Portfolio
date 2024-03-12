import React from "react";
import Img from "../assets/IMG_5594.jpg";

function About() {
  return (
    <div className=" bg-stone-900">
      <div className="text-white p-10 sm:px-40 relative">
        <h3 className="text-4xl font-titleFont font-bold flex justify-start mb-4">
          Hey, I'm Mohammad Saifuddin.
        </h3>
        <p className="text-lg font-semibold mb-6">
          I'm a design-minded, detail oriented software engineer passionate
          about combining beautiful code with beautiful design.
        </p>
        <div className="border-[1px] border-cyan-400 w-36 mb-10"></div>
        <div>
          <img
            className=" w-96 rounded-full h-80 flex justify-center items-center mb-4"
            src={Img}
            alt=""
          />
          <div>
            <p className="text-normal">
              I'm a fourth year student at Northeastern University in Boston
              studying computer science and interaction design. I have
              experience developing and designing software for the web, from
              simple landing pages to progressive web applications. I strive to
              create software that not only functions efficiently under the
              hood, but also provides intuitive, pixel-perfect user experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
