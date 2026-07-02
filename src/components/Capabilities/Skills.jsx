import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  { name: "Next.js", category: "Frontend", image: "https://cdn.simpleicons.org/nextdotjs" },
  { name: "React", category: "Frontend", image: "https://cdn.simpleicons.org/react" },
  { name: "JavaScript", category: "Frontend", image: "https://cdn.simpleicons.org/javascript" },
  { name: "TypeScript", category: "Frontend", image: "https://cdn.simpleicons.org/typescript" },
  { name: "Tailwind CSS", category: "Frontend", image: "https://cdn.simpleicons.org/tailwindcss" },
  { name: "Vue.js", category: "Frontend", image: "https://cdn.simpleicons.org/vuedotjs" },
  { name: "Svelte", category: "Frontend", image: "https://cdn.simpleicons.org/svelte" },

  { name: "Node.js", category: "Backend", image: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "Express.js", category: "Backend", image: "https://cdn.simpleicons.org/express" },
  { name: "Python", category: "Backend", image: "https://cdn.simpleicons.org/python" },
  { name: "Go", category: "Backend", image: "https://cdn.simpleicons.org/go" },
  { name: "GraphQL", category: "Backend", image: "https://cdn.simpleicons.org/graphql" },
  { name: "FastAPI", category: "Backend", image: "https://cdn.simpleicons.org/fastapi" },
  { name: "JWT", category: "Backend", image: "https://cdn.simpleicons.org/jsonwebtokens" },
  { name: "Firebase", category: "Backend", image: "https://cdn.simpleicons.org/firebase" },
  { name: "Supabase", category: "Backend", image: "https://cdn.simpleicons.org/supabase" },

  { name: "MongoDB", category: "Database", image: "https://cdn.simpleicons.org/mongodb" },
  { name: "MySQL", category: "Database", image: "https://cdn.simpleicons.org/mysql" },
  { name: "PostgreSQL", category: "Database", image: "https://cdn.simpleicons.org/postgresql" },
  { name: "Prisma", category: "Database", image: "https://cdn.simpleicons.org/prisma" },
  { name: "Redis", category: "Database", image: "https://cdn.simpleicons.org/redis" },

  { name: "Git", category: "Version Control", image: "https://cdn.simpleicons.org/git" },
  { name: "GitHub", category: "Version Control", image: "https://cdn.simpleicons.org/github" },
  { name: "Bitbucket", category: "Version Control", image: "https://cdn.simpleicons.org/bitbucket" },
  
  { name: "Photoshop", category: "Design", image: "https://img.icons8.com/color/144/adobe-photoshop.png" },
  { name: "Figma", category: "Design", image: "https://cdn.simpleicons.org/figma" },
  { name: "Framer Motion", category: "Design", image: "https://cdn.simpleicons.org/framer" },
  { name: "AWS", category: "Cloud", image: "https://img.icons8.com/color/144/amazon-web-services.png" },
  { name: "Google Cloud", category: "Cloud", image: "https://cdn.simpleicons.org/googlecloud" },
  { name: "Azure", category: "Cloud", image: "https://img.icons8.com/color/96/azure-1.png"},

  { name: "Vite", category: "Build Tool", image: "https://cdn.simpleicons.org/vite" },
  { name: "Docker", category: "DevOps", image: "https://cdn.simpleicons.org/docker" },
  { name: "Terraform", category: "DevOps", image: "https://cdn.simpleicons.org/terraform" },
  { name: "Jenkins", category: "DevOps", image: "https://cdn.simpleicons.org/jenkins" },
  { name: "Vercel", category: "Hosting", image: "https://cdn.simpleicons.org/vercel" },
  { name: "Hostinger", category: "Hosting", image: "https://cdn.simpleicons.org/hostinger" },
];

const easeQuint = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.03 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 160, damping: 19 },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.12 }
  }
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(skills.map((s) => s.category))];

  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter((s) => s.category === activeCategory);

  return (
    // Added `layout` and transition settings to the section container so it handles content shifts smoothly
    <motion.section 
      layout="position"
      transition={{ type: "spring", stiffness: 220, damping: 26 }}
      className="w-full max-w-7xl mx-auto py-20 px-6 sm:px-8 font-sans bg-zinc-50 rounded-[2.5rem] my-12 border border-zinc-200/60 shadow-sm overflow-hidden"
    >
      <div className="mx-auto max-w-full">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeQuint }}
          viewport={{ once: true }}
          className="mb-12 text-center max-w-xl mx-auto"
        >
          <span className="mb-3 inline-block px-3 py-1 bg-zinc-200/60 text-zinc-600 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase">
            Our Stack
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-950 mt-2">
            Expertise & Tools
          </h2>
        </motion.div>

        {/* Category Filter Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-3xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors duration-300 ${
                activeCategory === cat ? "text-white" : "text-zinc-600 hover:bg-zinc-200/50"
              }`}
            >
              {activeCategory === cat && (
                <motion.span
                  layoutId="activeCategoryIndicator"
                  className="absolute inset-0 bg-zinc-900 rounded-full z-0"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid Layout */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          // Removed `min-h-[300px]` to let the grid contract completely when small categories are loaded
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 items-start content-start"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                whileHover={{
                  y: -4,
                  borderColor: "rgba(24, 24, 27, 0.15)",
                  boxShadow: "0 10px 20px -10px rgba(0,0,0,0.04)"
                }}
                className="group flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-3 h-16 w-full overflow-hidden transition-all duration-300 cursor-pointer"
              >
                {/* Brand Icon Window */}
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-50 border border-zinc-100 group-hover:bg-zinc-100/50 overflow-hidden shrink-0 transition-colors duration-300">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    loading="lazy"
                    className="h-5 w-5 object-contain filter group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Meta Details */}
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-xs font-semibold text-zinc-900 tracking-tight leading-snug">
                    {skill.name}
                  </h3>
                  <p className="truncate text-[10px] text-zinc-400 font-medium mt-0.5 leading-none">
                    {skill.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;