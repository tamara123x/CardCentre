import { useNavigate } from "react-router-dom";
import AnimatedSection from "./animation"; 
import { motion } from "framer-motion";

export default function LandingPage() {
  const navigate = useNavigate();
  const backgrounds = [
  "/Images/background.svg",
  "/Images/background1.svg",
  "/Images/background2.svg",
];

const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];

  return (
    <main className="w-full bg-[#f6f8fb]">
      <AnimatedSection>
      {/* ================= HERO SECTION ================= */}
      <section className="relative mx-auto px-6 md:px-12 lg:px-28 py-10 md:py-28 flex flex-col lg:flex-row items-center gap-10 overflow-hidden">

        {/* Background image */}
        <div className="absolute inset-0 w-full h-full">
          <motion.img
            src={randomBg}
            alt="Background"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6 }}
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* HERO TEXT */}
        <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }} 
        className="relative z-10 flex-1"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-bold leading-tight md:leading-snug lg:leading-snug text-white">
            Innovative Identity & Payment Solutions for Africa’s Enterprises
          </h1>
          
          <p className="mt-4 text-[#9BC53D] text-base sm:text-lg md:text-2xl leading-relaxed max-w-xl">
            Leading provider of SIM, financial card, and identity
            solutions across Africa. Trusted by banks, telcos,
            and government institutions.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <button
              onClick={() => navigate("/about")}
              className="bg-[#9BC53D] text-white text-sm md:text-lg px-6 md:px-8 py-3 rounded-full font-medium hover:opacity-90 transition"
            >
              Learn More
            </button>

            <button
              onClick={() => navigate("/contact-us")}
              className="border border-[#9BC53D] text-sm md:text-lg text-[#9BC53D] px-6 md:px-8 py-3 rounded-full font-medium hover:bg-[#84c341] hover:text-white transition"
            >
              Contact Us
            </button>
          </div>
        </motion.div>

        {/* HERO IMAGES */}
        <div className="relative hidden lg:block z-10 w-[540px] h-[550px]">
          <motion.img
            src="/Images/hero1.svg"
            alt="hero1"
            className="absolute left-0 top-24 w-68 rounded-xl shadow-lg"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            src="/Images/hero2.svg"
            alt="hero2"
            className="absolute right-0 top-0 w-68 rounded-xl shadow-lg"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            src="/Images/hero4.svg"
            alt="hero4"
            className="absolute right-20 bottom-0 w-68 rounded-xl shadow-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </section>
      </AnimatedSection>

      <AnimatedSection>
      {/* ================= CORE SOLUTIONS ================= */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection className="text-2xl md:text-4xl font-bold text-[#0f172a]">
            Our Core Solutions
          </AnimatedSection>

          <AnimatedSection className="text-[#4B5563] text-base md:text-xl max-w-2xl mx-auto rounded-lg mt-3">
            Comprehensive identity and payment
            solutions tailored for Africa's leading enterprises
          </AnimatedSection>

          <AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 md:mt-14">
            {[
              {
                icon: "/Icons/sim.svg",
                title: "SIM Card Production",
                desc: "Advanced SIM manufacturing, distribution, and supply solutions for Africa's leading telecom operators.",
                link: "#sim",
              },
              {
                icon: "/Icons/fin.svg",
                title: "Financial Card Solutions",
                desc: "Certified ATM and debit card personalization services for banks and financial institutions.",
                link: "#financial",
              },
              {
                icon: "/Icons/id.svg",
                title: "Identity Card Management",
                desc: "Comprehensive ID solutions including citizen IDs, loyalty cards, and access control systems.",
                link: "#identity",
              },
              {
                icon: "/Icons/data.svg",
                title: "Data & Event Management",
                desc: "Event registration, badge printing, and digital attendance solutions for enterprise clients.",
                link: "#data",
              }
            
              ].map((item, index) => {
                const bgGradient =
                index === 0 || index === 2
                ? "bg-gradient-to-br from-[#9BC53D] to-[#4B5F1D]"
                : "bg-gradient-to-br from-[#0F172A] to-[#334F90]";

                return (
                  <div
                    key={index}
                    className={`${bgGradient} text-white px-6 md:px-8 py-10 rounded-xl text-left hover:shadow-md transition`}
                  >
                    <img src={item.icon} alt={item.title} className="mb-6 w-10 h-10" />
                    <AnimatedSection className="text-lg md:text-2xl lg:text-xl font-bold mb-2">{item.title}</AnimatedSection>
                    <AnimatedSection className="text-sm lg:mr-7 md:text-xl lg:text-base">{item.desc}</AnimatedSection>
                    <AnimatedSection>
                    <p
                      onClick={() => navigate(`/services${item.link}`)}
                      className="mt-4 text-sm md:text-xl lg:text-sm font-medium cursor-pointer"
                    >
                      Learn More &gt;
                    </p>
                    </AnimatedSection>
                  </div>
                );
              })}
          </div>
          </AnimatedSection>
        </div>
      </section>
      </AnimatedSection>

      <AnimatedSection>
      {/* ================= CERTIFIED & TRUSTED ================= */}
      <section className="bg-gradient-to-br from-[#0F172A] to-[#0F172A] py-12 md:py-20">

        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Certified & Trusted
          </h2>
          </AnimatedSection>
      
          <AnimatedSection>
          <p className="text-gray-300 text-base md:text-xl mt-3">
            Accredited by leading global payment networks and industry authorities
          </p>
          </AnimatedSection>

          <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12">

            <div className="bg-white rounded-xl  py-4 md:py-8 px-6 flex flex-col justify-center items-center">
              <img src="/Icons/VERVE.svg" alt="Verve" className="h-8 md:h-auto w-auto object-contain" />
              <p className="text-[#6B7280] md:font-semibold mt-2 text-sm">
                Certified Partner
              </p>
            </div>

            <div className="bg-white rounded-xl py-4 md:py-8 px-6 flex flex-col justify-center items-center">
              <img src="/Icons/PCIDSS.svg" alt="PCI DSS" className="h-12 md:h-16 object-contain" />
              <p className="text-[#6B7280] md:font-semibold mt-2 text-sm">
                PCIDSS
              </p>
            </div>

            <div className="bg-white rounded-xl py-4 md:py-8 px-6 flex flex-col justify-center items-center">
              <img src="/Icons/NDPR.svg" alt="NDPR" className="h-12 md:h-16 object-contain" />
              <p className="text-[#6B7280] md:font-semibold mt-2 text-sm">
                NDPR
              </p>
            </div>

            <div className="bg-white rounded-xl py-4 md:py-8 px-6 flex flex-col justify-center items-center">
              <img src="/Icons/AFRIGO.svg" alt="AFRIGO" className="h-12 md:h-14 object-contain" />
              <p className="text-[#6B7280] md:font-semibold mt-2 text-sm">
                Certified Partner
              </p>
            </div>
          </div>
          </AnimatedSection>
        </div>

      </section>
      </AnimatedSection>
    </main>
  );
}