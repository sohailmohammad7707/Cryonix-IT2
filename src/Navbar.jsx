import React from "react";
import { Hexagon } from "lucide-react";
import logo from "./assets/logo.png"

const Navbar = () => {
  const navItems = ["Home", "Services", "Products", "About", "Help"];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div
        className="
        flex
        items-center
        justify-between
        px-10
        py-4
        bg-white/40
        backdrop-blur-xl
        border border-white/50
        shadow-[0_8px_30px_rgba(0,0,0,0.05)]
      "
      >
        {/* Logo */}
        <div className="flex items-center gap-4 cursor-pointer">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"></div>

            <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-md">
              <Hexagon
                size={30}
                strokeWidth={2.2}
                className="text-blue-600"
              />
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">
              Cryonix
            </h1>

            <p className="text-[11px] font-semibold tracking-[0.45em] text-blue-600 uppercase">
              Innovations
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-12">
            {navItems.map((item) => (
              <li
                key={item}
                className="
                relative
                text-slate-700
                font-medium
                text-lg
                cursor-pointer
                transition-all
                duration-300
                hover:text-blue-600
                after:absolute
                after:left-0
                after:-bottom-2
                after:h-0.5
                after:w-0
                after:bg-blue-600
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

        {/* CTA Button */}
        <button
          className="
          px-6
          py-3
          rounded-full
          bg-blue-600
          text-white
          font-medium
          shadow-lg
          hover:scale-105
          hover:bg-blue-700
          transition-all
          duration-300
        "
        >
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Navbar;