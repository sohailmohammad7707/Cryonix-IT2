import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "../assets/logo1.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-zinc-50 text-zinc-600 border-t border-zinc-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-zinc-200 p-1 shadow-sm">
                <img src={Logo} alt="Cryonix Logo" className="object-contain" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-zinc-900 tracking-tight leading-tight">Cryonix</h2>
                <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-blue-600">
                  Innovations
                </p>
              </div>
            </div>

            <p className="text-sm text-zinc-500 leading-relaxed">
              We build scalable software, AI-powered applications, cloud
              platforms, and digital solutions that help businesses innovate and
              grow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm">
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
                  className="cursor-pointer transition-colors duration-200 hover:text-blue-600 text-zinc-500"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-5">Services</h3>
            <ul className="space-y-3 text-sm text-zinc-500">
              {["Web Development", "Mobile App Development", "Cloud Solutions", "AI & Machine Learning", "UI / UX Design"].map((service) => (
                <li key={service} className="cursor-pointer transition-colors duration-200 hover:text-blue-600">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-5">Contact</h3>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-center gap-3 text-zinc-600 hover:text-blue-600 transition-colors cursor-pointer">
                <Mail size={16} className="text-blue-600 shrink-0" />
                <span>info@cryonixit.com</span>
              </div>

              <div className="flex items-center gap-3 text-zinc-600 hover:text-blue-600 transition-colors cursor-pointer">
                <Phone size={16} className="text-blue-600 shrink-0" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-start gap-3 text-zinc-600">
                <MapPin size={16} className="text-blue-600 mt-0.5 shrink-0" />
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {[
                <FaFacebookF size={14} />,
                <FaLinkedinIn size={14} />,
                <FaGithub size={14} />,
                <FaXTwitter size={14} />,
              ].map((icon, index) => (
                <div
                  key={index}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-zinc-200 text-zinc-500 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:text-white hover:border-blue-600 cursor-pointer"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Big Brand Watermark */}
        <div className="text-[13vw] font-black text-center text-zinc-200/80 select-none tracking-tighter leading-none pt-12 border-t border-zinc-200/60 mt-16 font-poppins">
          CRYONIX IT
        </div>

        {/* Bottom Bar */}
        <div className="mt-4 pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>
            © {new Date().getFullYear()} Cryonix IT. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;