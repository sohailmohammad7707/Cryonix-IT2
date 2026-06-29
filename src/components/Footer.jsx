import React from "react";
import { Hexagon, Mail, Phone, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="text-8xl text-center pt-10 p-4 font-bold font-poppins">CRYONIX IT</div>
      <div className="max-w-7xl mx-auto px-6 lg:px-1 0 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-5 text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                <Hexagon size={28} className="text-blue-600" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">Cryonix</h2>
                <p className="text-[10px] tracking-[0.35em] uppercase text-blue-600">
                  Innovations
                </p>
              </div>
            </div>

            <p className="text-slate-300 leading-7">
              We build scalable software, AI-powered applications, cloud
              platforms, and digital solutions that help businesses innovate and
              grow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-5">Quick Links</h3>

            <ul className="space-y-3 text-slate-300">
              {[
                "Home",
                "Services",
                "Solutions",
                "Portfolio",
                "About",
                "Contact",
              ].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer transition hover:text-blue-600"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-5">Services</h3>

            <ul className="space-y-3 text-slate-300">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>Cloud Solutions</li>
              <li>AI & Machine Learning</li>
              <li>UI / UX Design</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-5">Contact</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-blue-600">
                <Mail size={18} className="text-blue-600" />
                info@cryonixit.com
              </div>

              <div className="flex items-center gap-3 text-blue-600">
                <Phone size={18} className="text-blue-600" />
                +91 98765 43210
              </div>

              <div className="flex items-start gap-3 text-blue-600">
                <MapPin size={18} className="text-blue-600 mt-1 shrink-0" />
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              {[
                <FaFacebookF />,
                <FaLinkedinIn />,
                <FaGithub />,
                <FaXTwitter />,
              ].map((icon, index) => (
                <div
                  key={index}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white cursor-pointer">
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-14 border-t border-slate-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Cryonix IT. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-400 hover:text-blue-600 transition">
              Privacy Policy
            </a>

            <a href="#" className="text-slate-500 hover:text-blue-600 transition">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
