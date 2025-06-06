"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGithub,
  FaGitAlt 
} from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import { RiGraduationCapLine } from "react-icons/ri";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
  SiRedux,
  SiExpress
} from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";

const about = {
  title: "About Me",
  description:
    "I'm a passionate and skilled web developer specializing in building high-performance, scalable, and user-friendly websites. With expertise in modern technologies like Next.js, React, TypeScript, and Node.js, I create seamless digital experiences that are both functional and visually appealing. Whether it's frontend development, backend solutions, or full-stack applications, I focus on delivering clean, efficient, and maintainable code. I am always eager to learn and stay updated with the latest industry trends to provide cutting-edge solutions.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "S M Tawsif",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+88) 01639138880",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "tawsif.07",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi",
    },
    {
      fieldName: "Email",
      fieldValue: "tawsif0720@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Bangla, English, Japanese",
    },
  ],
};

const experience = {
  icon: <IoMdDocument />,
  title: "My Experience",
  description:
    "I have hands-on experience in full-stack web development, specializing in Next.js, React, TypeScript, and Node.js. I have worked on building scalable applications, intuitive user interfaces, and secure backend solutions. My expertise includes API development, authentication, database management, and performance optimization for modern web applications.",
  items: [
    {
      company: "Somewhere",
      position: "Full Stack Developer",
      duration: "2023 - Present",
    },
    {
      company: "Somewhere",
      position: "Front-End Developer Intern",
      duration: "Summer-2022",
    },
    {
      company: "Somewhere",
      position: "Freelance",
      duration: "Summer-2021",
    },
  ],
};

const education = {
  icon: <RiGraduationCapLine />,
  title: "My Education",
  description:
    "I have hands-on experience in full-stack web development, specializing in Next.js, React, TypeScript, and Node.js.",
  items: [
    {
      institution: "Programming Hero Level-2",
      degree: "Full Stack Developer",
      duration: "2024-2025",
    },
    {
      institution: "Programming Hero Level-1",
      degree: "Backend-end Track Developer",
      duration: "2023-2024",
    },
    {
      institution: "Programming Hero Level-1",
      degree: "Front-end Track Developer",
      duration: "2023-2024",
    },
    {
      institution: "DMRC",
      degree: "Higher Secondary School Certificate",
      duration: "2022-2023",
    },
    {
      institution: "Adarsha School, Narayangonj",
      degree: "Secondary School Certificate",
      duration: "2020-2021",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I have hands-on experience in full-stack web development, specializing in Next.js, React, TypeScript, and Node.js.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiMongodb />,
      name: "mongodb",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaGithub />,
      name: "github",
    },
    {
      icon: <FaGitAlt />,
      name: "git",
    },
    {
      icon: <SiRedux />,
      name: "redux",
    },
    {
      icon: <SiExpress />,
      name: "express.js",
    },
    {
      icon: <RiFirebaseFill />,
      name: "firebase",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center ph-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value={"experience"}>Experience</TabsTrigger>
            <TabsTrigger value={"education"}>Education</TabsTrigger>
            <TabsTrigger value={"skills"}>Skills</TabsTrigger>
            <TabsTrigger value={"about"}>About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-[#00ff99]">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-[#00ff99]"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-[#00ff99]">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-[#00ff99]"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-[#00ff99] transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px text-white/60 mx-auto xl:mx-0]">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {
                        about.info.map((item, index) => {
                            return (
                                <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                    <span className="text-white/60">{item.fieldName}</span>
                                    <span className="text-xl">{item.fieldValue}</span>
                                </li>
                            )
                        })
                    }
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
