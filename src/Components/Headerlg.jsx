import React from "react";

function Headerlg({ home, about, whatido, skills, experience, works, form }) {
  function isActive(ref) {
    if (ref && ref.current) {
      return window.location.hash === ref.current.id;
    }
    return false;
  }

  return (
    <div className="hidden lg:block relative">
      <div className="fixed top-1/2 z-10 transform -translate-y-1/2 right-4">
        <ul className=" gap-4 flex flex-col text-base text-white cursor-pointer">
          <li
            className="p-3 flex gap-4 justify-center items-center relative"
            onClick={() => home.current.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="hidden absolute right-12 top-0 w-full h-full items-center justify-center">
              Intro
            </span>
            <span
              className={`absolute left-3  rounded-full w-3 h-3 ${
                isActive(home) ? "bg-cyan-400" : "bg-slate-600"
              }`}
            ></span>
          </li>

          <li
            className="p-3 flex gap-4 justify-center items-center relative"
            onClick={() => about.current.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="hidden absolute right-12 top-0 w-full h-full  items-center justify-center">
              About
            </span>
            <span
              className={`absolute left-3 bg-slate-600 rounded-full w-3 h-3 ${
                isActive(about) ? "bg-cyan-400" : "bg-slate-600"
              }`}
            ></span>
          </li>

          <li
            className="p-3 flex gap-4 justify-center items-center relative"
            onClick={() =>
              whatido.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="hidden absolute right-4 top-0 w-20 h-full items-center justify-center">
              What I Do
            </span>
            <span
              className={`absolute left-3 bg-slate-600 rounded-full w-3 h-3 ${
                isActive(about) ? "bg-cyan-400" : "bg-slate-600"
              }`}
            ></span>
          </li>

          <li
            className="p-3 flex gap-4 justify-center items-center relative"
            onClick={() =>
              skills.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="hidden absolute right-12 top-0 w-full h-full  items-center justify-center">
              Skills
            </span>
            <span
              className={`absolute left-3 bg-slate-600 rounded-full w-3 h-3 ${
                isActive(about) ? "bg-cyan-400" : "bg-slate-600"
              }`}
            ></span>
          </li>

          <li
            className="p-3 flex gap-4 justify-center items-center relative"
            onClick={() =>
              experience.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="hidden absolute right-8 top-0 w-20 h-full  items-center justify-center">
              Experience
            </span>
            <span
              className={`absolute left-3 bg-slate-600 rounded-full w-3 h-3 ${
                isActive(about) ? "bg-cyan-400" : "bg-slate-600"
              }`}
            ></span>
          </li>

          <li
            className="p-3 flex gap-4 justify-center items-center relative"
            onClick={() => works.current.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="hidden absolute right-16 top-0 w-full h-full  items-center justify-center">
              Portfolio
            </span>
            <span
              className={`absolute left-3 bg-slate-600 rounded-full w-3 h-3 ${
                isActive(about) ? "bg-cyan-400" : "bg-slate-600"
              }`}
            ></span>
          </li>

          <li
            className="p-3 flex gap-4 justify-center items-center relative"
            onClick={() => form.current.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="hidden absolute right-16 top-0 w-full h-full  items-center justify-center">
              Contact
            </span>
            <span
              className={`absolute left-3 bg-slate-600 rounded-full w-3 h-3 ${
                isActive(about) ? "bg-cyan-400" : "bg-slate-600"
              }`}
            ></span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Headerlg;
