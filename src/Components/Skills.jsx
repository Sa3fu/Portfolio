import React from "react";
import settingsImg from "../assets/settingsImg.png";

function Skills() {
  return (
    <div className="bg-stone-900 p-5">
      <h1 className="text-4xl text-white font-medium mb-5 font-titleFont">Skills</h1>
      <div className="border-[1px] border-cyan-400 w-36 mb-10"></div>
      <div>
        <h2 className="flex items-center gap-3">
          <span>
            <img src={settingsImg} alt="" className="w-9" />
          </span>
          <span className="text-white text-xl font-medium">DEVELOPMENT</span>
        </h2>
      </div>
    </div>
  );
}

export default Skills;
