import React from "react";
import { motion } from "framer-motion";

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
  
  // Alternative fallback URLs for the broken ones:
  { name: "Photoshop", category: "Design", image: "https://img.icons8.com/color/144/adobe-photoshop.png" },
  { name: "Figma", category: "Design", image: "https://cdn.simpleicons.org/figma" },
  { name: "Framer Motion", category: "Design", image: "https://cdn.simpleicons.org/framer" },
  { name: "AWS", category: "Cloud", image: "https://img.icons8.com/color/144/amazon-web-services.png" },

  { name: "Google Cloud", category: "Cloud", image: "https://cdn.simpleicons.org/googlecloud" },
  { name: "Azure", category: "Cloud", image: "https://img.icons8.com/color/144/microsoft-azure.png" },
  
  { name: "Vite", category: "Build Tool", image: "https://cdn.simpleicons.org/vite" },
  { name: "Docker", category: "DevOps", image: "https://cdn.simpleicons.org/docker" },
  { name: "Terraform", category: "DevOps", image: "https://cdn.simpleicons.org/terraform" },
  { name: "Jenkins", category: "DevOps", image: "https://cdn.simpleicons.org/jenkins" },
  { name: "Vercel", category: "Hosting", image: "https://cdn.simpleicons.org/vercel" },
  { name: "Hostinger", category: "Hosting", image: "https://cdn.simpleicons.org/hostinger" },
];
// Parent animation
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// Card animation
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
};

const SkillCard = ({ skill }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{
      y: -5,
      scale: 1.03,
    }}
    className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-3 shadow-sm transition-all duration-300 cursor-pointer hover:shadow-lg"
  >
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 overflow-hidden shrink-0">
      <img
        src={skill.image}
        alt={skill.name}
        className="h-7 w-7 object-contain"
      />
    </div>

    <div className="min-w-0">
      <h3 className="truncate text-sm font-semibold text-zinc-900">
        {skill.name}
      </h3>
      <p className="truncate text-xs text-zinc-500">
        {skill.category}
      </p>
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section className="w-[90%] py-12">
      <div className="mx-auto max-w-[1600px] px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
            WE OWN SKILLS
          </span>

          <h2 className="text-5xl font-light text-zinc-900">
            See Our Skills
          </h2>
        </motion.div>

        {/* Skills Grid - 6 Columns */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;