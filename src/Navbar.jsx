<motion.header
  initial={{ y: -100 }}
  animate={{
    y: 0,
    backgroundColor: scrolled
      ? "rgba(245,247,250,0.78)"
      : "rgba(255,255,255,0)",

    backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",

    borderBottom: scrolled
      ? "1px solid rgba(148,163,184,0.18)"
      : "1px solid transparent",

    boxShadow: scrolled
      ? "0 8px 40px rgba(15,23,42,.08)"
      : "0 0 0 rgba(0,0,0,0)",
  }}
  transition={{
    duration: 0.4,
    ease: "easeInOut",
  }}
  className="fixed top-0 left-0 z-50 w-full"
></motion.header>