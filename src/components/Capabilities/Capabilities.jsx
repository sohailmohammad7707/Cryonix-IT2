import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    tag: "CORE CAPABILITY",
    title: "AI & Automation",
    desc: "Build intelligent workflows powered by advanced machine learning to maximize business productivity.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJaziP3CXeIVRrc54SgAkuy4V80t1Jfl0Wm6_gzZmZkw&s=10",
  },
  {
    id: 2,
    tag: "CORE CAPABILITY",
    title: "Web & Mobile Systems",
    desc: "Modern, lighting-fast responsive applications built with highly scalable frontend and backend ecosystems.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJT48fqBh6LY1q5GLHaZB0aKW7svt0UyqffBbdjr4XPg&s=10",
  },
  {
    id: 3,
    tag: "CORE CAPABILITY",
    title: "Security First Architecture",
    desc: "Enterprise-level protection utilizing end-to-end encryption, multi-factor auth, and zero-trust designs.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc52pK4hrIrpstmzUzse2ne8GbvB-YbyPwZe_T1XTn7Q&s=10",
  },
  {
    id: 4,
    tag: "SCALE",
    title: "Cloud Infrastructure",
    desc: "Seamless, auto-scaling multi-cloud infrastructure engineered for 99.99% high availability and uptime.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVi4VoPN-6zR3F2wstk4UXys7MEDnBsPIgGG3cl3OGDg&s=10",
  },
  {
    id: 5,
    tag: "INTELLIGENCE",
    title: "Data Analytics & BI",
    desc: "Transform raw technical telemetry into real-time business insights with custom interactive dashboards.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTekUaQxSnCQXkEq4fFfKB0ybHr7E-mIPVq0DNKAevYJA&s=10",
  },
  {
    id: 6,
    tag: "STRATEGY",
    title: "API Ecosystems",
    desc: "Design and build pristine, developer-friendly REST & GraphQL APIs to power your third-party integrations.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9QPeFrsxDSrKAMj5kAeUw75mw1-UY1kyQWGNGdzwbCw&s=10",
  },
];

// Framer Motion Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Cascades the card entry animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1], // Smooth custom cubic bezier curve
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Features = () => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative overflow-hidden bg-[#ababab] py-28 px-[8%]"
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative z-10">
        {/* Heading */}
        <motion.div variants={headerVariants} className="text-center">
          <h2 className="text-center text-5xl md:text-7xl font-extrabold text-[#303030]">
            Core <span className="text-sky-700">Capabilities</span>
          </h2>
          {/* Underline */}
          <div className="w-24 h-1.5 bg-sky-700 rounded-full mx-auto mt-5 mb-16" />
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {features.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ 
                y: -12,
                boxShadow: "0px 30px 60px rgba(0, 14, 43, 0.4)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group overflow-hidden rounded-[35px] border border-white/5 bg-zinc-900"
            >
              {/* Image Container */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Smooth Dark Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-900 to-transparent" />

                {/* Badge */}
                <span className="absolute top-5 left-5 rounded-full border border-white/10 bg-black/40 px-4 py-1.5 text-[10px] font-bold tracking-[2px] text-zinc-300 backdrop-blur-md">
                  {item.tag}
                </span>
              </div>

              {/* Content Box */}
              <div className="p-8 pt-4">
                <div className="mb-6 h-1 w-12 rounded-full bg-sky-500 transition-all duration-300 group-hover:w-20" />

                <h3 className="mb-4 text-2xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>

                <p className="text-base leading-7 text-zinc-400">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Features;