import React, { useState, useEffect } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import logo from "../assets/output-onlinepngtools.png";

const Header = () => {
  const [opennavbar, setOpennavbar] = useState(false);

  const handleOpen = () => {
    setOpennavbar(true);
    document.body.style.overflowY = "hidden";
  };

  const handleClose = ({ ref }) => {
    setOpennavbar(false);
    document.body.style.overflowY = "auto";
  };

  return (
    <div className="relative ">
      <div className="lg:hidden xl:hidden">
        <MenuOutlinedIcon
          className="fixed z-10 top-4 right-6 cursor-pointer focus:hidden"
          sx={{ color: "white", fontSize: "50px" }}
          onClick={handleOpen}
        />
      </div>
      {opennavbar && (
        <div className="lg:hidden xl:hidden fixed inset-0 bg-cyan-400 z-50 opacity-95">
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
              <li
                onClick={() =>
                  ref.home.current.scrollIntoView({ behavior: "smooth" })
                }
              >
                Home
              </li>
              <li>About</li>
              <li>What I Do</li>
              <li>Skills</li>
              <li>Experience</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
