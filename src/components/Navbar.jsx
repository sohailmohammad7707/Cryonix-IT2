import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "../assets/Logo1.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    "Home",
    "Services",
    "Solutions",
    "Portfolio",
    "About",
    "Contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{
          y: -100,
          width: "100%",
          top: 0,
          borderRadius: "0px",
        }}
        animate={{
          y: 0,
          width: scrolled ? "92%" : "100%",
          top: scrolled ? 16 : 0,
          borderRadius: scrolled ? "9999px" : "0px",

          backgroundColor: scrolled
            ? "rgba(245,247,250,0.78)"
            : "rgba(255,255,255,0)",

          backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",

          border: scrolled
            ? "1px solid rgba(148,163,184,0.18)"
            : "1px solid transparent",

          boxShadow: scrolled
            ? "0 10px 40px rgba(15,23,42,0.08)"
            : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{
          duration: 0.45,
          ease: "easeInOut",
        }}
        className="fixed left-1/2 z-50 h-20 -translate-x-1/2"
      >
        <div className=" flex h-full w-full items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.img
              src={Logo}
              alt="Logo"
              animate={{
                height: scrolled ? 34 : 42,
              }}
              transition={{ duration: 0.3 }}
              className="w-auto object-contain"
            />

            <div>
              <motion.h1
                animate={{
                  fontSize: scrolled ? "20px" : "22px",
                }}
                transition={{ duration: 0.3 }}
                className="font-poppins font-semibold text-slate-900"
              >
                Cryonix
              </motion.h1>

              <p className="-mt-1 text-xs tracking-[0.2em] text-slate-500">
                Web Designer
              </p>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                 whileHover={{ y: -2 }} className="group relative font-medium text-slate-700" >
                {item}

                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden lg:flex items-center">
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-white shadow-lg"
            >
              Get Started
              <ArrowRight size={18} />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
          >
            {mobileOpen ? (
              <X size={28} className="text-slate-800" />
            ) : (
              <Menu size={28} className="text-slate-800" />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed left-4 right-4 top-24 z-40 rounded-3xl border border-white/30 bg-white/80 p-6 shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-5">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-slate-700"
                >
                  {item}
                </a>
              ))}

              <button className="mt-3 rounded-full bg-slate-900 py-3 text-white">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;