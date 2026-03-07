const Roles = () => {
  return (
    <section className="bg-[#FFFFFF] min-h-screen">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-br from-[#14213D] to-[#0F2F76] py-20 px-6 text-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Join Africa's Leading Identity & Payment Innovators
        </h1>
        <p className="max-w-2xl mx-auto text-sm pt-6 md:text-xl text-gray-200 leading-7">
          Build your career with a team that's transforming how 
          enterprises across Africa manage identity and payments
        </p>
      </div>


      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto pt-16 px-1 grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE – JOB LIST */}
        <div className="pr-20 space-y-16">

          {/* ACTIVE ROLE */}
          <div className="border border-[#9BC53D] rounded-xl p-6 bg-white shadow-sm">
            <h3 className="text-[#9BC53D] text-m md:text-xl font-semibold mb-2">
              Account Executive
            </h3>
            <p className="text-sm text-[#374151] leading-6">
              Primary Responsibility:Designing and implementing user interfaces using 
              HTML, CSS, and JavaScript frameworks like React or Angular. Building 
              and maintaining server-side application logic, databases....
            </p>
          </div>

          {/* OTHER ROLES */}
          <div>
            <h3 className="font-semibold text-m md:text-xl text-[#040F24] mb-2">
              Business Analyst
            </h3>
            <p className="text-sm text-[#374151] leading-6">
              Primary Responsibility:Designing and implementing user interfaces using 
              HTML, CSS, and JavaScript frameworks like React or Angular. Building 
              and maintaining server-side application logic, databases....
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-m md:text-xl  text-[#040F24] mb-2">
              Information Technology / Systems Lead
            </h3>
            <p className="text-sm text-[#374151] leading-6">
              Primary Responsibility:Designing and implementing user interfaces using 
              HTML, CSS, and JavaScript frameworks like React or Angular. Building 
              and maintaining server-side application logic, databases....
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-m md:text-xl  text-[#040F24] mb-2">
              Customer Service / Support Specialist
            </h3>
            <p className="text-sm text-[#374151] leading-6">
              Primary Responsibility:Designing and implementing user interfaces using 
              HTML, CSS, and JavaScript frameworks like React or Angular. Building 
              and maintaining server-side application logic, databases....
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-m md:text-xl text-[#040F24] mb-2">
              Chief Information Security Officer (CISO)
            </h3>
            <p className="text-sm text-[#374151] leading-6">
              Primary Responsibility:Designing and implementing user interfaces using 
              HTML, CSS, and JavaScript frameworks like React or Angular. Building 
              and maintaining server-side application logic, databases....
            </p>
          </div>

        </div>


        {/* RIGHT SIDE – ROLE DETAILS */}
        <div className="border-l border-gray-200 pl-8">

          <h2 className="text-[#9BC53D] text-m md:text-xl font-semibold text-lg mb-4">
            Account Executive
          </h2>

          {/* Primary Responsibility */}
          <div className="mb-6">
            <h4 className="font-semibold text-m md:text-xl text-[#374151] mb-2">
              Primary Responsibility:
            </h4>
            <p className="text-m text-[#374151] leading-6">
              Managing and growing assigned client accounts by serving as the main point of 
              contact for enterprise customers including banks, telecom companies, fintechs, 
              and government agencies.Identifying new business opportunities, generating 
              leads, and converting prospects into long-term clients through strategic sales 
              initiatives.Developing and presenting tailored proposals, pricing models, and 
              service agreements aligned with company revenue goals.Coordinating with 
              operations, production, and technical teams to ensure timely delivery of products 
              and services while meeting client expectations.Monitoring account performance, 
              tracking sales metrics, and preparing regular reports and forecasts for 
              management.Negotiating contracts, renewing service agreements, and ensuring 
              compliance with regulatory and data protection standards. Resolving client issues 
              promptly, managing escalations effectively, and maintaining high customer 
              satisfaction levels.Building strong long-term relationships with stakeholders to drive 
              retention, cross-selling, and upselling opportunities.
            </p>
          </div>

          {/* Job Specification */}
          <div className="mb-6">
            <h4 className="font-semibold text-m md:text-xl text-[#374151] mb-3">
              Job Specification:
            </h4>
            <ul className="list-disc marker:text-sm marker:text-[#9BC53D] pl-6 text-m text-[#374151] space-y-2 leading-5">
              <li>Bachelor’s degree in Business Administration, Marketing, Economics, or related field.</li>
              <li>3–5 years of experience in B2B sales, account management, or enterprise client servicing.</li>
              <li>Proven ability to meet or exceed sales and revenue targets consistently.</li>
              <li>Strong negotiation, persuasion, and contract management skills.</li>
              <li>Excellent communication, presentation, and stakeholder management abilities.</li>
              <li>Experience using CRM software and Microsoft Office tools for reporting and account tracking.</li>
              <li>Strong analytical skills with the ability to interpret sales data and market trends.</li>
              <li>Knowledge of enterprise sales cycles and solution-based selling techniques.</li>
              <li>Ability to manage multiple accounts simultaneously and work under pressure.</li>
              <li>High level of professionalism, integrity, and confidentiality when handling sensitive client information.</li>
            </ul>
          </div>

          {/* Role Details */}
          <div className="space-y-3 text-m text-[#374151] mb-8">
            <p><span className="font-semibold">Employment Type:</span> Full-time</p>
            <p><span className="font-semibold">Work Place Type:</span> Hybrid</p>
            <p><span className="font-semibold">Salary:</span> Commensurate with experience and skills</p>
            <p><span className="font-semibold">Experience Required:</span> Minimum 3 Years</p>
            <p><span className="font-semibold">Job Location:</span> Lagos, Nigeria</p>
          </div>

          {/* APPLY BUTTON */}
          <button className="bg-[#9BC53D] hover:bg-[#85be09;] text-white text-sm px-7 py-2 rounded-full transition">
            Apply Now
          </button>

        </div>

      </div>
    </section>
  );
};

export default Roles;