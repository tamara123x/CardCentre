import { useNavigate } from "react-router-dom";
import AnimatedSection from "./animation";

export default function About() {
  const navigate = useNavigate();

  return (
    <main className="w-full bg-[#FFFFFF]">

      {/* ================= ABOUT SECTION ================= */}
      <AnimatedSection direction="up">
      <section className="py-4 md:py-8 bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center">
            About CardCentre Nigeria
          </h2>
        </div>
      </section>
      </AnimatedSection>

      {/* ================= COMPANY INTRO ================= */}
      <section className="pb-12">
        <div className="grid max-w-7xl mx-auto lg:grid-cols-2 gap-10 md:gap-12 mt-10 items-center px-6">

          <AnimatedSection direction="left" className="text-base md:text-lg lg:text-xl">
            <AnimatedSection>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Leading the Smart Card Revolution in Africa
            </h3>
            </AnimatedSection>
 
            <AnimatedSection className="text-justify space-y-4 md:pr-6">
              <p className="text-gray-600 mt-6">
                CardCentre Nigeria Limited (CCNL) is a leading smartcard and identity
                solutions company providing end-to-end solutions for Financial Services,
                Telecoms, Government, Education, Healthcare, Oil & Gas, Energy, Transport,
                and other strategic sectors.
              </p>

              <p className="text-gray-600">
                Our state of the art manufacturing facilities and certified processes
                ensure the highest standards of security, quality, and reliability for
                our enterprise partners.
              </p>

              <p className="text-gray-600">
                From SIM card production to financial card personalization and
                comprehensive identity solutions, we deliver end-to-end services that
                drive business growth and enhance security.
              </p>
            </AnimatedSection>

            <AnimatedSection>
            <button
              onClick={() => navigate("/about")}
              className="bg-[#9BC53D] text-white text-sm md:text-lg px-6 md:px-8 py-3 mt-4 rounded-full font-medium hover:opacity-90 transition"
            >
              See More
            </button>
            </AnimatedSection>
          </AnimatedSection>

          <AnimatedSection direction="right">
          <img
            src="/Images/about-team.png"
            alt="Team"
            className="rounded-xl shadow-md object-cover w-full h-auto"
          />
          </AnimatedSection>
        </div>
      </section>


      {/* ================= MISSION & VISION ================= */}
      <section className="py-16 md:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 px-6">

          <AnimatedSection direction="left" className="bg-white py-8 md:py-12 lg:py-16 px-6 md:px-10 rounded-2xl shadow-lg">
            <img src="/Icons/mission.svg" alt="Company Mission Icon" className="w-12 h-12 md:w-14 md:h-14 mb-6 object-contain"/>

            <AnimatedSection className="font-bold text-xl md:text-2xl mb-3">
              Our Mission
            </AnimatedSection>

            <AnimatedSection className="text-gray-600 text-base md:text-lg lg:text-xl md:pr-8">
              To deliver secure, reliable, and innovative card and
              identity solutions that drive business growth and customer trust.
            </AnimatedSection>
          </AnimatedSection>

          <AnimatedSection direction="right" className="bg-gradient-to-br from-[#9BC53D] to-[#5D7428] py-8 md:py-10 lg:py-14 px-6 md:px-10 rounded-2xl shadow-lg">
            <img src="/Icons/vision.svg" alt="Company Vision Icon" className="w-12 h-12 md:w-14 md:h-14 mb-6 object-contain"/>

            <AnimatedSection className="font-bold text-white text-xl md:text-2xl mb-3">
              Our Vision
            </AnimatedSection>

            <AnimatedSection className="text-base md:text-lg lg:text-xl text-[#DBEAFE]">
              To be Africa's most trusted smart identity and payment provider,
              recognized for excellence in innovation, security, and customer
              satisfaction across all markets we serve.
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </section>


      {/* ================= CORE VALUES ================= */}
      <section className="py-12 md:py-16 bg-white">

        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection direction="up" className="text-center mb-14 md:mb-16">
            <AnimatedSection className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </AnimatedSection>

            <AnimatedSection className="text-gray-500 text-base md:text-lg lg:text-xl">
              The IDEA framework guides everything we do
            </AnimatedSection>
          </AnimatedSection>

          <AnimatedSection direction="up" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Innovation */}
            <AnimatedSection className="text-center">
              <div className="bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] rounded-2xl h-32 md:h-36 flex items-center justify-center mb-6">
                <img src="/Icons/innovation.svg" alt="Innovation" className="w-15 h-15"/>
              </div>

              <AnimatedSection className="text-xl md:text-2xl font-bold text-[#0F172A] mb-3">
                Innovation
              </AnimatedSection>

              <AnimatedSection className="text-[#4B5563] text-sm md:text-base lg:text-lg leading-relaxed">
                Continuously advancing technology to deliver cutting-edge solutions
              </AnimatedSection>
            </AnimatedSection>


            {/* Discipline */}
            <AnimatedSection className="text-center">
              <div className="bg-gradient-to-br from-[#14B8A61A] to-[#14B8A633] rounded-2xl h-32 md:h-36 flex items-center justify-center mb-6">
                <img src="/Icons/discipline.svg" alt="Discipline" className="w-14 h-14"/>
              </div>

              <AnimatedSection className="text-xl md:text-2xl font-bold text-[#0F172A] mb-3">
                Discipline
              </AnimatedSection>

              <AnimatedSection className="text-[#4B5563] text-sm md:text-base lg:text-lg md:px-1 leading-relaxed">
                Maintaining rigorous standards and processes in everything we do
              </AnimatedSection>
            </AnimatedSection>


            {/* Empathy */}
            <AnimatedSection className="text-center">
              <div className="bg-gradient-to-br from-[#FAF5FF] to-[#FAF5FF] rounded-2xl h-32 md:h-36 flex items-center justify-center mb-6">
                <img src="/Icons/empathy.svg" alt="Empathy" className="w-14 h-14"/>
              </div>

              <AnimatedSection className="text-xl md:text-2xl font-bold text-[#0F172A] mb-3">
                Empathy
              </AnimatedSection>

              <AnimatedSection className="text-[#4B5563] text-sm md:text-base lg:text-lg leading-relaxed">
                Understanding and exceeding our clients' needs and expectations
              </AnimatedSection>
            </AnimatedSection>


            {/* Adaptability */}
            <AnimatedSection className="text-center">
              <div className="bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7] rounded-2xl h-32 md:h-36 flex items-center justify-center mb-6">
                <img src="/Icons/adaptability.svg" alt="Adaptability" className="w-12 h-12"/>
              </div>

              <AnimatedSection className="text-xl md:text-2xl font-bold text-[#0F172A] mb-3">
                Adaptability
              </AnimatedSection>

              <AnimatedSection className="text-[#4B5563] text-sm md:text-base lg:text-lg leading-relaxed">
                Evolving with market demands to stay ahead of industry trends
              </AnimatedSection>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}