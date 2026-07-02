import React from "react";
import { motion } from "framer-motion";

// Import your images
import web1 from "../../assets/web4.avif";
import web8 from "../../assets/web5.jpg";

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Gallery Data
const galleryItems = [
  {
    image: web1,
    name: "Aurora Commerce",
    category: "E-commerce",
    span: "lg:col-span-7",
  },
  {
    image: web8,
    name: "Northwind Analytics",
    category: "Dashboard",
    span: "lg:col-span-5",
  },
  {
    image: web8,
    name: "Fieldnote",
    category: "SaaS Platform",
    span: "lg:col-span-5",
  },
  {
    image: web1,
    name: "Verse Studio",
    category: "Marketing Site",
    span: "lg:col-span-7",
  },
];

const Gallery = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto py-16 px-6 sm:px-8">
      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="mb-12 text-center lg:text-left"
      >
        <motion.span
          variants={fadeUp}
          className="font-mono text-xs tracking-widest text-zinc-400 uppercase block mb-4"
        >
          Selected Work
        </motion.span>

        <motion.h3
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-zinc-900 max-w-xl mx-auto lg:mx-0"
        >
          A closer look at what we've shipped
        </motion.h3>
      </motion.div>

      {/* Gallery */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6"
      >
        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className={`group relative overflow-hidden rounded-[2rem] border border-zinc-200/80 shadow-sm cursor-pointer ${item.span}`}
          >
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              decoding="async"
              className="w-full h-[320px] sm:h-[380px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Hover Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-300 block mb-2">
                {item.category}
              </span>

              <h4 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                {item.name}
              </h4>
            </div>

            {/* Static Label */}
            <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-semibold tracking-wide uppercase text-zinc-700 transition-opacity duration-300 group-hover:opacity-0">
              {item.category}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Gallery;