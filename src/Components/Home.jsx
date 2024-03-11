import React from "react";
import BackgroundImg from "../assets/adrien-olichon-RCAhiGJsUUE-unsplash.jpg";
import logo from "../assets/output-onlinepngtools.png";
import classes from "./Home.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Home() {
  return (
    <div
      className="relative bg-cover bg-center h-screen w-full overflow-x-hidden"
      style={{ backgroundImage: `url(${BackgroundImg})` }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl text-white font-semibold">
            Mohammad Saifuddin
          </h1>
          <p className="text-2xl text-white font-medium p-6 mb-24">
            Software Engineer
          </p>
        </div>
        <div className={classes.logo}>
          <img className={classes.logo__image} src={logo} alt="" />
          <span className={classes.logo__text}>
            Learn more{" "}
            <span>
              <KeyboardArrowDownIcon />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
