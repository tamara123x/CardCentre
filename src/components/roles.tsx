import { useState } from "react";
import AnimatedSection from "./animation";

const jobs = [
  {
    title: "Account Executive",
    summary:
      "Managing and growing enterprise client accounts by building strong relationships, identifying new business opportunities, and driving revenue through strategic sales and account management initiatives.",
    responsibility:
      "Managing and growing assigned client accounts by serving as the main point of contact for enterprise customers including banks, telecom companies, fintechs, and government agencies.Identifying new business opportunities, generating leads, and converting prospects into long-term clients through strategic sales initiatives.Developing and presenting tailored proposals, pricing models, and service agreements aligned with company revenue goals.Coordinating with operations, production, and technical teams to ensure timely delivery of products and services while meeting client expectations.Monitoring account performance, tracking sales metrics, and preparing regular reports and forecasts for management.Negotiating contracts, renewing service agreements, and ensuring compliance with regulatory and data protection standards.Resolving client issues promptly, managing escalations effectively, and maintaining high customer satisfaction levels.Building strong long-term relationships with stakeholders to drive retention, cross-selling, and upselling opportunities.",
    specs: [
      "Bachelor’s degree in Business Administration, Marketing, Economics, or related field",
      "3–5 years of experience in B2B sales, account management, or enterprise client servicing.",
      "Proven ability to meet or exceed sales and revenue targets consistently.",
      "Strong negotiation, persuasion, and contract management skills.",
      "Excellent communication, presentation, and stakeholder management abilities.",
      "Experience using CRM software and Microsoft Office tools for reporting and account tracking.",
      "Strong analytical skills with the ability to interpret sales data and market trends.",
      "Knowledge of enterprise sales cycles and solution-based selling techniques.",
      "Ability to manage multiple accounts simultaneously and work under pressure.",
      "High level of professionalism, integrity, and confidentiality when handling sensitive client information.",
    ],
    type: "Full-time",
    workplace: "Hybrid",
    Salary: "commensurate with experience and skill",
    experience: "Minimum 3 Years",
    location: "Lagos, Nigeria",
  },
  {
    title: "Business Analyst",
    summary:
      "Analyzing business processes, gathering requirements, and translating business needs into data-driven insights and solutions that improve efficiency and support strategic decision-making.",
    responsibility:
      "Analyzing business processes, operational workflows, and data to identify opportunities for efficiency improvement, cost reduction, and revenue growth. Gathering and documenting business requirements from stakeholders including management, clients, and operational teams to support system development and strategic initiatives. Translating business needs into clear functional specifications that guide technical teams in developing solutions aligned with organizational objectives. Conducting market research, competitor analysis, and trend monitoring to support product development and strategic planning. Preparing detailed reports, dashboards, and presentations that communicate insights and recommendations to senior management. Collaborating with cross-functional teams including technology, operations, and finance to ensure successful implementation of business solutions. Monitoring project performance, evaluating outcomes, and recommending adjustments to optimize business performance. Supporting decision-making processes by providing data-driven insights and forecasting future business trends.",
    specs: [
      "Bachelor’s degree in Business Administration, Economics, Information Systems, Data Analytics, or related field.",
      "3–5 years of experience in business analysis, consulting, strategy, or process improvement roles.",
      "Strong ability to gather and document business requirements and translate them into actionable solutions.",
      "Excellent analytical and problem-solving skills with strong attention to detail.",
      "Experience using data analysis tools such as Excel, Power BI, Tableau, or similar reporting tools.",
      "Strong communication and presentation skills for engaging with stakeholders and executives.",
      "Knowledge of business process modeling, workflow analysis, and requirement documentation techniques.",
      "Ability to manage multiple projects and deadlines in a fast-paced environment.",
      "High level of professionalism, critical thinking, and strategic decision-making ability.",
    ],
    type: "Full-time",
    workplace: "On-site",
    Salary: "commensurate with experience and skill",
    experience: "Minimum 3 Years",
    location: "Lagos, Nigeria",
  },
  {
    title: "Information Technology / Systems Lead",
    summary:
      "Managing and maintaining the organization’s IT infrastructure, systems, and technology platforms to ensure reliable operations, security, and efficient digital service delivery.",
    responsibility:
      "Overseeing the organization’s IT infrastructure, systems architecture, and technology operations to ensure reliable, secure, and efficient service delivery. Leading the design, implementation, and maintenance of enterprise systems, networks, and digital platforms that support business operations. Managing IT projects including system upgrades, software deployments, and technology integrations while ensuring minimal disruption to business activities. Coordinating with software developers, vendors, and technical teams to implement scalable and secure technology solutions. Establishing IT policies, procedures, and standards to ensure system stability, performance, and regulatory compliance. Monitoring system performance, resolving technical issues, and implementing improvements to optimize operational efficiency. Managing IT budgets, technology procurement, and vendor relationships. Providing strategic technology guidance to management to support digital transformation and innovation initiatives.",
    specs: [
      "Bachelor’s degree in Information Technology, Computer Science, Software Engineering, or related field.",
      "5+ years of experience in IT systems management, infrastructure administration, or technical leadership roles.",
      "Strong knowledge of system architecture, cloud platforms, network management, and enterprise IT solutions.",
      "Experience managing databases, servers, and enterprise software systems.",
      "Familiarity with cybersecurity principles, IT governance, and compliance frameworks.",
      "Strong project management skills with experience delivering complex IT projects.",
      "Excellent troubleshooting, problem-solving, and decision-making abilities.",
      "Experience managing IT teams, vendors, and technology service providers.",
      "Ability to align technology initiatives with organizational goals and operational needs.",
    ],
    type: "Full-time",
    workplace: "On-site",
    Salary: "commensurate with experience and skill",
    experience: "Minimum 5 Years",
    location: "Lagos, Nigeria",
  },
  {
    title: "Customer Service / Support Specialist",
    summary:
      "Providing timely support to customers by resolving inquiries, troubleshooting issues, and ensuring a positive service experience across communication channels.",
    responsibility:
      "Providing professional and timely support to customers by addressing inquiries, resolving complaints, and ensuring a positive service experience. Serving as the primary contact point for customer issues across communication channels including phone, email, and digital platforms. Investigating and resolving customer problems by coordinating with internal departments such as technical support, operations, and sales teams. Maintaining accurate records of customer interactions, issues, and resolutions within the customer relationship management (CRM) system. Monitoring service performance and identifying recurring issues that require process improvements. Assisting customers with product information, service usage guidance, and troubleshooting support. Supporting customer retention efforts by ensuring satisfaction and strengthening client relationships. Contributing to service improvement initiatives by providing feedback based on customer interactions and support trends.",
    specs: [
      "Bachelor’s degree or diploma in Business Administration, Communications, Customer Service, or related field.",
      "2–4 years of experience in customer service, client support, or help desk roles.",
      "Strong communication and interpersonal skills with the ability to manage customer relationships effectively.",
      "Ability to handle customer complaints professionally and resolve issues efficiently.",
      "Experience using CRM systems, ticketing platforms, and customer support tools.",
      "Strong problem-solving skills with attention to detail and accuracy.",
      "Ability to work in a fast-paced environment while managing multiple customer requests simultaneously.",
      "Good organizational and documentation skills.",
      "High level of patience, empathy, and professionalism when dealing with customers.",
    ],
    type: "Full-time",
    workplace: "Hybrid",
    Salary: "commensurate with experience and skill",
    experience: "Minimum 2 Years",
    location: "Lagos, Nigeria",
  },
  {
    title: "Chief Information Security Officer (CISO)",
    summary:
      "Developing and overseeing cybersecurity strategies, policies, and risk management frameworks to protect the organization’s data, systems, and digital infrastructure.",
    responsibility:
      "Leading the organization’s information security strategy to protect digital assets, data, systems, and infrastructure from cyber threats and security breaches. Developing and implementing comprehensive cybersecurity policies, risk management frameworks, and security governance structures aligned with industry standards and regulatory requirements. Monitoring and assessing security vulnerabilities, conducting risk assessments, and implementing proactive measures to prevent cyber incidents. Overseeing security operations including threat detection, incident response, and recovery processes. Ensuring compliance with data protection regulations, cybersecurity laws, and organizational security policies. Collaborating with technology, legal, and compliance teams to maintain a secure information environment. Providing security awareness training and guidance to employees to strengthen the organization’s cybersecurity culture. Advising executive leadership on cybersecurity risks, emerging threats, and strategic security investments.",
    specs: [
      "Bachelor’s degree in Cybersecurity, Information Technology, Computer Science, or related field (Master’s degree preferred).",
      "7+ years of experience in information security, cybersecurity management, or risk management roles.",
      "Strong knowledge of cybersecurity frameworks such as ISO 27001, NIST, or similar security standards.",
      "Experience in threat management, vulnerability assessment, and security incident response.",
      "Familiarity with data protection regulations, compliance requirements, and information security governance.",
      "Professional certifications such as CISSP, CISM, CEH, or equivalent are highly desirable.",
      "Strong leadership, strategic planning, and risk management skills.",
      "Ability to communicate complex cybersecurity issues to both technical and non-technical stakeholders.",
      "High level of integrity and confidentiality when managing sensitive organizational information.",
    ],
    type: "Full-time",
    workplace: "Hybrid",
    Salary: "commensurate with experience and skill",
    experience: "Minimum 7 Years",
    location: "Lagos, Nigeria",
  },
];

const Roles = () => {
  const [selectedJob, setSelectedJob] = useState(jobs[0]);

  return (
    <section className="bg-white min-h-screen">

      {/* HERO */}
      <AnimatedSection direction="up" className="bg-gradient-to-br from-[#14213D] to-[#0F2F76] py-14 mb:py-20 px-6 text-center text-white">
        <AnimatedSection className="text-3xl md:text-5xl font-bold mb-6">
          Join Africa's Leading Identity & Payment Innovators
        </AnimatedSection>

        <AnimatedSection className="max-w-2xl mx-auto text-sm md:text-xl text-gray-200 leading-7">
          Build your career with a team that's transforming how enterprises
          across Africa manage identity and payments
        </AnimatedSection>
      </AnimatedSection>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto pt-16 px-6 grid lg:grid-cols-2 gap-10 lg:gap-12">

        {/* JOB LIST */}
        <AnimatedSection direction="left" className="space-y-6 lg:pr-10">

          {jobs.map((job) => (
            <div
              key={job.title}
              onClick={() => setSelectedJob(job)}
              className={`cursor-pointer p-6 rounded-xl border transition
              ${
                selectedJob.title === job.title
                  ? "border-[#9BC53D] bg-green-50"
                  : "border-gray-200 hover:bg-gray-50"
              }`}
            >
              <AnimatedSection className="text-lg md:text-2xl lg:text-xl font-semibold text-[#040F24] mb-2">
                {job.title}
              </AnimatedSection>

              <AnimatedSection className="text-sm md:text-xl lg:text-sm text-[#374151] leading-6">
                {job.summary}
              </AnimatedSection>
            </div>
          ))}

        </AnimatedSection>

        {/* JOB DETAILS */}
        <AnimatedSection direction="right" className="border-t lg:border-t-0 lg:border-l border-gray-200 pt-8 lg:pt-0 lg:pl-8">

          <AnimatedSection className="text-[#9BC53D] text-lg md:text-3xl lg:text-xl font-semibold mb-4">
            {selectedJob.title}
          </AnimatedSection>

          <AnimatedSection direction="right" className="mb-6">
            <AnimatedSection className="font-semibold text-base md:text-2xl lg:text-lg text-[#374151] mb-2">
              Primary Responsibility
            </AnimatedSection>

            <AnimatedSection direction="right" className="text-sm md:text-xl lg:text-base text-[#374151] leading-6">
              {selectedJob.responsibility}
            </AnimatedSection>
          </AnimatedSection>

          <div className="mb-6">
            <AnimatedSection direction="right" className="font-semibold text-base md:text-2xl lg:text-lg text-[#374151] mb-3">
              Job Specification
            </AnimatedSection>

            <AnimatedSection direction="right">
            <ul className="list-disc marker:text-[#9BC53D] pl-6 text-sm md:text-xl lg:text-base text-[#374151] space-y-2">
              {selectedJob.specs.map((spec, i) => (
                <li key={i}>{spec}</li>
              ))}
            </ul>
            </AnimatedSection>
          </div>

          {/* ROLE INFO */}
          <AnimatedSection className="space-y-3 text-sm md:text-xl lg:text-base text-[#374151] mb-8">
            <AnimatedSection>
              <span className="font-semibold">Employment Type:</span>{" "}
              {selectedJob.type}
            </AnimatedSection>

            <AnimatedSection>
              <span className="font-semibold">Work Place Type:</span>{" "}
              {selectedJob.workplace}
            </AnimatedSection>

            <AnimatedSection>
              <span className="font-semibold">Salary:</span>{" "}
              {selectedJob.Salary}
            </AnimatedSection>

            <AnimatedSection>
              <span className="font-semibold">Experience Required:</span>{" "}
              {selectedJob.experience}
            </AnimatedSection>

            <AnimatedSection>
              <span className="font-semibold">Job Location:</span>{" "}
              {selectedJob.location}
            </AnimatedSection>
          </AnimatedSection>

          <AnimatedSection>
          <button className="bg-[#9BC53D] hover:bg-[#85be09] text-white text-sm md:text-xl lg:text-sm  px-7 py-3 rounded-full transition">
            Apply Now
          </button>
          </AnimatedSection>

        </AnimatedSection>
      </div>
    </section>
  );
};

export default Roles;