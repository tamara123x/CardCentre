import { useState } from "react";
import AnimatedSection from "./animation";

const Team = () => {
    const teamMembers = [
    {
        name: "Mr. Latona Lekan",
        role: "Managing Director / CEO",
        desc: "A seasoned business leader with expertise in marketing, strategy, and corporate management, holding degrees from FUTA and Business School Netherlands and completing an executive program at CEIBS. He became Chief Operating Officer in 2021 and Managing Director in 2022, overseeing the company’s day-to-day operations.",
        img: "/Images/lekan.png"
   },
    {
        name: "Mr. Oladimeji Odebunmi",
        role: "Head Production & Technical Services",
        desc: "Holds an HND in Electrical Electronics Engineering from Lagos State Polytechnic and has over 20 years of experience in equipment maintenance, EMV card technology, and smartcard production. He previously worked with CardCentre Nigeria Limited and Cardstel Solution Limited, rising to leadership roles, and rejoined CardCentre in 2023 as Plant Manager overseeing production operations.",
        img: "/Images/oladimeji.png"
    },
    {
        name: "Mrs. Opeyemi Awe Ojolo (ACA)",
        role: "Head of Accounts and Finance",
        desc: "A Chartered Accountant with over 14 years of experience in financial reporting, analysis, and advisory. She holds a B.Sc. in Accounting and an MBA from Ekiti State University and currently serves as Head of Accounts and Finance at CardCentre Nigeria Limited after starting her career at Chams Plc.",
        img: "/Images/opeyemi.png"
    },
    {
        name: "Mr. Oluwasegun Folarin",
        role: "Head of Sales and Marketing",
        desc: "A sales and marketing professional with over a decade of experience in the banking and IT sectors. He holds degrees from University of Ibadan and Ajayi Crowther University, and currently serves as Head of Sales and Marketing at CardCentre Nigeria Limited after joining the company in 2021. He is a member of the Institute of Certified Sales Professionals and is known for driving growth, building strong customer relationships, and innovating product solutions.",
        img: "/Images/folarin.png"
    },
    {
        name: "Mr. Abiodun Aretola",
        role: "Head of Audit and Compliance",
        desc: "An Information Security and Governance Executive with degrees in engineering and IT from Moshood Abiola Polytechnic, Ladoke Akintola University of Technology, and National Open University of Nigeria. He is Chief Information Security Officer and Head of Internal Audit and Compliance at CardCentre Nigeria Limited. He oversees security, compliance, and audit functions, protecting critical operations and driving risk-based decision-making. ",
        img: "/Images/abiodun.png"
     },
     {
        name: "Mr. Olawale Ojo",
        role: "Head of Accounts and Finance",
        desc: "Olawale Ojo, BSc, MBA, ACA, is a highly detail oriented and results driven accountant with over 12 years of experience in financial reporting, budgeting, and tax compliance. He specializes in managing financial records, preparing statements, reconciling accounts, and ensuring regulatory compliance. Proficient in accounting tools, he leverages strong analytical and organizational skills to deliver accurate, timely insights that support strategic decision-making. ",
        img: "/Images/ojo.png"
     },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <>
      {/* ================= TEAM MEMBERS ================= */}
      <section className="py-6 lg:py-10 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-6">

          <AnimatedSection direction="up" className="text-center mb-8 lg:mb-14">
            <img
              src="/Icons/Badge.svg"
              alt="Badge"
              className="w-24 mb-6 object-contain mx-auto"
            />
            <AnimatedSection className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#0F172A]">
              Meet our Management Team
            </AnimatedSection>
          </AnimatedSection>

          <AnimatedSection direction="down" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {teamMembers.map((member, index) => {
              const isExpanded = expandedIndex === index;
              const isMobile = window.innerWidth < 768;
              const textLimit = isMobile ? 92 : 110;

              return (
              <div
                key={index}
                className="relative bg-[#F8F8F8] rounded-xl border border-[#9BC53D] shadow-sm overflow-hidden hover:shadow-md transition"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full md:h-full object-cover pb-28"
                />

                <div className={`absolute bottom-0 left-0 w-full bg-[#F8F8F8] p-6 transition-all duration-500 ${
                   isExpanded ? "h-auto overflow-y-auto" : "h-auto"
                }`}>
                  <AnimatedSection className="font-bold text-m md:text-lg text-[#19191B]">
                    {member.name}
                  </AnimatedSection>

                  <AnimatedSection className="text-[#9BC53D] text-m mb-2">
                    {member.role}
                  </AnimatedSection>

                   <AnimatedSection className="text-[#787A82] text-sm md:text-base lg:text-base">
                        {isExpanded ? member.desc : `${member.desc.substring(0, textLimit)}... `}
  
                        <span
                            className="text-[#9BC53D] font-medium cursor-pointer"
                            onClick={() => setExpandedIndex(isExpanded ? null : index)}
                        >
                            {isExpanded ? "Read less" : "Read more"}
                        </span>
                    </AnimatedSection>
                </div>
              </div>
            );
            })}
           </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Team;