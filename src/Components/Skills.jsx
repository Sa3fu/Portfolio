import React from "react";
import settingsImg from "../assets/settingsImg.png";
import { design, webDevelopment } from "../Components/index";
import webDev from "../assets/webdev.png";

function Skills() {
  return (
    <div className="bg-stone-900 p-5">
      <h1 className="text-4xl text-white font-medium mb-5 font-titleFont">
        Skills
      </h1>
      <div className="border-[1px] border-cyan-400 w-36 mb-10"></div>
      
      <div className="mb-6">
        <h2 className="flex items-center gap-3 mb-4">
          <span>
            <img src={settingsImg} alt="" className="w-9" />
          </span>
          <span className="text-white text-xl font-medium">DEVELOPMENT</span>
        </h2>
        <ul className="text-white grid grid-cols-3 gap-2 items-center text-xs">
          {webDevelopment.map((item) => (
            <li
              key={item._id}
              className="border-[.5px] rounded-full p-5 flex items-center justify-center w-20 h-20 border-slate-600"
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mb-6">
        <h2 className="flex items-center gap-3 mb-5">
          <span>
            <img src={webDev} alt="" className="w-9" />
          </span>
          <span className="text-white text-xl font-medium">DESIGN</span>
        </h2>
        <ul className="grid grid-cols-3 gap-3 w-52">
          {design.map((item) => (
            <li key={item._id} className="w-10">
              <img src={item.img} alt={item.text} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
