import React from "react";
import Img from "../assets/IMG_5594.jpg";

function About() {
  return (
    <div className=" bg-stone-900 p-5">
      <div className="text-white relative sm:px-20 mt-6 lg:px-36">
        <h3 className="text-4xl font-titleFont font-bold flex justify-start mb-4">
          Hey, I'm Mohammad Saifuddin.
        </h3>
        <p className="text-lg font-semibold mb-6 lg:w-2/3">
          I'm a design-minded, detail oriented software engineer passionate
          about combining beautiful code with beautiful design.
        </p>
        <div className="border-[1px] border-cyan-400 w-36 mb-10"></div>
        <div>
          <img
            className=" w-60 sm:w-96 sm:h-80 rounded-full h-60 flex justify-center items-center mb-4 lg:absolute right-0 md:w-80 md:top-10"
            src={Img}
            alt=""
          />
          <div className=" w-full lg:w-2/3 leading-7">
            <p className=" font-light mb-2">
              I'm a fourth year student at Northeastern University in Boston
              studying computer science and interaction design. I have
              experience developing and designing software for the web, from
              simple landing pages to progressive web applications. I strive to
              create software that not only functions efficiently under the
              hood, but also provides intuitive, pixel-perfect user experiences.
            </p>
            <p className=" font-light mb-2">
              I love learning new and better ways to create seamless user
              experiences with clean, efficient, and scalable code. I consider
              work an ongoing education, and I'm always looking for
              opportunities to work with those who are willing to share their
              knowledge as much as I want to learn. At the end of the day, my
              primary goal is to create something beautiful with people that
              bring out the best in me.
            </p>
            <p>
              When I'm not in front of a computer screen, I'm probably
              snowboarding, traveling, petting dogs, or learning a new song on
              my uke.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
