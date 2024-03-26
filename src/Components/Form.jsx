import React from "react";
import bgImg from "../assets/ben-kolde-bs2Ba7t69mM-unsplash.jpg";
import classes from "./form.module.css";

function Form() {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-45"></div>
      <div className="relative p-5 flex justify-center flex-col items-center">
        <h1 className="text-4xl text-white font-titleFont mb-3 mt-6 font-medium">
          Get In Touch
        </h1>
        <div className="border-[1px] border-cyan-400 w-32 mb-10"></div>
        <p className="text-white text-center mb-5">
          Have a sweet project in mind or just want to say hi? Feel free to send
          me a message!
        </p>
        <form className={classes.form}>
          <label className={classes.labelForm}>Name</label>
          <input type="text" className={classes.formInput} />
        </form>
      </div>
    </div>
  );
}

export default Form;
