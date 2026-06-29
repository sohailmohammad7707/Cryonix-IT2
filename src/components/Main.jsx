import React from "react";
import { motion } from "motion/react";

const stats = [
  {
    number: "20+",
    title: "Projects Delivered",
  },
  {
    number: "10+",
    title: "Years of Reliability",
  },
  {
    number: "20+",
    title: "Happy Clients",
  },
  {
    number: "8+",
    title: "Years Experience",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 50,
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
    <section className="relative overflow-hidden bg-[#a7a7a7] py-28">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-white/20 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-white/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={containerVariants}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-poppins text-5xl font-bold leading-tight tracking-tight text-[#111827]"
          >
            Leading with clarity Build with purpose.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Join the network of businesses making smarter decisions through
            modern technology, real-time insights, and scalable digital
            solutions.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-4"
        >
          {stats.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariant}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="rounded-3xl border border-white/40 bg-white/20 backdrop-blur-xl shadow-lg"
            >
              <div className="flex h-52 flex-col justify-center p-8">
                <h3 className="text-6xl font-bold text-[#092c61]">
                  {item.number}
                </h3>

                <div className="mt-5 h-px w-14 bg-[#092c61]/20"></div>

                <p className="mt-5 text-lg font-medium tracking-wide text-gray-700">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Main;