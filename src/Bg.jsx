import Bg from "./assets/Best2.mp4";
import Navbar from "./Navbar";
import { Rocket } from "lucide-react";

const HeroImg = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={Bg} type="video/mp4" />
      </video>

      {/* Optional Dark Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full">
        
        {/* Navbar */}
        <div>
          <Navbar />
        </div>

        {/* Hero Section */}
        <div className="flex items-center h-[80vh] px-8">
          <div className="max-w-3xl flex flex-col gap-8">
            
            <div>
              <div className="font-poppins py-4 text-3xl font-semibold text-black">
                <p>Welcome to Cryonix IT</p>
              </div>

              <h1 className="text-6xl font-poppins font-bold leading-tight text-black">
                Build Scalable <br />

                <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Software&nbsp;
                </span>

              
                For Modern Businesses
              </h1>
            </div>

            <div>
              <p className="mb-4 font-merriweather text-xl text-[#101010] leading-relaxed">
                We build high-performance web applications, cloud solutions,
                and AI-powered products that help businesses grow faster.
              </p>

              <p className="font-merriweather text-xl text-[#101010] leading-relaxed">
                Get Started and enter the next generation of IT solutions.
              </p>
            </div>

            <div className="flex gap-4 mt-2">
               <button
                className="
                  group
                  flex
                  items-center
                  gap-2
                  text-xl
                  text-white
                  bg-[#2563eb]
                  py-3
                  px-10
                  rounded-full
                  transition-all
                  duration-300
                  hover:bg-[#1d4ed8]
                  hover:scale-105
                  shadow-lg
                "
              >
                <Rocket
                  size={22}
                  className="transition-transform duration-700 group-hover:translate-x-1"
                />
                Get Started
              </button>
              <button
                className="
                  text-xl
                  text-[#121212]
                  border-2
                  border-[#2563eb]
                  py-3
                  px-10
                  rounded-full
                  transition-all
                  duration-300
                  hover:bg-[#2563eb]
                  hover:text-white
                "
              >
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
