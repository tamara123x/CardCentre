import { useState } from "react";
import { NavLink } from "react-router-dom";

const Career: React.FC = () => {
  return (
    <div className="w-full bg-[#F8FAFC]">

      {/* ================= HERO SECTION ================= */}
      <section className="w-full bg-gradient-to-br from-[#14213D] to-[#0F2F76] text-white pt-32 pb-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Join Africa's Leading Identity & Payment Innovators
        </h1>

        <p className="text-2xl text-gray-200 pt-8 max-w-3xl mx-auto">
          Build your career with a team that's transforming how enterprises across Africa manage identity and payments
        </p>
      </section>

      {/* ================= INNOVATION SECTION ================= */}
      <section className="bg-[#FFFFFF] w-full mx-auto px-28 py-20">
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT TEXT */}
          <div>
            <h2 className="text-4xl font-bold text-[#0F172A] mb-6">
              Innovation at Our Core
            </h2>

            <p className="text-[#4B5563] text-xl mb-4 pr-2 leading-relaxed">
              At CardCentre Nigeria, we're building the future of digital identity and payment solutions. 
              Join a team of passionate professionals dedicated to excellence, innovation, and making a real impact across Africa.
            </p>

            <p className="text-[#4B5563] text-xl mb-10 pr-2 leading-relaxed">
              We foster a culture of continuous learning, collaboration, and professional growth. 
              Our employees work with cutting-edge technology and solve complex challenges for some of Africa's largest enterprises.
            </p>

            {/* VALUE ITEMS */}
            <div className="grid grid-cols-2 gap-8">

              {/* Career Growth */}
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center">
                  <img src="/Icons/career.svg" className="mt-2" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#0F172A]">
                    Career Growth
                  </h4>
                  <p className="text-m text-gray-600">
                    Clear advancement paths
                  </p>
                </div>
              </div>

              {/* Collaborative */}
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center">
                  <img src="/Icons/collab.svg" className="mt-2" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#0F172A]">
                    Collaborative
                  </h4>
                  <p className="text-m text-gray-600">
                    Team-oriented culture
                  </p>
                </div>
              </div>

              {/* Innovative */}
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center">
                  <img src="/Icons/innovate.svg" className="mt-2" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#0F172A]">
                   Innovative
                  </h4>
                  <p className="text-m text-gray-600">
                    Cutting-edge technology
                  </p>
                </div>
              </div>

              {/* Learning */}
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center">
                  <img src="/Icons/learn.svg" className="mt-2" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#0F172A]">
                    Learning
                  </h4>
                  <p className="text-m text-gray-600">
                    Continuous development
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <img
              src="/Images/meet.svg"
              alt="Team"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>

        </div>
      </section>

      {/* ================= IMAGE GALLERY ================= */}
      <section className="max-w-8xl mx-auto px-24 py-20">
        <div className="grid md:grid-cols-3 gap-8">

          <img
            src="/Images/meeting.svg"
            alt="Meeting"
            className="rounded-2xl shadow-md w-full"
          />

          <img
            src="/Images/chip.svg"
            alt="Technology"
            className="rounded-2xl shadow-md w-full"
          />

          <img
            src="/Images/team.svg"
            alt="Team Collaboration"
            className="rounded-2xl shadow-md w-full"
          />

        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-[#FFFFFF] pt-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-[#0F172A] mb-4">
          Ready to Make an Impact?
        </h2>

        <p className="text-[#4B5563] text-xl mb-10">
          Explore open positions or submit your CV for future opportunities
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <button className="bg-[#9BC53D] hover:bg-[#74a804] transition text-lg px-8 py-3 rounded-full text-white font-medium shadow-md">
            View Open Roles
          </button>

          <button className="border-2 border-[#9BC53D] text-[#9BC53D] hover:bg-green-50 transition text-lg px-8 py-3 rounded-full font-medium">
            Submit Your CV
          </button>
        </div>
      </section>

    </div>
  );
};

export default Career;