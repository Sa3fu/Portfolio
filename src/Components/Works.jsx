import React from "react";
import { someofwork } from "./index";
import gitlogo from "../assets/kisspng-github-pages-logo-repository-fork-github-logo-1-magentys-5b69de71b51265.8586076615336648817417.png";
import { SparklesCore } from "../ui/sparkles";

function Works() {
  return (
    <div className="relative bg-stone-900">
      <div className="w-full absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage-works"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="text-white p-5 md:px-20 lg:px-36 z-10">
        <h1 className="font-titleFont text-4xl mb-5 font-medium mt-5">
          Some of My Works
        </h1>

        {someofwork.map((item) => (
          <div key={item._id} className="mt-12">
            <div className="border-[1px] border-cyan-400 w-36 -mt-6 mb-10"></div>
            <img
              className="w-60 mb-4 lg:w-96 xl:w-2/3 sm:mb-6"
              src={item.img}
              alt={item.title}
            />
            <div className="sm:flex sm:justify-between sm:items-center">
              <h2 className="font-titleFont font-medium text-2xl mb-3">
                {item.title}
              </h2>
              <div className="flex gap-4 text-cyan-300 mb-7">
                <a
                  className=" border-2 border-cyan-500 p-1 px-3 hover:bg-cyan-500 rounded-sm  hover:text-white z-10"
                  href={item.code}
                >
                  {item.textcode}
                </a>
                <a
                  className=" border-2 border-cyan-500 p-1 px-3 hover:bg-cyan-500 rounded-sm  hover:text-white z-10"
                  href={item.demo}
                >
                  {item.textdemo}
                </a>
              </div>
            </div>
            <p className=" text-base text-stone-400 mb-3">{item.discription}</p>
            <div className="text-sm text-stone-400 flex flex-wrap gap-3 mb-7">
              {item.technologystack.map((items, index) => (
                <span key={index} className="bg-stone-700 p-1 px-2 rounded-sm">
                  {items}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <a className="logo" href="https://github.com/Sa3fu?tab=repositories">
        <span className="logo__text">SEE MORE PROJECTS</span>
        <span className="logo__image">
          <img className="w-10" src={gitlogo} />
        </span>
      </a>
    </div>
  );
}
export default Works;
