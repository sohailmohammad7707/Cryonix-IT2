import React from "react";
import { motion } from "motion/react";
import Capabilities from "./Capabilities/Capabilities";
import Team from "./Capabilities/Team";
import web1 from "../assets/web4.png"

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

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Main = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex h-full py-20 w-full items-center justify-center overflow-hidden bg-[#ababab]">
        {/* Grid Background */}
        <div className="bg-[#ababab]" />

        {/* Blue Glow */}
        <div className="absolute h-175 w-175 rounded-full " />

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="relative z-10 mx-auto max-w-6xl px-6 text-center"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl font-bold leading-none tracking-[-0.04em] text-black sm:text-5xl lg:text-7xl xl:text-[78px]"
          >
            We design and engineer
            <br />
            <span className="text-blue-500">software that businesses</span>
            <br />
            actually rely on.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-10 max-w-4xl text-lg leading-8 text-[#303030] sm:text-xl lg:text-[28px] lg:leading-[1.7]"
          >
            Cryonix IT is a technology partner focused on building scalable,
            secure, and maintainable digital systems — from ERP platforms to
            AI-powered applications.
          </motion.p>
        </motion.div>
        <div>
          <img className="w-170 h-100 rounded-3xl border m-8 mr-38" src={web1} alt="web" />
        </div>
      </section>

      

      {/* Capabilities & Team Subcomponents */}
      <Team />
      <Capabilities />
      
    </>
  );
};

export default Main;