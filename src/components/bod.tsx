import AnimatedSection from "./animation";

const Bod = () => {
  return (
    <>
      {/* ================= TEAM MEMBERS ================= */}
      <section className="py-10 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-6">

          <AnimatedSection direction="up" className="text-center mb-14">
            <img
              src="/Icons/badge.svg"
              alt="Badge"
              className="w-24 mb-6 object-contain mx-auto"
            />
            <AnimatedSection className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#0F172A]">
              Meet our Board of Directors
            </AnimatedSection>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                name: "Mr. Latona Lekan",
                role: "Managing Director",
                img: "/Images/lekan.png"
              },
              {
                name: "Mrs. Chijioke Ugochukwu",
                role: "Chairman",
                img: "/Images/chijioke.png"
              },
              {
                name: "Mr. Akomolafe Kayode",
                role: "Director",
                img: "/Images/kayode.png"
              },
              {
                name: "Dr. Olufemi Oyenuga",
                role: "Director",
                img: "/Images/olufemi.png"
              },
              {
                name: "Mrs. Lisa-Leigh Aladekomo",
                role: "Director",
                img: "/Images/lisa.png"
              },
              {
                name: "Mr. Okenwa Chukwuma ",
                role: "Director",
                img: "/Images/okenwa.png"
              }
            ].map((member, index) => (
              <AnimatedSection direction="up"
                key={index}
                className="bg-[#F8F8F8] rounded-xl border border-[#9BC53D] shadow-sm overflow-hidden hover:shadow-md transition"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-[280px] md:h-[450px] object-cover"
                />

                <div className="p-6">
                  <AnimatedSection className="font-bold text-lg text-[#19191B]">
                    {member.name}
                  </AnimatedSection>

                  <p className="text-[#9BC53D] text-sm">
                    {member.role}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Bod;
