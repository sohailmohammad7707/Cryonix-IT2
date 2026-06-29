import Bg from "./assets/MainBG.mp4";
import Navbar from "./Navbar.jsx";
import { Rocket } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const HeroImg = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={Bg} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Hero Content */}
        <div className="flex min-h-[80vh] items-center px-8 pt-46 ml-4">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex max-w-3xl flex-col gap-7"
          >
            <motion.div variants={item} className="font-semibold">
              <h1 className="font-poppins text-7xl leading-tight text-black">
                Build Scalable <br />
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    opacity: {
                      duration: 0.8,
                      delay: 0.3,
                    },
                    y: {
                      duration: 0.8,
                      delay: 0.3,
                    },
                    backgroundPosition: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                  className=" inline-block bg-[linear-gradient(90deg,#2563eb,#06b6d4,#3b82f6,#06b6d4,#2563eb)] bg-size-[300%_300%] bg-clip-text text-transparent">
                  Software
                </motion.span>{" "}
                For Modern Businesses
              </h1>
            </motion.div>

            {/* Paragraph */}
            <motion.div variants={item}>
              <p className="mb-4 font-merriweather text-xl leading-relaxed text-[#101010]">
                We build high-performance web applications, cloud solutions, and
                AI-powered products that help businesses grow faster.
              </p>

              <p className="font-merriweather text-xl leading-relaxed text-[#101010]">
                Get Started and enter the next generation of IT solutions.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div variants={item} className="mt-2 flex gap-4">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2 rounded-full bg-[#1160fa] px-10 py-3 text-xl text-white shadow-lg"
              >
                <Rocket
                  size={22}
                  className="transition-transform duration-500 group-hover:translate-x-1"
                />
                Get Started
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full border-2 border-[#1160fa] px-10 py-3 text-xl text-[#121212] transition-all duration-300 hover:bg-[#1160fa] hover:text-white"
              >
                View Portfolio
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
