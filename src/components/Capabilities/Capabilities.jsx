import React from "react";
import { motion } from "framer-motion";

// Features Data
const features = [
  {
    id: 1,
    tag: "CORE CAPABILITY",
    title: "Custom Webdesign",
    desc: "Elevate your brand with a bespoke custom web design crafted to captivate your audience and drive measurable growth.",
    image:
      "https://www.nakshtechnologies.com/wp-content/uploads/2021/10/5ed5f414c359ef001ca99611-removebg-preview.png",
  },
  {
    id: 2,
    tag: "CORE CAPABILITY",
    title: "UI & UX Design",
    desc: " Elevate your brand with beautifully crafted interfaces and highly functional digital user experiences.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlutu2XG15AQaJ5vjYzJ-fxLlNFyuoN4EIk8rsqBa6NBnVCTTX_gYlRo&s=10",
  },
  {
    id: 3,
    tag: "CORE CAPABILITY",
    title: "Security First Architecture",
    desc: "Security-first architecture embeds protective measures into every layer of your system design.",
    image:
      "https://static.vecteezy.com/system/resources/previews/047/784/530/non_2x/an-illustration-of-three-business-professionals-working-together-on-a-cybersecurity-strategy-with-a-large-shield-icon-prominently-displayed-free-vector.jpg",
  },
  {
    id: 4,
    tag: "SCALE",
    title: "Cloud Storage",
    desc: "Secure, scalable, and resilient off-site storage networks ensuring seamless data availability, fast recovery, and elastic capacity.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST05OrRso16czGvY_tc9n3Fot_ASr2qQzSASoZZd-fiyU3NnJzUz4NmgA&s=10",
  },
  {
    id: 5,
    tag: "INTELLIGENCE",
    title: "Frontend & Backend Development",
    desc: "Frontend is the visible, interactive interface users see. Backend is the unseen server-side engine powering data processing and storage.",
    image:
      "https://colaninfotech.com/wp-content/uploads/2022/09/frondendanbackend1.png",
  },
  {
    id: 6,
    tag: "STRATEGY",
    title: "AI Integration",
    desc: "AI-powered tools automate coding, personalize user experiences, and accelerate design workflows for modern web development.",
    image:
      "https://www.edureka.co/blog/wp-content/uploads/2018/10/What-is-Artificial-Intelligence.webp",
  },
];

// Header Animation
const headerVariants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Card Animation
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.92,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Image Animation
const imageVariants = {
  hidden: {
    scale: 1.15,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Features = () => {
  return (
    <section className="relative w-full bg-white py-18 font-sans overflow-hidden">
      <div className="relative z-10">

        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24 text-center px-[8.5%]"
        >
          <span className="block mb-3 text-xs font-semibold tracking-[0.25em] uppercase text-zinc-500">
            What We Deliver
          </span>

          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-zinc-900">
            Core Capabilities
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">

          {features.map((item, index) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                delay: index * 0.15,
              }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <motion.div
                variants={imageVariants}
                className="relative h-64 overflow-hidden rounded-2xl bg-white border border-zinc-300 mb-6"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>

              {/* Content */}
              <div className="px-1">
                <span className="block mb-2 text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-semibold">
                  {item.tag}
                </span>

                <h3 className="mb-3 text-xl font-semibold tracking-tight text-zinc-900 transition-colors duration-300 group-hover:text-zinc-600">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-zinc-500">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;