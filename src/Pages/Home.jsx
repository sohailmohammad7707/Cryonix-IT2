import React from "react";
import Hero from "../components/Hero.jsx";
import Footer from "../components/Footer.jsx";
import Main from "../components/Main.jsx";
import Navbar from "../components/Navbar.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <Hero />
        <Main />      
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Home;
