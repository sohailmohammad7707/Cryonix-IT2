import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Capabilities from "./Capabilities/Capabilities";
import Team from "./Capabilities/Team";
import Skills from "./Capabilities/Skills";
import web1 from "../assets/web6.png";
import web8 from "../assets/web9.png";
import Gallery from "./Capabilities/Gallery";

const stats = [
  { number: "20+", title: "Projects Delivered" },
  { number: "10+", title: "Years of Reliability" },
  { number: "20+", title: "Happy Clients" },
  { number: "8+", title: "Years Experience" },
];

const easeQuint = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: easeQuint,
    },
  },
};

// Separating the scroll-entrance from the continuous floating animation loop
const imageEntrance = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeQuint },
  },
};

const Main = () => {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Smooth out mouse tracking calculations using requestAnimationFrame
  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      animationFrameId = requestAnimationFrame(() => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
        const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
        setMousePos({ x, y });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Scroll tracking setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const windowScale = useTransform(scrollYProgress, [0, 0.4], [1, 4.5]);
  const windowBlur = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["blur(0px)", "blur(16px)"],
  );
  const windowOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="bg-zinc-50 w-full min-h-screen overflow-x-hidden relative select-none"
    >
      {/* Upper Hero Sticky Layer */}
      <div className="sticky top-0 h-[95vh] w-full flex items-center justify-center bg-[#09090b] overflow-hidden z-0 rounded-b-[4rem]">
        {/* Layer 1: Vector Grid Background */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none transition-transform duration-700 ease-out"
          style={{
            backgroundImage: `linear-gradient(zinc-800 1px, transparent 1px), linear-gradient(to right, zinc-800 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            transform: `scale(1.1) translate3d(${mousePos.x * -20}px, ${mousePos.y * -20}px, 0px) rotateX(${mousePos.y * 5}deg)`,
          }}
        />

        {/* Layer 2: Interactive Aurora Glow */}
        <div
          className="absolute inset-0 transition-opacity duration-1000 ease-out pointer-events-none mix-blend-screen"
          style={{
            background: `radial-gradient(circle 600px at ${50 + mousePos.x * 20}% ${50 + mousePos.y * 20}%, rgba(39, 39, 42, 0.35), rgba(63, 63, 70, 0.05), transparent)`,
          }}
        />

        {/* Layer 3: Atmospheric Quantum Dust Nodes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-zinc-700 rounded-full opacity-30"
              style={{
                top: `${20 + i * 25}%`,
                left: `${15 + i * 30}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, i % 2 === 0 ? 15 : -15, 0],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Layer 4: Perspective Grid Box Wrapper */}
        <div
          className="w-full max-w-4xl px-4 sm:px-0 transition-transform duration-500 ease-out"
          style={{
            perspective: "1200px",
            transform: `rotateX(${mousePos.y * -8}deg) rotateY(${mousePos.x * 8}deg)`,
          }}
        >
          <motion.div
            style={{
              scale: windowScale,
              filter: windowBlur,
              opacity: windowOpacity,
            }}
            className="w-full p-12 sm:p-24 bg-zinc-900/20 backdrop-blur-xl border border-zinc-800/40 rounded-[3.5rem] text-center shadow-[0_35px_100px_-20px_rgba(0,0,0,0.9)] relative flex flex-col items-center justify-center overflow-hidden group"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-600/40 to-transparent" />

            <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-500 uppercase mb-6 block transition-colors group-hover:text-zinc-400 duration-500">
              Cryonix Architecture Stack
            </span>

            <h1 className="text-4xl sm:text-7xl font-bold tracking-tight text-white max-w-3xl leading-[1.05] bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              Let's engineer exceptional systems.
            </h1>

            <div className="mt-10 flex flex-col items-center gap-2.5">
              <p className="text-xs text-zinc-500 font-mono tracking-widest uppercase">
                [ Scroll to cross perimeter ]
              </p>
              <motion.div
                animate={{ y: [0, 5, 0], opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1.5 h-1.5 bg-zinc-500 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.4)]"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content Layout Block */}
      <div className="relative bg-zinc-50 z-10 rounded-t-[4rem] mt-[-10vh] pt-20 shadow-[0_-40px_80px_-15px_rgba(0,0,0,0.12)] border-t border-zinc-200/50">
        {/* Section 1: Image Left, Content Right */}
        <section className="relative flex flex-col lg:flex-row w-full max-w-7xl mx-auto py-16 px-6 sm:px-8 items-center justify-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 flex justify-center">
            {/* Wrapper div holds the smooth entry animation */}
            <motion.div
              variants={imageEntrance}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="w-full max-w-2xl"
            >
              {/* Image nested inside holds the continuous floating loop cleanly */}
              <motion.img
                src={web1}
                alt="Modern Web Design Showcase"
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-[2rem] object-cover border border-zinc-200/80 shadow-md"
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left"
          >
            <motion.h3
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-zinc-900 max-w-xl"
            >
              We design and create modern looking websites
            </motion.h3>
            <motion.p
              variants={fadeUp}
              className="mt-5 text-base leading-relaxed text-zinc-500 max-w-xl"
            >
              Cryonix IT is a technology partner focused on building scalable,
              secure, and maintainable digital systems.
            </motion.p>
          </motion.div>
        </section>

        {/* Stats Banner */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="w-full max-w-7xl mx-auto my-12 px-6 sm:px-8"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-white border border-zinc-200/60 rounded-[2.5rem] p-10 shadow-sm text-center">
            {stats.map((stat, idx) => (
              <motion.div
                variants={fadeUp}
                key={idx}
                whileHover={{ y: -5 }}
                className="space-y-1 py-4 px-2 rounded-2xl transition-colors hover:bg-zinc-50/50 duration-300 cursor-pointer"
              >
                <h4 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
                  {stat.number}
                </h4>
                <p className="text-xs font-semibold tracking-wide text-zinc-400 uppercase">
                  {stat.title}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section 2: Content Left, Image Right */}
        <section className="relative flex flex-col-reverse lg:flex-row w-full max-w-7xl mx-auto py-16 px-6 sm:px-8 items-center justify-center gap-12 lg:gap-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left"
          >
            <motion.h3
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-zinc-900 max-w-xl"
            >
              Engineered for high scale & performance
            </motion.h3>
            <motion.p
              variants={fadeUp}
              className="mt-5 text-base leading-relaxed text-zinc-500 max-w-xl"
            >
              Cryonix IT is a technology partner focused on building scalable,
              secure, and maintainable digital systems.
            </motion.p>
          </motion.div>

          <div className="w-full lg:w-1/2 flex justify-center">
            {/* Same layered animation pattern applied here */}
            <motion.div
              variants={imageEntrance}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="w-full max-w-2xl"
            >
              <motion.img
                src={web8}
                alt="Performance Architecture Showcase"
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-[2rem] object-cover border border-zinc-200/80 shadow-md"
                animate={{ y: [-12, 0, -12] }} // Slightly inverted loop offsets so they don't sync completely
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </section>

        <div className="w-full space-y-4 pb-28">
          
          <Skills />
          <Gallery />
          <Capabilities />
        </div>

        {/* Closing Section */}
        <section className="w-full bg-[#09090b] text-white pt-32 pb-16 px-6 sm:px-8 relative overflow-hidden rounded-t-[4rem] z-20 -mt-12">
          {/* Layer 1: Vector grid, matching the hero */}
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(zinc-800 1px, transparent 1px), linear-gradient(to right, zinc-800 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Layer 2: Ambient glow, matching the hero's aurora */}
          <div
            className="absolute inset-0 pointer-events-none mix-blend-screen"
            style={{
              background:
                "radial-gradient(circle 600px at 80% 20%, rgba(63,63,70,0.35), rgba(39,39,42,0.08), transparent)",
            }}
          />

          {/* Layer 3: Ghost wordmark signature, anchored bottom-right */}
          <span
            aria-hidden="true"
            className="absolute -bottom-10 -right-4 sm:right-4 text-[8rem] sm:text-[13rem] font-bold tracking-tighter text-white/[0.03] select-none leading-none pointer-events-none"
          >
            CRYONIX
          </span>

          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end pb-20 border-b border-zinc-800/60">
              {/* Left: statement */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="lg:col-span-8 space-y-6"
              >
                <motion.span
                  variants={fadeUp}
                  className="font-mono text-xs tracking-widest text-zinc-500 uppercase block"
                >
                  Get in touch
                </motion.span>

                <motion.h2
                  variants={fadeUp}
                  className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1] max-w-3xl"
                >
                  Have a complex system to build? <br />
                  <span className="text-zinc-500 transition-colors hover:text-zinc-300 duration-500 cursor-default">
                    Let's start the blueprint.
                  </span>
                </motion.h2>

                <motion.p
                  variants={fadeUp}
                  className="text-sm text-zinc-500 max-w-md pt-2"
                >
                  Reach out directly, or use the form and we'll reply within one
                  business day.
                </motion.p>
              </motion.div>

              {/* Right: action link */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: easeQuint, delay: 0.2 }}
                className="lg:col-span-4 lg:justify-self-end w-full sm:w-auto"
              >
                <a
                  href="#contact"
                  className="group relative flex items-center justify-between sm:justify-start gap-8 border-b border-zinc-700 pb-4 w-full sm:w-64 font-medium tracking-tight overflow-hidden text-lg"
                >
                  <span>Say hello</span>

                  {/* Animated Arrow Icon */}
                  <div className="relative w-6 h-6 overflow-hidden">
                    <svg
                      className="w-5 h-5 absolute transform transition-transform duration-500 group-hover:translate-x-7 group-hover:-translate-y-7 text-zinc-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                    <svg
                      className="w-5 h-5 absolute transform -translate-x-7 translate-y-7 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>

                  {/* Sliding background indicator line */}
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                </a>

                <a
                  href="mailto:hello@cryonixit.com"
                  className="block mt-6 text-sm text-zinc-500 hover:text-white transition-colors duration-300 w-fit"
                >
                  hello@cryonixit.com
                </a>
              </motion.div>
            </div>

            {/* Meta row: closes out the page, quiet footer-style info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeQuint }}
              className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-zinc-600 font-mono tracking-wide uppercase"
            >
              <span>&copy; {new Date().getFullYear()} Cryonix IT</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                <span>Currently accepting new projects</span>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Main;
