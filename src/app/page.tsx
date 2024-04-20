"use client";

import Typewriter from "typewriter-effect";
import profilePic from "./images/profile_pic.jpg";
import Image from "next/image";
import Wave from "react-wavify";

export default function Home() {
  return (
    <div className="min-h-screen">
      <nav className="w-full fixed top-0 font-someType text-center p-4 bg-black z-50">
        <div
          className="flex justify-between max-w-5xl mx-auto"
          style={{ backgroundColor: "#000" }}
        >
          <div style={{ minWidth: "65px" }}>
            <Typewriter
              options={{ cursor: " " }}
              onInit={(typewriter) => {
                typewriter.typeString("zDavies").start();
              }}
            />
          </div>
          <a className="btn-primary" href="#">
            Resume
          </a>
        </div>
      </nav>

      <main className="hero p-4 mt-20">
        <div
          className="flex flex-col-reverse md:flex-row text-center max-w-5xl mx-auto"
          style={{ zIndex: 2, position: "relative" }}
        >
          <div
            className="flex-1"
            style={{ minHeight: "220px", minWidth: "220px" }}
          >
            <Image
              src={profilePic}
              alt="Profile picture of Zachary Davies"
              className="propic"
            />
          </div>
          <div className="flex flex-1 flex-col">
            <div className="mb-6">
              <h1 className="pb-2">Zach Davies</h1>
              <h3 className="pb-4 italic font-light primary-text">
                Web Developer
              </h3>
            </div>
            <h4 className="pb-8">
              Front-End specialist with Full Stack aspirations providing
              effiecient and pixel perfect code.
            </h4>
            <h4>Getting joy from bringing designs into reality.</h4>
          </div>
        </div>
      </main>

      <div
        className="skillset"
        style={{ height: "100vh", backgroundColor: "#171717" }}
      >
        <div className="mb-6">
          <h1 className="pb-2">Zach Davies</h1>
          <h3 className="pb-4 italic font-light primary-text">Web Developer</h3>
        </div>
      </div>
    </div>
  );
}
