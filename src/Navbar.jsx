import React from "react";
import { Hexagon, Search } from "lucide-react";

const Navbar = () => {
  const navItems = ["Home", "Services", "Products", "About", "Help"];

  return (
    <header
      className="h-22 w-full p-6 bg-[#f4f4f2]/25
      backdrop-blur-md
      border border-white/30
      shadow-lg"
    >
      <div className="h-full w-full flex items-center justify-between">
       <div className="flex items-center gap-4 cursor-pointer select-none">
      {/* Logo Icon */}
      <div className="flex items-center justify-center w-16 h-16">
        <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white shadow-md border border-slate-200">
          <Hexagon
            size={38}
            strokeWidth={2}
            className="text-blue-700"
          />
        </div>
      </div>

      {/* Logo Text */}
      <div className="leading-none">
        <h1 className="text-5xl font-black tracking-tight text-slate-900">
          Cryonix
        </h1>

        <p className="mt-2 text-sm font-semibold tracking-[0.45em] text-blue-700">
          INNOVATIONS
        </p>
      </div>
    </div>
        {/* Navigation */}
        <nav>
          <ul className="flex gap-24 text-xl font-semibold text-[#141414]">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="
                  relative
                  cursor-pointer
                  transition-all
                  duration-300
                  hover:text-[#121212]
                  hover:scale-105
                  after:content-['']
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-0.5
                  after:w-0
                  after:bg-[#227C8F]
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
