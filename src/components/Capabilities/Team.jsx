import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaGlobe } from "react-icons/fa";
import Mitesh from "../../assets/mitesh.jpeg";
import Moin from "../../assets/moin.png";
import Daksh from "../../assets/daksh.jpeg";

const members = [
  {
    id: 1,
    name: "Daksh Patel",
    role: "Co-Founder & Hardware Lead",
    image: Daksh,
    socials: {
      linkedin: "https://linkedin.com/in/daksh-patel",
      github: "https://github.com/daksh-patel",
      portfolio: "https://daksh.dev"
    }
  },
  {
    id: 2,
    name: "Mitesh Patel",
    role: "Co-Founder & Software Lead",
    image: Mitesh,
    socials: {
      linkedin: "https://linkedin.com/in/mitesh-patel",
      github: "https://github.com/mitesh-patel",
      portfolio: "https://mitesh.dev"
    }
  },
  {
    id: 3,
    name: "Tirth",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=800&auto=format&fit=crop&q=80",
    socials: {
      linkedin: "#",
      github: "https://github.com/tirth",
      portfolio: "#"
    }
  },
  {
    id: 4,
    name: "Moin Chhipa",
    role: "Backend Developer",
    image: Moin,
    socials: {
      linkedin: "https://linkedin.com/in/moin-chhipa",
      github: "https://github.com/moin-chhipa",
      portfolio: "#"
    }
  },
];

// Animation configurations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each card's animation start
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  },
};

const Team = () => {
  return (
    <section className="relative overflow-hidden bg-gray-100 px-6 py-28 dark:bg-[#ababab] lg:px-[8%]">
      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative z-10">
        {/* Animated Heading */}
        <motion.div 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white md:text-6xl lg:text-7xl">
            Meet Our <span className="text-sky-600 dark:text-sky-700">Team</span>
          </h2>
          <motion.div 
            className="mx-auto mt-6 h-1.5 rounded-full bg-sky-600 dark:bg-sky-700"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }} // width of w-24
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
        </motion.div>

        {/* Animated Cards Grid */}
        <motion.div 
          className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {members.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative flex flex-col justify-end overflow-hidden rounded-[30px] border border-gray-200 dark:border-white/10 bg-gray-900 shadow-xl hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
            >
              {/* Image Container */}
              <div className="relative h-[420px] w-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="text-2xl font-bold text-white tracking-wide">
                  {member.name}
                </h3>

                <p className="mt-1 text-xs font-semibold uppercase tracking-[2px] text-sky-400">
                  {member.role}
                </p>

                {/* Social Icons with subtle micro-animations */}
                <div className="mt-5 flex gap-3">
                  {member.socials.linkedin && (
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-sky-700"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <FaLinkedinIn size={16} />
                    </motion.a>
                  )}

                  {member.socials.github && (
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={member.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-sky-500"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <FaGithub size={16} />
                    </motion.a>
                  )}

                  {member.socials.portfolio && (
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={member.socials.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-sky-700"
                      aria-label={`${member.name}'s Portfolio`}
                    >
                      <FaGlobe size={16} />
                    </motion.a>
                  )}
                </div>

                {/* Action Button */}
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 block w-full text-center rounded-xl bg-white py-3 font-semibold text-gray-900 transition-colors duration-300 hover:bg-sky-700 hover:text-white"
                >
                  Connect →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;