import React from "react";
import settingsImg from "../assets/settingsImg.png";
import { design, tools, webDevelopment } from "../Components/index";
import webDev from "../assets/webdev.png";
import Tools from "../assets/Tools.png";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";


function Skills() {
  return (
    <div className="bg-stone-900 p-5 relative md:px-20 lg:px-40">
        
      <h1 className="text-4xl text-white font-medium mb-5 font-titleFont">
        Skills
      </h1>
      <div className="border-[1px] border-cyan-400 w-36 mb-10"></div>

      <div className="mb-10 lg:w-72 md:w-72">
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

      <div className="mb-10 md:absolute md:top-32 md:right-28 lg:right-40">
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

      <div className="mb-6 md:absolute md:top-80 md:right-32 lg:right-44">
        <h2 className="flex items-center gap-3 mb-5">
          <span>
            <img src={Tools} alt="" className="w-9" />
          </span>
          <span className="text-white text-xl font-medium">Tools</span>
        </h2>
        <ul className="text-white flex flex-col gap-2">
          {tools.map((items) => (
            <li key={items._id} className=" font-light">
              <span className="mx-4">
                <CheckOutlinedIcon sx={{ fontSize: "16px" }} />
              </span>
              {items.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
