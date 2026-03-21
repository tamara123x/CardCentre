import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "./animation";

const Footer = () => {
  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-[#9BC53D] font-semibold"
      : "hover:text-[#9BC53D] transition";

  const navigate = useNavigate();

  return (
    <footer className="w-full bg-[#0F172A] border-t border-gray-200 mt-20">
      <AnimatedSection className="max-w-8xl mx-auto py-12 px-6 md:px-12 lg:px-24">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pb-4 gap-10">

          {/* Logo & Description */}
          <AnimatedSection direction="left">
            <div className="text-xl md:text-2xl font-bold">
              <span className="text-[#9BC53D]">CardCentre Nigeria</span>
            </div>

            <AnimatedSection className="mt-4 mb-6 text-sm md:text-base lg:pr-12 text-[#9CA3AF] leading-6">
              Leading provider of smart identity and payment solutions across Africa.
            </AnimatedSection>

            <AnimatedSection className="flex items-center gap-5 mt-4">
              <a href="https://www.linkedin.com/company/cardcentre-nigeria-limited1/" target="_blank" rel="noopener noreferrer">
                <img src="/Icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5 md:w-6 md:h-6" />
              </a>

              <a href="https://x.com/cardcentre_ng?s=21" target="_blank" rel="noopener noreferrer">
                <img src="/Icons/twitter.svg" alt="Twitter" className="w-5 h-5 md:w-6 md:h-6" />
              </a>

              <a href="https://wa.link/xa8szo" target="_blank" rel="noopener noreferrer">
                <img src="/Icons/whatsapp.svg" alt="Whatsapp" className="w-5 h-5 md:w-6 md:h-6" />
              </a>

              <a href="https://www.instagram.com/cardcentrenigltd?igsh=Nmw3OGdrcnduZWNt" target="_blank" rel="noopener noreferrer">
                <img src="/Icons/instagram.svg" alt="Instagram" className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </AnimatedSection>
          </AnimatedSection>

          {/* Quick Links */}
          <AnimatedSection direction="right">
            <h3 className="text-sm md:text-base font-bold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm md:text-base text-[#D1D5DB]">
              <li><NavLink to="/" className={linkStyle}>Home</NavLink></li>
              <li><NavLink to="/about" className={linkStyle}>About Us</NavLink></li>
              <li><NavLink to="/bod" className={linkStyle}>Board</NavLink></li>
              <li><NavLink to="/team" className={linkStyle}>Managemant</NavLink></li>
              <li><NavLink to="/services" className={linkStyle}>Services</NavLink></li>
              <li><NavLink to="/resources" className={linkStyle}>Resources</NavLink></li>
              <li><NavLink to="/career" className={linkStyle}>Careers</NavLink></li>
              <li><NavLink to="/contact-us" className={linkStyle}>Contact</NavLink></li>
            </ul>
          </AnimatedSection>

          {/* Services */}
          <AnimatedSection direction="left">
            <h3 className="text-sm md:text-base font-bold text-white mb-4">
              Our Services
            </h3>

            <ul className="space-y-2 text-sm md:text-base text-[#D1D5DB]">
              <li className="cursor-pointer hover:text-white" onClick={() => navigate("/services")}>
                SIM Card Production
              </li>
              <li className="cursor-pointer hover:text-white" onClick={() => navigate("/services")}>
                Financial Cards
              </li>
              <li className="cursor-pointer hover:text-white" onClick={() => navigate("/services")}>
                Identity Solutions
              </li>
              <li className="cursor-pointer hover:text-white" onClick={() => navigate("/services")}>
                Event Management
              </li>
            </ul>
          </AnimatedSection>

          {/* Contact */}
          <AnimatedSection direction="up">
            <h3 className="text-sm md:text-base font-bold text-white mb-4">
              Contact Us
            </h3>

            <ul className="space-y-3 text-sm md:text-base text-[#D1D5DB]">
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
          </AnimatedSection>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-7 border-t border-gray-300 text-sm md:text-base text-[#9CA3AF]">
          <AnimatedSection direction="down"  className="flex flex-col md:flex-row justify-between items-center gap-4">

            <div className="text-center md:text-left">
              © {new Date().getFullYear()} CardCentre Nigeria Limited. All rights reserved.
            </div>

            <div  className="flex flex-wrap justify-center gap-6 md:gap-6">
              <NavLink to="/policy" className="hover:text-[#698ac3] transition">
                Privacy Policy
              </NavLink>

              <NavLink to="/policy" className="hover:text-[#698ac3] transition">
                Cookie Policy
              </NavLink>

              <NavLink to="/policy" className="hover:text-[#698ac3] transition">
                Terms of Service
              </NavLink>
            </div>

          </AnimatedSection>
        </div>

      </AnimatedSection>
    </footer>
  );
};

export default Footer;