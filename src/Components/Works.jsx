import React from "react";
import { someofwork } from "./index";

function Works() {
  return (
    <div className="bg-stone-900">
      <div className="text-white p-5 md:px-20 lg:px-36 ">
        <h1 className="font-titleFont text-4xl mb-5 font-medium mt-5">
          Some of My Works
        </h1>
        <div className="border-[1px] border-cyan-400 w-36 mb-10"></div>
        {someofwork.map((item) => (
          <div key={item._id}>
            <img className="w-60 mb-4 lg:w-96" src={item.img} alt={item.title} />
            <h2 className="font-titleFont font-medium text-2xl mb-3">
              {item.title}
            </h2>
            <div className="flex gap-4 text-cyan-400 mb-7">
              <button className=" border-2 border-cyan-300 p-1 px-3 hover:border-cyan-500 rounded-sm">
                {item.textcode}
              </button>
              <button className=" border-2 border-cyan-300 p-1 px-3 hover:border-cyan-500 rounded-sm">
                {item.textdemo}
              </button>
            </div>
            <p className=" text-base text-stone-400 mb-3">{item.discription}</p>
            <div className="text-sm text-stone-400 flex flex-wrap gap-3 mb-7">
              {item.technologystack.map((items, index) => (
                <span key={index} className="bg-stone-700 p-1 px-2 rounded-sm">
                  {items}
                </span>
              ))}
            </div>
            <div className="border-[1px] border-cyan-400 w-36"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Works;
