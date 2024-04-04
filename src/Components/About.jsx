import React from "react";
import Img from "../assets/IMG_5594.jpg";
import { BackgroundBeams } from "../ui/background-beams";

function About() {
  return (
    <div className="relative bg-stone-900 p-5">
      <BackgroundBeams />
      <div className="text-white relative sm:px-20 mt-6 lg:px-36">
        <h3 className="text-4xl font-titleFont font-bold flex justify-start mb-4">
          Hey, I'm Mohammad Saifuddin.
        </h3>
        <p className="text-lg font-semibold mb-6 lg:w-2/3 leading-8">
          I'm a design-minded, detail oriented software engineer passionate
          about combining beautiful code with beautiful design.
        </p>
        <div className="border-[1px] border-cyan-400 w-36 mb-10"></div>
        <div>
          <div className=" w-60 sm:w-96 sm:h-80 rounded-full h-60 overflow-hidden flex justify-center items-center mb-4 lg:absolute right-0 md:w-80 md:top-10">
            <img
              className="w-full h-full object-cover"
              src={Img}
              alt="Image1"
            />
          </div>
        </div>
        <div className=" w-full lg:w-2/3 leading-7">
          <p className=" font-normal mb-2">
            I graduated from LBS College of Engineering, Kasaragod, with a
            Bachelor of Technology in Computer Science and Engineering in 2023.
            There, I developed a thorough understanding of a variety of areas,
            including system software and formal languages. I became proficient
            in machine learning and artificial intelligence (AI) principles
            during my college years, in addition to programming languages like
            C, C++, Java, and Python. I used Express, Node.js, MongoDB, and
            React.js to create a Rental Car Management system for my small
            project. My main research also used AI and machine learning to
            identify eye disorders.
          </p>
          <p className=" font-normal mb-2">
            At Appmocx, I am employed full-time as a software engineer. I helped
            design a web application using Angular, NestJS, and low-code
            technology while I was employed in this capacity. Data is shown in
            the user interface through an easy integration between the program
            and SAP. My contribution was significant in enabling buyers to
            choose their preferred vendors by easing the order placement and bid
            submission process for technical and commercial goods. To help
            buyers select the best bid pricing, I also added bid management
            features for sellers. I also included capabilities for tracking
            shipment information and provided a range of customizable payment
            choices, such as one-time or monthly installments.
          </p>
          <p className=" font-normal mb-2">
            <span className="font-bold">
              When I'm not in front of a computer screen,
            </span>{" "}
            I'm probably Gaming, traveling, petting cats, learning a new song or
            learning new programming language or trying something new .
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
