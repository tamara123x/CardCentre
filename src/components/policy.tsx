// import React from "react";

const Policy = () => {
  return (
    <section className="bg-[#FFFFFF] min-h-screen">
      
      {/* HERO SECTION */}
      <div className="bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] py-12 px-6 text-center">
        {/* ICON PLACEHOLDER */}
        <div className="flex justify-center mb-6">
          {/* Insert your shield icon here */}
          <img src="/Icons/privacy.svg" alt="Privacy" className="mt-8 rounded-2xl"/>
          <div className="w-12 h-12"></div>
        </div>

        <h1 className="text-5xl font-extrabold text-[#1E293B] mb-6">
          Privacy & Cookie Policy
        </h1>
      </div>


      {/* CONTENT SECTION */}
      <div className="max-w-7xl mx-auto py-16 px-14 space-y-12">

        <p className="text-[#475569] leading-8 text-xl">
          CardCentre Nigeria Limited ("CCNL", "we", "our", or "us") is committed 
          to protecting your privacy and ensuring the security of your personal 
          information. This Privacy and Cookie Policy explains how we collect, use, 
          store, and protect your data in compliance with the Nigeria Data Protection 
          Regulation (NDPR) and international standards including GDPR.
        </p>


        {/* INFORMATION WE COLLECT */}
        <div className="text-lg">
          <div className="flex items-center gap-3 mb-4">
            <div>
              <img src="/Icons/info.svg" alt="Information" className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#1E293B]">
              Information We Collect
            </h2>
          </div>

          <p className="text-[#475569] mb-4 leading-7">
            We collect information that you provide directly to us, including:
          </p>

          <ul className="list-disc marker:text-sm marker:text-[#9BC53D] pl-6 text-[#475569] space-y-1.5 leading-7">
            <li>Contact information (name, email, phone number, company)</li>
            <li>Business information for service inquiries</li>
            <li>Technical data (IP address, browser type, device information)</li>
            <li>Usage data and website interaction analytics</li>
          </ul>
        </div>


        {/* COOKIES */}
        <div className="text-lg">
          <div className="flex items-center gap-3 mb-4">
            <div>
              <img src="/Icons/cookie.svg" alt="Cookies" className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold  text-[#1E293B]">
              Cookies & Tracking Technologies
            </h2>
          </div>

          <p className="text-[#475569] mb-4 leading-7">
            We use cookies and similar technologies to:
          </p>

          <ul className="list-disc marker:text-sm marker:text-[#9BC53D] pl-6 text-[#475569] space-y-1.5 leading-7">
            <li>Enhance your browsing experience and website functionality</li>
            <li>Analyze website traffic and user behavior</li>
            <li>Remember your preferences and settings</li>
            <li>Provide relevant content and marketing communications</li>
          </ul>

          <p className="text-[#475569] mt-4 leading-7">
            You can control cookie preferences through your browser settings.
          </p>
        </div>


        {/* DATA SECURITY */}
        <div className="text-lg">
          <div className="flex items-center gap-3 mb-4">
            <div>
              <img src="/Icons/security.svg" alt="Security" className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#1E293B]">
              Data Security Measures
            </h2>
          </div>

          <p className="text-[#475569] mb-4 leading-7">
            We implement industry-leading security measures to protect your personal information:
          </p>

          <ul className="list-disc marker:text-sm marker:text-[#9BC53D] pl-6 text-[#475569] space-y-1.5 leading-7">
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security audits and vulnerability assessments</li>
            <li>Access controls and authentication protocols</li>
            <li>Employee training on data protection best practices</li>
            <li>ISO-certified security management systems</li>
          </ul>
        </div>


        {/* YOUR RIGHTS */}
        <div className="text-lg">
          <div className="flex items-center gap-3 mb-4">
            <div>
              <img src="/Icons/rights.svg" alt="Your Rights" className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#1E293B]">
              Your Rights (NDPR & GDPR Aligned)
            </h2>
          </div>

          <p className="text-[#475569] mb-4 leading-7">
            Under applicable data protection laws, you have the right to:
          </p>

          <ul className="list-disc marker:text-sm marker:text-[#9BC53D] pl-6 text-[#475569] space-y-1.5 leading-7">
            <li>Access your personal data and request copies</li>
            <li>Correct inaccurate or incomplete information</li>
            <li>Request deletion of your personal data</li>
            <li>Object to processing of your data</li>
            <li>Request restriction of processing</li>
            <li>Data portability to another service provider</li>
            <li>Withdraw consent at any time</li>
          </ul>

          <p className="text-[#475569] mt-4 leading-7">
            To exercise these rights, please contact us at info@cardcentre.com.ng
          </p>
        </div>


        {/* QUESTIONS BOX */}
        <div className="border-2 bg-[#F1F5F9] rounded-xl space-y-4 p-8 mt-10">
          <h3 className="text-xl font-bold text-[#1E293B] mb-4">
            Questions About Privacy?
          </h3>

          <div className="text-[#475569] text-lg leading-7">
            <p>
            If you have any questions or concerns about our privacy practices, 
            please contact our Data 
          </p>
          <p> Protection Officer:</p>
          </div>

          <div className="text-m">
            <p className="text-[#1E293B] font-medium">
            Email: info@cardcentre.com.ng
          </p>
          <p className="text-[#1E293B] font-medium">
            Phone: +234 808 034 5389
          </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Policy;