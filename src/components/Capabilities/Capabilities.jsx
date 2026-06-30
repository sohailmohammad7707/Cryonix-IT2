import React from "react";

const features = [
  {
    id: 1,
    tag: "CORE FEATURE",
    title: "AI & Automation",
    desc: "Build intelligent workflows powered by AI to improve business productivity.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
  },
  {
    id: 2,
    tag: "CORE FEATURE",
    title: "Web & Mobile Systems",
    desc: "Modern responsive applications built with scalable technologies.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
  },
  {
    id: 3,
    tag: "CORE FEATURE",
    title: "Security First",
    desc: "Secure architecture, authentication and enterprise level protection.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
  },
];

const Features = () => {
  return (
    <section className="relative overflow-hidden bg-[#ababab] py-28 px-[8%]">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-100"
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
        <h2 className="text-center text-5xl md:text-7xl font-extrabold text-white">
          Core <span className="text-sky-400">Capabilities</span>
        </h2>

        {/* Underline */}
        <div className="w-22.5 h-1.5 bg-sky-400 rounded-full mx-auto mt-5 mb-16" />

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {features.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-[35px] border border-white/10 bg-[#11182a] transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_70px_rgba(0,0,0,.4)]"
            >
              {/* Image */}
              <div className="relative h-65 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-30 bg-linear-to-t from-[#11182a] to-transparent" />

                {/* Badge */}
                <span className="absolute top-5 left-5 rounded-full border border-white/10 bg-white/15 px-5 py-2 text-xs font-bold tracking-[2px] text-white backdrop-blur-md">
                  {item.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-9">
                <div className="mb-6 h-1.25 w-13.75 rounded-full bg-sky-400" />

                <h3 className="mb-5 text-3xl lg:text-[38px] font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-lg leading-8 text-slate-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;