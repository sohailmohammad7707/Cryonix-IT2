import React from "react";
import { motion } from "motion/react";
import Capabilities from "./Capabilities/Capabilities";
import Team from "./Capabilities/Team";
import web1 from "../assets/web1.png";
import web8 from "../assets/web2.png";
import Skills from "./Capabilities/Skills";

const stats = [
  { number: "20+", title: "Projects Delivered" },
  { number: "10+", title: "Years of Reliability" },
  { number: "20+", title: "Happy Clients" },
  { number: "8+", title: "Years Experience" },
];

// Reusable Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Main = () => {
  return (
    <>
      <div className="bg-[#ffffff] flex flex-col items-center w-full min-h-screen py-24">
        {/* Main Section Header */}
       
        <div className=" text-5xl font-light tracking-tight text-zinc-900  p-3 pt-12 text-center">
           <span className="block mb-3 text-xs font-semibold tracking-[0.25em] uppercase text-zinc-500">
             Start Developing
          </span>
          <h3>Let's Work with us.</h3>
        </div>

        {/* Section 1: Image Left, Content Right */}
        <section className="relative flex flex-col lg:flex-row h-full py-16 w-[85%] items-center justify-center gap-10 ">
          {/* Blue Glow Background Effect */}
          <div className="absolute h-175 w-175 rounded-full opacity-30 pointer-events-none" />

          {/* Animated Image */}
          <motion.img
            src={web1}
            alt="Modern Web Design Showcase"
            loading="lazy"
            decoding="async"
            className="w-full lg:w-[55%] h-full rounded-3xl object-cover border"
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{ once: true }}
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              opacity: { duration: 0.8 },
              x: { duration: 0.8, ease: "easeOut" },
              scale: { duration: 0.8 },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />

          {/* Content Block */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="relative z-10 w-full lg:w-1/2 max-w-xl px-6 text-center lg:text-left"
          >
            <motion.h1
              variants={fadeUp}
              className="font-ptsans w-110  text-3xl md:text-4xl font-bold leading-tight tracking-[-0.04em] text-[#202020]"
            >
              We design and create Modern Looking websites
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 leading-7 text-[#404040] w-110"
            >
              Cryonix IT is a technology partner focused on building scalable,
              secure, and maintainable digital systems — from ERP platforms to
              AI-powered applications.
            </motion.p>
          </motion.div>
        </section>

        {/* Section 2: Content Left, Image Right (Alternating Row on Desktop) */}
        <section className="relative flex flex-col-reverse lg:flex-row h-full py-16 w-[100%] items-center justify-center gap-10 overflow-hidden">
          {/* Blue Glow Background Effect */}
          <div className="absolute h-175 w-175 rounded-full opacity-30 pointer-events-none" />

          {/* Content Block */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="relative z-10 w-full lg:w-1/2 max-w-xl px-6 text-center lg:text-left"
          >
            <motion.h1
              variants={fadeUp}
              className="font-font-ptsans ml-22 w-110 text-3xl md:text-4xl font-bold leading-tight tracking-[-0.04em] text-[#202020]"
            >
              Engineered for Scale High & Performance
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className=" w-110 ml-22 mt-5 leading-7 text-[#404040]"
            >
              Cryonix IT is a technology partner focused on building scalable,
              secure, and maintainable digital systems — from ERP platforms to
              AI-powered applications.
            </motion.p>
          </motion.div>

          {/* Animated Image */}
          <motion.img
            src={web8}
            alt="Performance Architecture Showcase"
            loading="lazy"
            decoding="async"
            className="w-full lg:w-1/2  h-full border rounded-3xl object-cover shadow-lg"
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{ once: true }}
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              opacity: { duration: 0.8 },
              x: { duration: 0.8, ease: "easeOut" },
              scale: { duration: 0.8 },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        </section>

        {/* Capabilities & Team Subcomponents */}
        <Skills />
        <Capabilities />
        {/* <Team /> */}
      </div>
    </>
  );
};

export default Main;
