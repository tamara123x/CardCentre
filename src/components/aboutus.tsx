export default function AboutUs() {
    return (
        <main className="w-full bg-[#FFFFFF]">

            {/* ================= ABOUT SECTION ================= */}
            <section className="pt-12 pb-16 bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF]">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-5xl font-extrabold text-center mb-12">
                        About CardCentre Nigeria
                    </h2>

                    <div className="rounded-2xl overflow-hidden shadow-md">
                        <img src="/Images/about-building.svg" alt="building" className="w-full h-auto object-cover" />
                    </div>
                </div>
            </section>

            <section className="pb-12">
                <div className="grid max-w-7xl mx-auto lg:grid-cols-2 gap-12 mt-12 items-center">
                    <div className="text-xl px-4">
                        <h3 className="text-4xl font-bold ">
                            Brief Introduction
                        </h3>

                        <div className="space-y-2 pr-4 max-w-xl"> 
                            <p className="text-[#4B5563] mt-6">
                                CardCentre Nigeria Limited (CCNL) is a leading Smartcard 
                                personalization and solutions company that provides 
                                comprehensive end to end Identity management, Digital 
                                security and payment solutions for the Financial Services, 
                                Telecoms, Govt., Education, Healthcare, Oil and Gas, Energy, 
                                Transport and other strategic sectors.
                            </p>

                            <p className="text-[#4B5563]">
                                CCNL was incorporated in August 2004, following diligent & 
                                sedulous research and development efforts of CHAMS PLC, the 
                                majority shareholder in CCN
                            </p>

                            <p className="text-[#4B5563]">
                                CCNL oversees the production, distribution and supply of SIM 
                                cards to telecommunication companies in Nigeria and Africa. 
                                CCNL is one of the pioneers of SIM card manufacturing out of 
                                Africa.
                            </p>

                            <p className="text-[#4B5563]">
                                CCNL pioneered the supply of cards to all banks on the 
                                ValuCard scheme between 1992 and 2003. CCNL is the main 
                                supplier of secure ID cards for salary and pensions payments to 
                                several state governments under the private sector led CASP 
                                scheme.
                            </p>

                            <p className="text-[#4B5563]">
                                CCNL commenced the supply of secure Debit Cards to Nigerian 
                                Banks since 1996.
                            </p>

                            <p className="text-[#4B5563]">
                                CCNL printed over 70 million Nigeria Independent National 
                                Electoral Commission (INEC) Voters identity cards in 2007. CCNL 
                                was involved in the National ID projects and BVN card 
                                production for NIBSS on behalf of all Nigerian Banks.
                            </p>

                            <p className="text-[#4B5563]">
                                We also produced and personalized identity cards for citizens, 
                                residents and employees of Anambra and Osun State.
                            </p>

                            <p className="text-[#4B5563]">
                                CCNL handles identity management, events planning and 
                                registration at major events such as the Nigerian Economic 
                                Summit Group Seminar, Airtel Loyalty Award Scheme, among 
                                others.
                            </p>

                            <p className="text-[#4B5563]">
                                CCNL is a major player in printing of ID cards for multinationals, 
                                large corporate entities, several associations, artisans e.t.c.. We 
                                have produced ID cards for Total Nigeria Plc, Exxon Mobil, 
                            </p>

                            <p className="text-[#4B5563]">
                                Institute of Directors, Lagos Business School, Anglican Church, 
                                Methodist Church, Nigeria Police Force, Nigeria Customs 
                                Exercise, Nigeria Bar Association, Nigeria Computer Society and 
                                Several Banks e.t.c.
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-center gap-16"> 
                        <img src="/Images/CCNL.svg" alt="CCNL Logo" className="px-28 h-50 w-50 object-cover" />
                        <img src="/Images/about-team.svg" alt="Team" className="rounded-xl shadow-md object-cover h-72 w-full h-auto" />
                    </div>
                </div>
            </section>

            {/* ================= TEAM MEMBERS ================= */}
<section className="py-20 bg-[#FFFFFF]">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-14">
      <img src="/Icons/badge.svg" alt="Badge" className="w-24 mb-6 object-contain mx-auto"/>
      <h2 className="text-4xl font-bold text-[#0F172A]">
        Meet our team members
      </h2>
    </div>

    {/* Team Grid */}
    <div className="grid md:grid-cols-3 gap-10">

      {[
        {
          name: "Olayinka David",
          role: "CEO",
          desc: "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
          img: "/Images/man.svg"
        },
        {
          name: "Okytola David",
          role: "Founder",
          desc: "Pop music lover, seeks joy and exciting pop concerts",
          img: "/Images/man.svg"
        },
        {
          name: "Olujoba David",
          role: "CTO",
          desc: "Bookworm, creative software developer with precision",
          img: "/Images/man.svg"
        },
        {
          name: "Olayinka David",
          role: "Managing Director",
          desc: "Creative painter capturing beauty with imaginative artwork",
          img: "/Images/man.svg"
        },
        {
          name: "Okytola David",
          role: "3D Artist",
          desc: "Football enthusiast, enjoys movie nights with friends",
          img: "/Images/man.svg"
        },
        {
          name: "Olujoba David",
          role: "Head of Front-End",
          desc: "Culinary artist, explores diverse flavors, skilled in cooking",
          img: "/Images/man.svg"
        }
      ].map((member, index) => (

        <div
          key={index}
          className="bg-[#F8F8F8] rounded-xl border border-[#9BC53D] shadow-sm overflow-hidden hover:shadow-md transition"
        >
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-80 object-cover"
          />

          <div className="p-6">
            <h4 className="font-bold text-lg text-[#19191B]">
              {member.name}
            </h4>

            <p className="text-[#9BC53D] text-sm mb-4">
              {member.role}
            </p>

            <h4 className="text-m text-[#787A82]">
              {member.desc}
            </h4>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              <img src="/Icons/gfb.svg" alt="Facebook" className="w-4 h-4" />
              <img src="/Icons/glinked.svg" alt="LinkedIn" className="w-4 h-4" />
            </div>
          </div>
        </div>

      ))}
    </div>

  </div>
</section>

      <section className="py-20 bg-[#F8FAFC]">
        {/* Mission & Vision */}
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 mt-5">
          <div className="bg-white py-16 px-10 rounded-2xl shadow-lg">
            <img src="/Icons/mission.svg" alt="Company Mission Icon" className="w-14 h-14 mb-6 object-contain"/>
            <h4 className="font-bold text-2xl mb-3">Our Mission</h4>
            <p className="text-gray-600 text-xl pr-8">
              To deliver secure, reliable, and innovative card and 
              identity solutions that drive business growth and customer trust.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#9BC53D] to-[#5D7428] py-16 px-10 rounded-2xl shadow-lg">
            <img src="/Icons/vision.svg" alt="Company Vision Icon" className="w-14 h-14 mb-6 object-contain"/>
            <h4 className="font-bold text-white text-2xl mb-3">Our Vision</h4>
            <p className="text-xl text-[#DBEAFE]">
              To be Africa's most trusted smart identity and payment provider, 
              recognized for excellence in innovation, security, and customer satisfaction across all markets we serve.
            </p>
          </div>
        </div>
      </section>


      {/* ================= CORE VALUES ================= */}
            <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Our Core Values
      </h2>
      <p className="text-gray-500 text-xl">
        The IDEA framework guides everything we do
      </p>
    </div>

    {/* Core Values Grid */}
    <div className="grid md:grid-cols-4 gap-8">

      {/* Innovation */}
      <div className="text-center">
        <div className="bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] rounded-2xl h-36 flex items-center justify-center mb-6">
          <img src="/Icons/innovation.svg" alt="Innovation" className="w-15 h-15" />
        </div>
        <h4 className="text-2xl font-bold text-[#0F172A] mb-3">
          Innovation
        </h4>
        <p className="text-[#4B5563] text-lg leading-relaxed">
          Continuously advancing technology to deliver cutting-edge solutions
        </p>
      </div>

      {/* Discipline */}
      <div className="text-center">
        <div className="bg-gradient-to-br from-[#14B8A61A] to-[#14B8A633] rounded-2xl h-36 flex items-center justify-center mb-6">
          <img src="/Icons/discipline.svg" alt="Discipline" className="w-15 h-15" />
        </div>
        <h4 className="text-2xl font-bold text-[#0F172A] mb-3">
          Discipline
        </h4>
        <p className="text-[#4B5563] text-lg leading-relaxed px-1">
          Maintaining rigorous standards and processes in everything we do
        </p>
      </div>

      {/* Empathy */}
      <div className="text-center">
        <div className="bg-gradient-to-br from-[#FAF5FF] to-[#FAF5FF] rounded-2xl h-36 flex items-center justify-center mb-6">
          <img src="/Icons/empathy.svg" alt="Empathy" className="w-15 h-15" />
        </div>
        <h4 className="text-2xl font-bold text-[#0F172A] mb-3">
          Empathy
        </h4>
        <p className="text-[#4B5563] text-lg leading-relaxed">
          Understanding and exceeding our clients' needs and expectations
        </p>
      </div>

      {/* Adaptability */}
      <div className="text-center">
        <div className="bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7] rounded-2xl h-36 flex items-center justify-center mb-6">
          <img src="/Icons/adaptability.svg" alt="Adaptability" className="w-15 h-15" />
        </div>
        <h4 className="text-2xl font-bold text-[#0F172A] mb-3">
          Adaptability
        </h4>
        <p className="text-[#4B5563] text-lg leading-relaxed">
          Evolving with market demands to stay ahead of industry trends
        </p>
      </div>

    </div>
  </div>
</section>
            
        </main>
   );}