import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    tag: "Core Capability",
    title: "Custom Webdesign",
    desc: "Elevate your brand with a bespoke custom web design crafted to captivate your audience and drive measurable growth.",
    image: "https://www.nakshtechnologies.com/wp-content/uploads/2021/10/5ed5f414c359ef001ca99611-removebg-preview.png",
  },
  {
    id: 2,
    tag: "Core Capability",
    title: "UI & UX Design",
    desc: "Elevate your brand with beautifully crafted interfaces and highly functional digital user experiences.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlutu2XG15AQaJ5vjYzJ-fxLlNFyuoN4EIk8rsqBa6NBnVCTTX_gYlRo&s=10",
  },
  {
    id: 3,
    tag: "Core Capability",
    title: "Security First Architecture",
    desc: "Security-first architecture embeds protective measures into every layer of your system design.",
    image: "https://static.vecteezy.com/system/resources/previews/047/784/530/non_2x/an-illustration-of-three-business-professionals-working-together-on-a-cybersecurity-strategy-with-a-large-shield-icon-prominently-displayed-free-vector.jpg",
  },
  {
    id: 4,
    tag: "Scale",
    title: "Cloud Storage",
    desc: "Secure, scalable, and resilient off-site storage networks ensuring seamless data availability, fast recovery, and elastic capacity.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST05OrRso16czGvY_tc9n3Fot_ASr2qQzSASoZZd-fiyU3NnJzUz4NmgA&s=10",
  },
  {
    id: 5,
    tag: "Intelligence",
    title: "Frontend & Backend Development",
    desc: "Frontend is the visible, interactive interface users see. Backend is the unseen server-side engine powering data processing and storage.",
    image: "https://colaninfotech.com/wp-content/uploads/2022/09/frondendanbackend1.png",
  },
  {
    id: 6,
    tag: "Strategy",
    title: "AI Integration",
    desc: "AI-powered tools automate coding, personalize user experiences, and accelerate design workflows for modern web development.",
    image: "https://www.edureka.co/blog/wp-content/uploads/2018/10/What-is-Artificial-Intelligence.webp",
  },
];

// Shared cubic-bezier easing curve for smooth UI translations
const easeQuint = [0.22, 1, 0.36, 1];

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeQuint }
  }
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12, // Native sequential flow instead of manual indices
    }
  }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: easeQuint,
    }
  }
};

const Features = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-20 px-6 sm:px-8 font-sans bg-zinc-50 rounded-[2.5rem] my-12 border border-zinc-200/60 shadow-sm overflow-hidden">
      
      {/* Header Area */}
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16 text-center max-w-2xl mx-auto"
      >
        <span className="inline-block mb-3 px-3 py-1 bg-zinc-200/60 text-zinc-600 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase">
          What We Deliver
        </span>
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-950 mt-2">
          Core Capabilities
        </h2>
        <p className="mt-4 text-base text-zinc-500 leading-relaxed">
          Engineered to push performance boundries and build impactful digital experiences.
        </p>
      </motion.div>

      {/* Grid Container */}
      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {features.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            whileHover={{ 
              y: -8,
              scale: 1.01,
              boxShadow: "0 20px 40px -15px rgba(0,0,0,0.08)"
            }}
            className="group flex flex-col justify-between bg-white p-5 rounded-3xl border border-zinc-200/80 hover:border-zinc-300 transition-colors duration-300 cursor-pointer"
          >
            <div>
              {/* Image Frame with Inner Hover Zoom */}
              <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-zinc-100 border border-zinc-200/50 mb-6 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                  className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                />
              </div>

              {/* Text Layout */}
              <div className="px-1">
                <span className="block mb-2 text-[10px] uppercase tracking-[0.15em] text-zinc-400 font-bold">
                  {item.tag}
                </span>
                <h3 className="mb-2 text-xl font-semibold tracking-tight text-zinc-900 transition-colors duration-200 group-hover:text-zinc-700">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500 font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Features;