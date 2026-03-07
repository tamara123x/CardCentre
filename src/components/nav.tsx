import { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-[#9BC53D] font-semibold"
      : "hover:text-[#9BC53D] transition";

  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-lg fixed top-0 left-0 z-50">
      <div className="mx-auto px-20 py-2">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center">
            <img src="/Icons/logo.svg" alt="CardCentre Nigeria Logo" className="w-14 h-14 object-contain mr-3" />
            <div className="text-3xl font-extrabold">
              <span className="text-[#9BC53D]">CardCentre</span>
              <span className="text-[#0F172A] ml-1 font-medium">Nigeria</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-m font-semibold text-[#374151]">
            <NavLink to="/" className={linkStyle}>Home</NavLink>
            <NavLink to="/about" className={linkStyle}>About Us</NavLink>
            <NavLink to="/services" className={linkStyle}>Services</NavLink>
            <NavLink to="/resources" className={linkStyle}>Resources</NavLink>
            <NavLink to="/career" className={linkStyle}>Careers</NavLink>

            <NavLink
              to="/contact-us"
              className="bg-[#9BC53D] text-white px-8 py-2 rounded-full font-medium hover:bg-[#5e8607] transition"
            >
              Contact Us
            </NavLink>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col justify-center items-center space-y-1"
            >
              <span className="w-6 h-0.5 bg-gray-800"></span>
              <span className="w-6 h-0.5 bg-gray-800"></span>
              <span className="w-6 h-0.5 bg-gray-800"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-8 py-6 space-y-5 text-sm text-gray-600">
          <NavLink to="/" className="block" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" className="block" onClick={() => setIsOpen(false)}>About Us</NavLink>
          <NavLink to="/services" className="block" onClick={() => setIsOpen(false)}>Services</NavLink>
          <NavLink to="/resources" className="block" onClick={() => setIsOpen(false)}>Resources</NavLink>
          <NavLink to="/career" className="block" onClick={() => setIsOpen(false)}>Careers</NavLink>

          <NavLink
            to="/contact-us"
            className="block w-full bg-green-500 text-white py-2 rounded-full text-center"
          >
            Contact Us
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Nav;