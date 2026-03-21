import { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false); 

  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-[#9BC53D] font-semibold"
      : "hover:text-[#9BC53D] transition";

  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-lg fixed top-0 left-0 z-50">
      <div className="mx-auto px-6 md:px-6 lg:px-20 py-2">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/">
            <img
              src="/Icons/logo.svg"
              alt="CardCentre Nigeria Logo"
              className="w-10 h-10 md:w-12 md:h-12 object-contain mr-2"
            />
            </NavLink>

            <div className="text-xl md:text-xl lg:text-3xl font-extrabold">
              <span className="text-[#9BC53D]">CardCentre Nigeria</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 md:space-x-4 lg:space-x-8 text-sm lg:text-base font-semibold text-[#374151]">
            <NavLink to="/" className={linkStyle}>Home</NavLink>
            <div className="relative">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 text-[#374151] font-semibold focus:outline-none hover:text-[#9BC53D] transition focus:outline-none"
              >
                About Us
                <span className="text-xs">{isOpen ? "▲" : "▼"}</span>
              </button>

              {/* Dropdown */}
              {isOpen && (
                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-48 z-50">
                  <NavLink
                    to="/about"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#9BC53D1A]"
                    onClick={() => setIsOpen(false)} 
                  >
                    About Us
                  </NavLink>

                  <NavLink
                    to="/Bod"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#9BC53D1A]"
                    onClick={() => setIsOpen(false)}
                  >
                    Board of Directors
                  </NavLink>

                  <NavLink
                    to="/Team"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#9BC53D1A]"
                    onClick={() => setIsOpen(false)}
                  >
                    Management team
                  </NavLink>
                </div>
             )}
            </div>
            <NavLink to="/services" className={linkStyle}>Services</NavLink>
            <NavLink to="/resources" className={linkStyle}>Resources</NavLink>
            <NavLink to="/career" className={linkStyle}>Careers</NavLink>

            <NavLink
              to="/contact-us"
              className="bg-[#9BC53D] text-white px-6 md:px-4 lg:px-8 py-2 rounded-full font-medium hover:bg-[#5e8607] transition"
            >
              Contact Us
            </NavLink>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col justify-center items-center space-y-1 p-2"
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
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-6 space-y-2 text-base text-gray-700 shadow-md">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md transition hover:bg-[#9BC53D1A] ${
                isActive ? "text-[#9BC53D] font-semibold" : ""
              }`
            }
            onClick={() => { setIsOpen(false); setAboutOpen(false); }}
          >
            Home
          </NavLink>

          {/* About Us */}
          <div className="relative">
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="w-full text-left flex justify-between items-center px-3 py-2 rounded-md hover:bg-[#9BC53D1A] transition"
            >
              About Us
              <span className="text-xs">{aboutOpen ? "▲" : "▼"}</span>
            </button>

            {aboutOpen && (
              <div className="pl-4 mt-1 space-y-1">

                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md transition hover:bg-[#9BC53D1A] ${
                      isActive ? "text-[#9BC53D] font-semibold" : ""
                    }`
                  }
                  onClick={() => { setIsOpen(false); setAboutOpen(false); }}
                >
                  About Us
                </NavLink>

                <NavLink
                  to="/Bod"
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md transition hover:bg-[#9BC53D1A] ${
                      isActive ? "text-[#9BC53D] font-semibold" : ""
                    }`
                  }
                  onClick={() => { setIsOpen(false); setAboutOpen(false); }}
                >
                  Board of Directors
                </NavLink>

                <NavLink
                  to="/Team"
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md transition hover:bg-[#9BC53D1A] ${
                      isActive ? "text-[#9BC53D] font-semibold" : ""
                    }`
                  }
                  onClick={() => { setIsOpen(false); setAboutOpen(false); }}
                >
                  Management Team
                </NavLink>

              </div>
            )}
          </div>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md transition hover:bg-[#9BC53D1A] ${
                isActive ? "text-[#9BC53D] font-semibold" : ""
              }`
            }
            onClick={() => { setIsOpen(false); setAboutOpen(false); }}
          >
            Services
          </NavLink>

          <NavLink
            to="/resources"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md transition hover:bg-[#9BC53D1A] ${
                isActive ? "text-[#9BC53D] font-semibold" : ""
              }`
            }
            onClick={() => { setIsOpen(false); setAboutOpen(false); }}
          >
            Resources
          </NavLink>

          <NavLink
            to="/career"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md transition hover:bg-[#9BC53D1A] ${
                isActive ? "text-[#9BC53D] font-semibold" : ""
              }`
            }
            onClick={() => { setIsOpen(false); setAboutOpen(false); }}
          >
            Careers
          </NavLink>

          <NavLink
            to="/contact-us"
            className="block w-full bg-[#9BC53D] text-white py-2 rounded-full text-center font-medium mt-3"
            onClick={() => { setIsOpen(false); setAboutOpen(false); }}
          >
            Contact Us
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Nav;