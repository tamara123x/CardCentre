import { useNavigate } from "react-router-dom";
import AnimatedSection from "./animation";

const values = [
  {
    title: "Career Growth",
    description: "Clear advancement paths",
    icon: "/Icons/career.svg",
  },
  {
    title: "Collaborative",
    description: "Team-oriented culture",
    icon: "/Icons/collab.svg",
  },
  {
    title: "Innovative",
    description: "Cutting-edge technology",
    icon: "/Icons/innovate.svg",
  },
  {
    title: "Learning",
    description: "Continuous development",
    icon: "/Icons/learn.svg",
  },
];

const Career: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#F8FAFC]">

      {/* HERO */}
      <AnimatedSection direction="up" className="w-full bg-gradient-to-br from-[#14213D] to-[#0F2F76] text-white py-12 md:py-20 lg:pt-32 lg:pb-20 px-6 text-center">
        <AnimatedSection className="text-3xl md:text-5xl font-bold mb-6">
          Join Africa's Leading Identity & Payment Innovators
        </AnimatedSection>

        <AnimatedSection className="text-lg md:text-2xl text-gray-200 pt-4 md:pt-6 max-w-3xl mx-auto">
          Build your career with a team that's transforming how enterprises
          across Africa manage identity and payments
        </AnimatedSection>
      </AnimatedSection>

      {/* INNOVATION SECTION */}
      <section className="bg-white w-full mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <AnimatedSection direction="left">
            <AnimatedSection className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">
              Innovation at Our Core
            </AnimatedSection>

            <AnimatedSection className="text-[#4B5563] text-base md:text-xl mb-6 mb:mr-8 leading-relaxed">
              At CardCentre Nigeria, we're building the future of digital
              identity and payment solutions. Join a team of passionate
              professionals dedicated to excellence, innovation, and making a
              real impact across Africa.
            </AnimatedSection>

            <AnimatedSection className="text-[#4B5563] text-base md:text-xl mb-10 mb:mr-8 leading-relaxed">
              We foster a culture of continuous learning, collaboration, and
              professional growth. Our employees work with cutting-edge
              technology and solve complex challenges for some of Africa's
              largest enterprises.
            </AnimatedSection>

            {/* VALUES */}
            <AnimatedSection className="grid grid-cols-2 gap-4 md:gap-8">
              {values.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <AnimatedSection>
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="mt-2 w-8 h-8"
                    loading="lazy"
                  />
                  </AnimatedSection>

                  <AnimatedSection>
                    <AnimatedSection className="font-bold text-base md:text-lg text-[#0F172A]">
                      {item.title}
                    </AnimatedSection>

                    <AnimatedSection className=" text-sm md:text-base text-gray-600">
                      {item.description}
                    </AnimatedSection>
                  </AnimatedSection>
                </div>
              ))}
            </AnimatedSection>
          </AnimatedSection>

          {/* RIGHT IMAGE */}
          <AnimatedSection direction="right">
            <img
              src="/Images/about-team.png"
              alt="Team collaboration at CardCentre"
              className="rounded-2xl shadow-lg w-full lg:mt-12"
              loading="lazy"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <AnimatedSection className="w-full mx-auto px-6 md:px-12 lg:px-24 py-20">
        <div className="grid md:grid-cols-3 gap-8">

          <img
            src="/Images/careerpeople.png"
            alt="Career People"
            className="rounded-2xl shadow-md w-full"
            loading="lazy"
          />

          <img
            src="/Images/careerpeople1.png"
            alt="Career People"
            className="rounded-2xl shadow-md w-full"
            loading="lazy"
          />

          <img
            src="/Images/careerpeople2.png"
            alt="Career People"
            className="rounded-2xl shadow-md w-full"
            loading="lazy"
          />

        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="bg-white pt-12 md:pt-16 lg:pb-18 px-6 text-center">
        <AnimatedSection className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
          Ready to Make an Impact?
        </AnimatedSection>

        <AnimatedSection className="text-[#4B5563] text-base md:text-xl mb-10">
          Explore open positions or submit your CV for future opportunities
        </AnimatedSection>

        <AnimatedSection className="flex justify-center gap-4 md:gap-6 flex-wrap">

          <AnimatedSection direction="left">
          <button
            onClick={() => navigate("/roles")}
            className="bg-[#9BC53D] hover:bg-[#74a804] transition text-sm md:text-lg px-4 md:px-8 py-3 rounded-full text-white font-medium shadow-md"
          >
            View Open Roles
          </button>
          </AnimatedSection>
          
          <AnimatedSection direction="right">
          <button
            onClick={() => navigate("/roles")}
            className="border-2 border-[#9BC53D] text-[#9BC53D] hover:bg-green-50 transition text-sm md:text-lg px-4 md:px-8 py-3 rounded-full font-medium"
          >
            Submit Your CV
          </button>
          </AnimatedSection>

        </AnimatedSection>
      </AnimatedSection>

    </div>
  );
};

export default Career;