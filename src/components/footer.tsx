import { NavLink } from "react-router-dom";

const Footer = () => {
     const linkStyle = ({ isActive }: { isActive: boolean }) =>
      isActive
        ? "text-[#9BC53D] font-semibold"
        : "hover:text-[#9BC53D] transition";
  

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
              <img src="/Icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
            <img src="/Icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
            <img src="/Icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-m font-bold text-white mb-4">
              Quick Links
            </h3>
              <ul className="space-y-2 text-m text-[#D1D5DB]">
                <li><NavLink to="/" className={linkStyle}>Home</NavLink></li>
                <li><NavLink to="/about" className={linkStyle}>About Us</NavLink></li>
                <li><NavLink to="/services" className={linkStyle}>Services</NavLink></li>
                <li><NavLink to="/resources" className={linkStyle}>Resources</NavLink></li>
                <li><NavLink to="/career" className={linkStyle}>Careers</NavLink></li>
                <li><NavLink to="/contact-us" className={linkStyle}>Contact</NavLink></li>
              </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-m font-bold text-white mb-4">
              Our Services
            </h3>
            <ul className="space-y-2 text-m text-[#D1D5DB]">
              <li>SIM Card Production</li>
              <li>Financial Cards</li>
              <li>Identity Solutions</li>
              <li>Event Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-m font-bold text-white mb-4">
              Contact Us
            </h3>
            
            <ul className="space-y-2 text-m text-[#D1D5DB]">

            <li className="flex items-start gap-3">
              <img src="/Icons/locate.svg" alt="Map" className="w-5 h-5 mt-1" />
              <span>8, Louis Solomon Close, Victoria Island, Lagos</span>
            </li>

            <li className="flex items-center gap-3">
              <img src="/Icons/phone.svg" alt="Phone" className="w-5 h-5" />
              <span>+234 808 034 5389</span>
            </li>

            <li className="flex items-center gap-3">
              <img src="/Icons/email2.svg" alt="Email" className="w-5 h-5" />
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
                  <NavLink to="/privacy-policy" className="hover:text-[#698ac3] transition">
                    Privacy Policy
                  </NavLink>
                  <NavLink to="/cookie-policy"className="hover:text-[#698ac3] transition">
                    Cookie Policy
                  </NavLink>
                  <NavLink to="/terms-of-service"className="hover:text-[#698ac3] transition">
                    Terms of Service
                  </NavLink>
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;