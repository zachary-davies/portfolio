"use client";

import { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { projects, skillSet } from "./utils/constants";
import SkillContainer from "./components/SkillContainer";
import ProjectContainer from "./components/ProjectContainer";
import Tile from "./components/Tile";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const skillContainerRef = useRef(null);

  const isInView = useInView(skillContainerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
    }
  }, [isInView, mainControls]);
  return (
    <div className="min-h-screen relative">
      {/**Tile Background */}
      {/* <section className="w-full grid grid-cols-20 h-screen absolute overflow-y-clip">
        {Array.from(Array(20 * 12), (i) => (
          <Tile key={i} />
        ))}
      </section> */}

      {/** Navbar */}
      <nav className="w-full fixed top-0 font-someType text-center px-4 py-4 bg-black z-50">
        <div className="flex justify-between max-w-4xl mx-auto px-4 bg-black">
          <div className="min-w-[65px] flex items-center">
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
            <a href="/Zachary_Davies_Resume.pdf" download>
              <button className="btn-primary">Resume</button>
            </a>
          </motion.div>
        </div>
      </nav>
      <div className="block md:hidden" style={{ minHeight: "75px" }}></div>

      {/** Hero */}
      <main className=" pointer-events-none min-h-screen p-4 flex items-center flex-col-reverse justify-evenly md:flex-row text-center max-w-5xl mx-auto z-40 relative">
        <motion.div
          className="flex-0 md:flex-1 min-w-[220px] min-h-[220px] relative"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", bounce: 0.4 }}
        >
          <Image
            src="profile_pic.jpg"
            alt="Profile picture of Zachary Davies"
            className="propic"
            width={220}
            height={220}
            priority
            quality={95}
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

      <div style={{ backgroundColor: "#171717" }}>
        {/** About me */}
        <div className="mx-auto max-w-4xl flex flex-col item-center pt-8 px-4 mb-5 md:mb-16">
          <h2 className="pb-4 italic font-light primary-text text-center">
            About
          </h2>
          <p className="mb-4">
            Hello! I&apos;m based in Rochester, NY after having lived in Boston,
            MA for about 7 years. My professional career has been focused around
            mainly Front-End technologies, but I am at the stage of my career
            where I would like to expand out as a Full-Stack developer.
            Currently, I&apos;ve been learning Node.JS and Next.JS in order to
            achieve this goal.
          </p>

          <p>
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
            ref={skillContainerRef}
          >
            {skillSet.map((skill) => {
              return (
                <SkillContainer key={skill.name} skill={skill}></SkillContainer>
              );
            })}
          </motion.div>
        </div>

        {/** Projects */}
        <Projects />

        {/** Contact */}
        <Contact />
      </div>
    </div>
  );
}
