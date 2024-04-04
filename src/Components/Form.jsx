import React, { useRef, useState } from "react";
import bgImg from "../assets/ben-kolde-bs2Ba7t69mM-unsplash.jpg";
import classes from "./form.module.css";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";

function Form() {
  const form = useRef();
  const [open, setOpen] = useState(false);

  function sendmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("service_tkmbrxf", "template_21gdo25", form.current, {
        publicKey: "znY4NTpzXeEL6pcCk",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="relative p-5 flex justify-center flex-col items-center">
        <h1 className="text-4xl text-white font-titleFont mb-3 mt-6 font-medium">
          Get In Touch
        </h1>
        <div className="border-[1px] border-cyan-400 w-32 mb-10"></div>
        <p className="text-white text-center mb-10 sm:w-96">
          Have a sweet project in mind or just want to say hi? Feel free to send
          me a message!
        </p>
        <form ref={form} onSubmit={sendmail}>
          <div className={classes.form}>
            <input type="text" className={classes.formInput} name="name" />
            <label className={classes.labelForm}>Name</label>
          </div>
          <div className={classes.form}>
            <input type="email" className={classes.formInput} name="email" />
            <label className={classes.labelForm}>Email</label>
          </div>
          <div className={classes.form}>
            <input type="text" className={classes.formInput} name="subject" />
            <label className={classes.labelForm}>Subject</label>
          </div>
          <div className={classes.form}>
            <textarea
              type="textarea"
              className={classes.formTextarea}
              name="message"
            />
            <label className={classes.labelForm}>Message</label>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="text-cyan-500 border-2 border-cyan-500 p-2 px-10 rounded-sm text-xl hover:bg-cyan-500 hover:text-white mb-16"
              type="submit"
              value="Send"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Email sent Successfully"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </div>
  );
}

export default Form;
