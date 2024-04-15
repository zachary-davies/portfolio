"use client";

import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <nav className="flex w-full sticky mb-12 justify-between font-someType">
        <div style={{ minWidth: "140px" }}>
          <Typewriter
            options={{ cursor: " " }}
            onInit={(typewriter) => {
              typewriter.typeString("zDavies").start();
            }}
          />
        </div>
        <ul className="flex items-center">
          <li className="mr-8">
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Resume</a>
          </li>
        </ul>
      </nav>

      <div className="text-center">
        <h1>Zach Davies</h1>
        <h3>Web Developer</h3>
        <p>
          Front-End specialist with Full Stack aspirations providing effiecient
          and pixel perfect code. I love bringing designs into reality.
        </p>
      </div>
    </main>
  );
}
