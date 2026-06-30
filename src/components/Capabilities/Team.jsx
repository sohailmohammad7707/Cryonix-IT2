import React from "react";
import { FaLinkedinIn, FaGithub, FaGlobe } from "react-icons/fa";
import Mitesh from "../../assets/mitesh.jpeg";
import Moin from "../../assets/moin.png";
import Daksh from "../../assets/daksh.jpeg";

const members = [
  {
    id: 1,
    name: "Daksh Patel",
    role: "Co-Founder & Hardware Lead",
    image:Daksh,
  },
  {
    id: 2,
    name: "Mitesh Patel",
    role: "Co-Founder & Software Lead",
    image:Mitesh,
  },
  {
    id: 3,
    name: "Tirth",
    role: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Moin Chhipa",
    role: "BackEnd Developer",
    image:Moin,
  },
  
];

const Team = () => {
  return (
    <section className="relative overflow-hidden bg-[#ababab] px-6 py-28 lg:px-[8%]">
      {/* Grid Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative z-10">
        {/* Heading */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-extrabold text-black md:text-6xl lg:text-7xl">
            Meet Our <span className="text-sky-700">Team</span>
          </h2>

          <div className="mx-auto mt-6 h-1.5 w-24 rounded-full bg-sky-700" />
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {members.map((member) => (
            <div
              key={member.id}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#111827] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(0,0,0,.45)]"
            >
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="h-107.5 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-[#070b18] via-[#070b18]/40 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-3xl font-bold text-white">
                  {member.name}
                </h3>

                <p className="mt-2 text-sm font-semibold uppercase tracking-[2px] text-sky-400">
                  {member.role}
                </p>

                {/* Social Icons */}
                <div className="mt-6 flex gap-3">
                  <a
                    href="#"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-sky-400"
                  >
                    <FaLinkedinIn />
                  </a>

                  <a
                    href="#"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-sky-400"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="#"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-sky-400"
                  >
                    <FaGlobe />
                  </a>
                </div>

                {/* Button */}
                <button className="mt-6 w-full rounded-xl bg-white py-3 font-semibold text-gray-900 transition-all duration-300 hover:bg-sky-400 hover:text-white">
                  Connect →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;