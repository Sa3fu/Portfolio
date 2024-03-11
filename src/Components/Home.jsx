import React from "react";
import BackgroundImg from "../assets/adrien-olichon-RCAhiGJsUUE-unsplash.jpg";

function Home() {
  return (
    <div
      className="relative bg-cover bg-center h-screen w-full"
      style={{ backgroundImage: `url(${BackgroundImg})` }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl text-white font-semibold">
            Mohammad Saifuddin
          </h1>
          <p className="text-2xl text-white font-medium p-6">
            Software Engineer
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
