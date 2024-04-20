"use client";

import Typewriter from "typewriter-effect";
import profilePic from "./images/profile_pic.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/** Navbar */}
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
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, type: "spring", bounce: 0.4 }}
          >
            <a className="btn-primary" href="#">
              Resume
            </a>
          </motion.div>
        </div>
      </nav>

      <div className="block md:hidden" style={{ minHeight: "75px" }}></div>

      {/** Hero */}
      <main className="h-screen p-4 flex items-center flex-col-reverse md:flex-row text-center max-w-5xl mx-auto">
        <motion.div
          className="flex-1"
          style={{ minHeight: "220px", minWidth: "220px" }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", bounce: 0.4 }}
        >
          <Image
            src={profilePic}
            alt="Profile picture of Zachary Davies"
            className="propic"
            priority
          />
        </motion.div>
        <div className="flex flex-none md:flex-1 flex-col">
          <div className="mb-6">
            <motion.h1
              className="pb-2"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, type: "spring", bounce: 0.4 }}
            >
              Zach Davies
            </motion.h1>
            <motion.h3
              className="pb-4 italic font-light primary-text"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
            >
              Web Developer
            </motion.h3>
          </div>
          <motion.h4
            className="pb-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, type: "spring", bounce: 0.4 }}
          >
            Front-End specialist with Full Stack aspirations providing
            effiecient and pixel perfect code.
          </motion.h4>
          <motion.h4
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, type: "spring", bounce: 0.4 }}
          >
            Getting joy from bringing designs into reality.
          </motion.h4>
        </div>
      </main>

      <div style={{ height: "100vh", backgroundColor: "#171717" }}>
        {/* Skillset */}
        <div className="mx-auto max-w-5xl flex flex-col item-center pt-8">
          <h2 className="pb-4 italic font-light primary-text text-center">
            Skillset
          </h2>
          <div className="skill__container flex">
            <div className="skill flex items-center font-semibold mr-5">
              <Image
                alt={"React.JS logo"}
                src="https://www.svgrepo.com/show/452092/react.svg"
                height={30}
                width={30}
              />
              <p className="ml-1">React</p>
            </div>

            <div className="skill flex items-center font-semibold">
              <Image
                alt={"JS logo"}
                src="https://www.svgrepo.com/show/452045/js.svg"
                height={30}
                width={30}
              />
              <p className="ml-1">Javascript</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
