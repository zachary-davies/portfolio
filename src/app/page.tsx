"use client";

import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import profilePic from "./images/profile_pic.jpg";
import Image from "next/image";
import {
  motion,
  useAnimate,
  useAnimation,
  useInView,
  useScroll,
} from "framer-motion";
import { skillSet } from "./utils/constants";

export default function Home() {
  const { scrollYProgress: completionProgress } = useScroll();

  const containerRef = useRef(null);

  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
    }
  }, [isInView, mainControls]);
  return (
    <div className="min-h-screen">
      {/** Navbar */}
      <nav className="w-full fixed top-0 font-someType text-center px-4 py-7 bg-black z-50">
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
        <div className="mx-auto max-w-2xl flex flex-col item-center pt-8 px-4">
          <h2 className="pb-4 italic font-light primary-text text-center">
            About
          </h2>
          <p className="mb-4">
            Hello! I'm based in Rochester, NY after having lived in Boston, MA
            for about 7 years. My professional career has been focused around
            mainly Front-End technologies, but I am at the stage of my career
            where I would like to expand out as a Full-Stack developer.
            Currently, I've been learning Node.JS and Next.JS in order to
            achieve this goal.
          </p>

          <p className="mb-16">
            Outside of coding, I enjoy baking, video/board games, crocheting,
            and painting!
          </p>
        </div>

        {/* Skillset */}
        <div className="mx-auto max-w-2xl flex flex-col item-center pt-8 px-4">
          <h2 className="pb-4 italic font-light primary-text text-center">
            Skillset
          </h2>
          <p className="text-center mb-4">
            These are the main technologies and tools that were the focus of my
            professional life.
          </p>
          <motion.div
            className="skill__container flex flex-wrap justify-center"
            variants={{
              hidden: { opacity: 0, y: -100 },
              show: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
            }}
            initial="hidden"
            animate={mainControls}
            ref={containerRef}
          >
            {skillSet.map((skill) => {
              return (
                <motion.div
                  key={skill.name}
                  className="skill flex items-center font-semibold mr-5 mb-5"
                  variants={{
                    hidden: { opacity: 0, y: -100 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <Image
                    alt={`${skill.name} logo`}
                    src={skill.imgUrl}
                    height={30}
                    width={30}
                  />
                  <p className="ml-1">{skill.name}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
