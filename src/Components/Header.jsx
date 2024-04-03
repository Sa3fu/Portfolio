import React, { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import logo from "../assets/output-onlinepngtools.png";
import { motion } from "framer-motion";

const Header = ({ home, about, whatido, skills, experience, works, form }) => {
  const [opennavbar, setOpennavbar] = useState(false);

  const handleOpen = () => {
    setOpennavbar(true);
    document.body.style.overflowY = "hidden";
  };

  const handleClose = () => {
    setOpennavbar(false);
    document.body.style.overflowY = "auto";
  };

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setOpennavbar(false);
    document.body.style.overflowY = "auto";
  };

  return (
    <div className="relative">
      <div className="lg:hidden xl:hidden">
        <MenuOutlinedIcon
          className="fixed z-30 top-4 right-6 cursor-pointer focus:hidden"
          sx={{ color: "white", fontSize: "50px" }}
          onClick={handleOpen}
        />
      </div>
      {opennavbar && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.95 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:hidden xl:hidden fixed inset-0 bg-cyan-600 z-50 opacity-95"
        >
          <img src={logo} alt="" className="absolute w-14 top-3" />
          <h4 className="font-titleFont flex justify-center items-center text-white top-4 text-xl font-semibold mt-7">
            MOHAMMAD SAIFUDDIN
          </h4>
          <CloseOutlinedIcon
            className="fixed top-4 right-6 cursor-pointer"
            sx={{ color: "white", fontSize: "50px" }}
            onClick={handleClose}
          />
          <div>
            <ul className="flex flex-col justify-center items-center mt-16 gap-8 text-white text-3xl font-semibold">
              <li onClick={() => scrollToRef(home)}>Intro</li>
              <li onClick={() => scrollToRef(about)}>About</li>
              <li onClick={() => scrollToRef(whatido)}>What I Do</li>
              <li onClick={() => scrollToRef(skills)}>Skills</li>
              <li onClick={() => scrollToRef(experience)}>Experience</li>
              <li onClick={() => scrollToRef(works)}>Portfolio</li>
              <li onClick={() => scrollToRef(form)}>Contact</li>
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Header;
