import Bg from "../assets/MainBG10.png";
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
    <section className="bg-white relative w-full min-h-screen overflow-hidden" >
      {/* Background Image */}
      <img
        src={Bg}
        alt="Background"
        className="absolute inset-0 w-full h-full "
      />

      {/* Overlay */}
      <div className="absolute inset-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center px-8 lg:px-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Heading */}
          <motion.div variants={item}>
            <h1 className="font-poppins text-5xl md:text-6xl lg:text-6xl font-semibold leading-tight text-black ">
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
                className="inline-block bg-[linear-gradient(90deg,#2563eb,#06b6d4,#3b82f6,#06b6d4,#2563eb)] bg-size-[300%_300%] bg-clip-text text-transparent"
              >
                Software
              </motion.span>{" "}
              For Modern Businesses
            </h1>
          </motion.div>

          {/* Paragraph */}
          <motion.div variants={item} className="mt-8 pb-8">
            <p className="font-merriweather text-lg md:text-xl leading-relaxed text-[#303030]">
              We build high-performance web applications, cloud solutions, and
              <br />AI-powered products that help businesses grow faster.
            </p>

            <p className="mt-3 font-merriweather text-lg md:text-xl leading-relaxed text-[#303030]">
              Get Started and enter the next generation of IT solutions.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap gap-5"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2 rounded-full bg-[#0f172b] px-8 py-4 text-lg text-white shadow-xl"
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
              className="rounded-full border-2 border-[#0f172b] px-8 py-4 text-lg text-[#121212] transition-all duration-300 hover:bg-[#0f172b] hover:text-white"
            >
              View Portfolio
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroImg;