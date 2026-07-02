import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Capabilities from "./Capabilities/Capabilities";
import Team from "./Capabilities/Team";
import Skills from "./Capabilities/Skills";
import web1 from "../assets/web1.png";
import web8 from "../assets/web2.png";

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

const imageAnimation = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.8, ease: easeQuint }
  },
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }
  }
};

const Main = () => {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Tracks absolute mouse positions for parallax calculations
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2); // Ranges from -1 to 1
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2); // Ranges from -1 to 1
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Frame scroll position tracking linked directly to the parent layout wrapper
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Immersive 3D Gateway Scale Transformation
  const windowScale = useTransform(scrollYProgress, [0, 0.4], [1, 4.5]);
  const windowBlur = useTransform(scrollYProgress, [0, 0.3], ["blur(0px)", "blur(16px)"]);
  const windowOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  return (
    <div ref={containerRef} className="bg-zinc-50 w-full min-h-screen overflow-x-hidden relative select-none">
      
      {/* Upper Hero Sticky Layer: Creative Cybernetic Cinematic Area */}
      <div className="sticky top-0 h-[95vh] w-full flex items-center justify-center bg-[#09090b] overflow-hidden z-0 rounded-b-[4rem]">
        
        {/* Layer 1: Subdued Tech Vector Grid backdrop reacting to mouse perspective shift */}
        <div 
          className="absolute inset-0 opacity-[0.07] pointer-events-none transition-transform duration-700 ease-out"
          style={{
            backgroundImage: `linear-gradient(zinc-800 1px, transparent 1px), linear-gradient(to right, zinc-800 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            transform: `scale(1.1) translate3d(${mousePos.x * -20}px, ${mousePos.y * -20}px, 0px) rotateX(${mousePos.y * 5}deg)`,
          }}
        />

        {/* Layer 2: Ambient Interactive Aurora Glow Engine */}
        <div 
          className="absolute inset-0 transition-opacity duration-1000 ease-out pointer-events-none mix-blend-screen"
          style={{
            background: `radial-gradient(circle 600px at ${50 + mousePos.x * 20}% ${50 + mousePos.y * 20}%, rgba(39, 39, 42, 0.35), rgba(63, 63, 70, 0.05), transparent)`,
          }}
        />

        {/* Layer 3: Creative Floating Atmospheric Quantum Dust Nodes */}
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
                opacity: [0.1, 0.4, 0.1]
              }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Layer 4: 3D Interactive Perspective Grid Canvas Box Wrapper */}
        <div 
          className="w-full max-w-4xl px-4 sm:px-0 transition-transform duration-500 ease-out"
          style={{
            perspective: "1200px",
            transform: `rotateX(${mousePos.y * -8}deg) rotateY(${mousePos.x * 8}deg)`
          }}
        >
          <motion.div 
            style={{ scale: windowScale, filter: windowBlur, opacity: windowOpacity }}
            className="w-full p-12 sm:p-24 bg-zinc-900/20 backdrop-blur-xl border border-zinc-800/40 rounded-[3.5rem] text-center shadow-[0_35px_100px_-20px_rgba(0,0,0,0.9)] relative flex flex-col items-center justify-center overflow-hidden group"
          >
            {/* High-tech highlight line running elegantly along top inner border boundary */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-600/40 to-transparent" />
            
            <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-500 uppercase mb-6 block transition-colors group-hover:text-zinc-400 duration-500">
              Cryonix Architecture Stack
            </span>
            
            <h1 className="text-4xl sm:text-7xl font-bold tracking-tight text-white max-w-3xl leading-[1.05] bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              Let's engineer exceptional systems.
            </h1>
            
            {/* Animated UI Downward Guidance Indicator */}
            <div className="mt-10 flex flex-col items-center gap-2.5">
              <p className="text-xs text-zinc-500 font-mono tracking-widest uppercase">
                [ Scroll to cross perimeter ]
              </p>
              <motion.div 
                animate={{ y: [0, 5, 0], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 bg-zinc-500 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.4)]"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content Layout Block: Rises smoothly over the top of the viewport frame overlay */}
      <div className="relative bg-zinc-50 z-10 rounded-t-[4rem] -mt-[10vh] pt-20 shadow-[0_-40px_80px_-15px_rgba(0,0,0,0.12)] border-t border-zinc-200/50">
        
        {/* Section 1: Image Left, Content Right */}
        <section className="relative flex flex-col lg:flex-row w-full max-w-7xl mx-auto py-16 px-6 sm:px-8 items-center justify-center gap-12 lg:gap-16">
          
          {/* Animated Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <motion.img
              src={web1}
              alt="Modern Web Design Showcase"
              loading="lazy"
              decoding="async"
              className="w-full max-w-2xl h-auto rounded-[2rem] object-cover border border-zinc-200/80 shadow-md"
              initial={imageAnimation.initial}
              whileInView={imageAnimation.whileInView}
              animate={imageAnimation.animate}
              viewport={{ once: true }}
            />
          </div>

          {/* Content Block */}
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
              secure, and maintainable digital systems — from ERP platforms to
              AI-powered applications.
            </motion.p>
          </motion.div>
        </section>

        {/* Dynamic Interactive Stats Banner Strip */}
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
          
          {/* Content Block */}
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
              secure, and maintainable digital systems — from ERP platforms to
              AI-powered applications.
            </motion.p>
          </motion.div>

          {/* Animated Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <motion.img
              src={web8}
              alt="Performance Architecture Showcase"
              loading="lazy"
              decoding="async"
              className="w-full max-w-2xl h-auto rounded-[2rem] object-cover border border-zinc-200/80 shadow-md"
              initial={imageAnimation.initial}
              whileInView={imageAnimation.whileInView}
              animate={imageAnimation.animate}
              viewport={{ once: true }}
            />
          </div>
        </section>

        {/* Capabilities & Skills Subcomponents */}
        <div className="w-full space-y-4 pb-28">
          <Capabilities />
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default Main;