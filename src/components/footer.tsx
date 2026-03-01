import { useState } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0F172A] border-t border-gray-200 mt-20 bottom-0 left-0 z-50">
      <div className="max-w-8xl mx-auto py-12 px-28">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 pb-4 gap-12">

          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold">
              <span className="text-[#9BC53D]">CardCentre</span>
              <span className="text-white ml-1 font-medium">Nigeria</span>
            </h2>

            <p className="mt-4 text-lg text-[#9CA3AF] leading-6">
              Leading provider of smart identity and payment solutions across Africa.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <img src="/Icons/facebook.svg" className="w-6 h-6" />
            <img src="/Icons/twitter.svg" className="w-6 h-6" />
            <img src="/Icons/linkedin.svg" className="w-6 h-6" />
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-m font-bold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-m text-[#D1D5DB]">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-m font-bold text-white mb-4">
              Our Services
            </h3>
            <ul className="space-y-2 text-m text-[#D1D5DB]">
              <li><a href="#">SIM Card Production</a></li>
              <li><a href="#">Financial Cards</a></li>
              <li><a href="#">Identity Solutions</a></li>
              <li><a href="#">Event Management</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-m font-bold text-white mb-4">
              Contact Us
            </h3>
            
            <ul className="space-y-2 text-m text-[#D1D5DB]">

            <li className="flex items-start gap-3">
              <img src="/Icons/locate.svg" className="w-5 h-5 mt-1" />
              <span>8, Louis Solomon Close, Victoria Island, Lagos</span>
            </li>

            <li className="flex items-center gap-3">
              <img src="/Icons/phone.svg" className="w-5 h-5" />
              <span>+234 808 034 5389</span>
            </li>

            <li className="flex items-center gap-3">
              <img src="/Icons/email2.svg" className="w-5 h-5" />
              <span>info@cardcentre.com.ng</span>
            </li>
           </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-7 border-t border-gray-300 text-m text-[#9CA3AF]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            {/* Left Side */}
            <div>
              © {new Date().getFullYear()} CardCentre Nigeria Limited. All rights reserved.
            </div>

            {/* Right Side */}
            <div className="flex space-x-8">
              <a href="#" className="hover:text-[#698ac3] transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#698ac3] transition">
                Cookie Policy
              </a>
              <a href="#" className="hover:text-[#698ac3] transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;