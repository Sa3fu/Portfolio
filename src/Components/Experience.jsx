import React from "react";
import bgImg from "../assets/marcelo-vaz-ka6WGHXcFMY-unsplash.jpg";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import "./logo.css"

function Experience() {
  return (
    <div
      className="relative overflow-x-hidden"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-45"></div>
      <div>
        <div className="relative flex flex-col justify-center p-5 items-center">
          <h3 className="font-titleFont text-4xl font-semibold text-white mb-5">
            Experience
          </h3>
          <div className="border-[1px] border-cyan-400 w-32 mb-10"></div>
        </div>
        <div>
          <VerticalTimeline lineColor="lightblue">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#222120", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid #222120",
              }}
              date="2023 - present"
              iconStyle={{
                background: "black",
                color: "#fff",
                boxShadow: "none",
                zIndex: 1,
              }}
              icon={<WorkOutlineOutlinedIcon />}
            >
              <h3 className="vertical-timeline-element-title mb-3 font-titleFont text-3xl">
                Software Engineer
              </h3>
              <h4 className="vertical-timeline-element-subtitle mb-3 text-base text-cyan-500">
                Appmocx
              </h4>
              <ul className="text-sm text-slate-400 list-disc flex flex-col gap-3 text-justify">
                <li>
                  Contributed to the development of a web application utilizing
                  low-code technology, Angular, and NestJS, seamlessly
                  integrating with SAP to display data in the user interface.
                </li>
                <li>
                  Facilitated order placement and bid submission for commercial
                  and technical products, with the ability for buyers to select
                  preferred vendors. Implemented bid management for vendors,
                  enabling buyers to choose optimal bid prices.
                </li>
                <li>
                  Incorporated features for managing shipment details and
                  offered flexible payment options, including monthly or
                  one-time settlements.
                </li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
        <div className="relative bottom-6 left-1 sm:left-[0.875rem] md:left-4 lg:left-5 xl:left-[37.906rem]">
          <ArrowDropDownOutlinedIcon
            sx={{ fontSize: "50px", color: "lightblue" }}
          />
        </div>
      </div>
      <div className="logo">
        <span className="logo__text">
          View My Full Resume
        </span>
        <span className="logo__image">
          <FileDownloadOutlinedIcon sx={{fontSize:"40px" , color:"white"}}/>
        </span>
      </div>
    </div>
  );
}

export default Experience;
