import { useNavigate } from "react-router-dom";

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
      <section className="w-full bg-gradient-to-br from-[#14213D] to-[#0F2F76] text-white py-12 md:py-20 lg:pt-32 lg:pb-20 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Join Africa's Leading Identity & Payment Innovators
        </h1>

        <p className="text-lg md:text-2xl text-gray-200 pt-4 md:pt-6 max-w-3xl mx-auto">
          Build your career with a team that's transforming how enterprises
          across Africa manage identity and payments
        </p>
      </section>

      {/* INNOVATION SECTION */}
      <section className="bg-white w-full mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">
              Innovation at Our Core
            </h2>

            <p className="text-[#4B5563] text-base md:text-xl mb-6 mb:mr-8 leading-relaxed">
              At CardCentre Nigeria, we're building the future of digital
              identity and payment solutions. Join a team of passionate
              professionals dedicated to excellence, innovation, and making a
              real impact across Africa.
            </p>

            <p className="text-[#4B5563] text-base md:text-xl mb-10 mb:mr-8 leading-relaxed">
              We foster a culture of continuous learning, collaboration, and
              professional growth. Our employees work with cutting-edge
              technology and solve complex challenges for some of Africa's
              largest enterprises.
            </p>

            {/* VALUES */}
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              {values.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="mt-2 w-8 h-8"
                    loading="lazy"
                  />

                  <div>
                    <h4 className="font-bold text-base md:text-lg text-[#0F172A]">
                      {item.title}
                    </h4>

                    <p className=" text-sm md:text-base text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <img
              src="/Images/meet.svg"
              alt="Team collaboration at CardCentre"
              className="rounded-2xl shadow-lg w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="w-full mx-auto px-6 md:px-12 lg:px-24 py-20">
        <div className="grid md:grid-cols-3 gap-8">

          <img
            src="/Images/meeting.svg"
            alt="Business meeting"
            className="rounded-2xl shadow-md w-full"
            loading="lazy"
          />

          <img
            src="/Images/chip.svg"
            alt="Payment technology chip"
            className="rounded-2xl shadow-md w-full"
            loading="lazy"
          />

          <img
            src="/Images/team.svg"
            alt="Team collaboration"
            className="rounded-2xl shadow-md w-full"
            loading="lazy"
          />

        </div>
      </section>

      {/* CTA */}
      <section className="bg-white pt-12 md:pt-16 lg:pb-18 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
          Ready to Make an Impact?
        </h2>

        <p className="text-[#4B5563] text-base md:text-xl mb-10">
          Explore open positions or submit your CV for future opportunities
        </p>

        <div className="flex justify-center gap-4 md:gap-6 flex-wrap">

          <button
            onClick={() => navigate("/roles")}
            className="bg-[#9BC53D] hover:bg-[#74a804] transition text-sm md:text-lg px-4 md:px-8 py-3 rounded-full text-white font-medium shadow-md"
          >
            View Open Roles
          </button>

          <button
            onClick={() => navigate("/roles")}
            className="border-2 border-[#9BC53D] text-[#9BC53D] hover:bg-green-50 transition text-sm md:text-lg px-4 md:px-8 py-3 rounded-full font-medium"
          >
            Submit Your CV
          </button>

        </div>
      </section>

    </div>
  );
};

export default Career;