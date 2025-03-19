"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I provide high-quality web development services, creating fast, responsive, and user-friendly websites tailored to your needs. Whether you need a business website, portfolio, e-commerce platform, or a custom web application, I ensure a seamless and visually appealing experience. Using modern technologies like Next.js, React, TypeScript, and Node.js, I build secure, scalable, and high-performance websites that align with your goals.",
    href: "",
  },
  {
    num: "02",
    title: "Frontend Web Development",
    description:
      "I specialize in building visually stunning, highly responsive, and interactive user interfaces using modern frontend technologies. With expertise in Next.js, React, and TypeScript, I create seamless experiences that prioritize performance, accessibility, and usability. Whether it's a business website, portfolio, or a dynamic web application, I ensure pixel-perfect designs and smooth functionality.",
    href: "",
  },
  {
    num: "03",
    title: "Backend Development",
    description:
      "I develop powerful, scalable, and secure backend solutions that support seamless functionality for web applications. Using Node.js, Express.js, and MongoDB, I build APIs, authentication systems, and database structures that handle complex operations efficiently. My backend solutions ensure data security, high performance, and smooth communication between frontend and backend components.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent transition-all duration-500">{service.num}</div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-[#00ff99] transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-[#1c1c22] text-3xl"/>
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-[#00ff99] transition-all duration-500">{service.title}</h2>
                <p className="text-white/80">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
