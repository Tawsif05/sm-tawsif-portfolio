"use client";

import { Typewriter } from "react-simple-typewriter";

const HeroText = () => {
  return (
    <span className="text-[#00ff99]">
      <Typewriter
        words={[
          "Full Stack Developer.",
          "From Bangladesh",
          "Next.js Expert.",
        ]}
        loop={5}
        cursor
        cursorStyle="|"
        typeSpeed={100}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </span>
  );
};

export default HeroText;
