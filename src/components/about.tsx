import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function About() {
    return (
        <main className="w-full bg-[#FFFFFF]">

        {/* ================= ABOUT SECTION ================= */}
            <section className="py-20 bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF]">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-5xl font-extrabold text-center mb-12">
                        About CardCentre Nigeria
                    </h2>

                    <div className="rounded-2xl overflow-hidden shadow-md">
                        <img src="/Images/about-building.svg" className="w-full h-auto object-cover" />
                    </div>
                </div>
            </section>

            <section className="pt-4 pb-12">
                <div className="grid max-w-7xl mx-auto lg:grid-cols-2 gap-12 mt-16 items-center">
                        <div className="text-xl px-4">
                            <h3 className="text-4xl font-bold ">
                                Leading the Smart Card Revolution in Africa
                            </h3>

                            <div className="space-y-4 pr-6">
                                <p className="text-gray-600 mt-6">
                                    CardCentre Nigeria Limited (CCNL) is a leading smartcard and identity solutions 
                                    company providing end-to-end solutions for Financial Services, Telecoms, Government, 
                                    Education, Healthcare, Oil & Gas, Energy, Transport, and other strategic sectors.
                                </p>

                               <p className="text-gray-600">
                                   Our state of the art manufacturing facilities and certified processes ensure the highest 
                                   standards of security, quality, and reliability for our enterprise partners.
                                </p>

                                <p className="text-gray-600">
                                   From SIM card production to financial card personalization and comprehensive identity 
                                   solutions, we deliver end-to-end services that drive business growth and enhance security.
                                </p>
                            </div>
                        </div>

                        <img src="/Images/about-team.svg" className="rounded-xl shadow-md object-cover h-72 w-full h-auto" />
                </div>
            </section>

            <section className="py-20 bg-[#F8FAFC]">
                    {/* Mission & Vision */}
                    <div className=" max-w-7xl mx-auto grid md:grid-cols-2 gap-10 mt-5">
                       <div className="bg-white py-16 px-10 rounded-2xl shadow-lg">
                            <img src="/Icons/mission.svg" className="w-12 h-12 mb-6 object-contain"/>
                            <h4 className="font-bold text-2xl mb-3">Our Mission</h4>
                            <p className="text-gray-600 text-xl pr-8">
                                To deliver secure, reliable, and innovative card and 
                                identity solutions that drive business growth and customer trust.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-[#9BC53D] to-[#5D7428] py-16 px-10 text-white rounded-2xl shadow-lg">
                            <img src="/Icons/vision.svg" className="w-12 h-12 mb-6 object-contain"/>
                            <h4 className="font-bold text-2xl mb-3">Our Vision</h4>
                            <p className="text-xl">
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
        <p className="text-[#4B5563] text-lg leading-relaxed">
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