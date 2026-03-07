import { useNavigate } from "react-router-dom";

const ResourcesInfo = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#FFFFFF] min-h-screen py-4 px-6">
      
      <div className="max-w-7xl mx-auto">
        {/* HERO IMAGE */}
        <div className="mb-10">
          <img
            src="/Images/resimg.svg"  
            alt="Digital Identity"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-bold text-[#9BC53D] mb-4">
          The Future of Digital Identity in Africa
        </h1>

        {/* AUTHOR & DATE */}
        <div className="flex items-center gap-7 font-semibold text-[#14213D] mb-10">
          <p className="text-xl"> Written by CCNL </p>
          <p className="text-lg text-[#B0B0B0]">Friday, September 5</p>
        </div>


        {/* BLOG CONTENT */}
        <div className="space-y-8 text-[#2D3748] leading-7 text-[21px]">

          {/* Section 1 */}
          <div>
            <h3 className="font-semibold text-[#14213D] mb-3">
              Section 1.01 — Strengthening Identity Systems Across Africa
            </h3>
            <p className="text-justify">
             Across Africa, biometric technology and smart card systems are transforming 
             the way identity is verified, creating more secure, reliable, and inclusive 
             systems. Traditionally, identity verification across many parts of the continent 
             has relied on paper based records or fragmented databases, often leading to 
             inefficiencies, fraud, and exclusion. Today, the integration of biometrics, such 
             as fingerprint recognition, facial recognition, and iris scanning, with smart card 
             technology is building stronger digital identity ecosystems that are harder to forge 
             and easier to authenticate
            </p>
          </div>


          {/* Section 2 */}
          <div>
            <h3 className="font-semibold text-[#14213D] mb-3">
              Section 1.02 — The Power of Biometric Authentication
            </h3>
            <p className="text-justify">
              Biometric technology plays a crucial role in ensuring that individuals can prove who 
              they are with precision and confidence. Unlike traditional identification methods that 
              can be lost, stolen, or manipulated, biometric data is unique to each person. Governments 
              and financial institutions are increasingly adopting these technologies to reduce identity 
              fraud, eliminate duplicate records, and streamline onboarding processes. This has significantly 
              improved trust in identity systems while also reducing administrative bottlenecks.
            </p>
          </div>


          {/* Section 3 */}
          <div>
            <h3 className="font-semibold text-[#14213D] mb-3">
              Section 1.03 — Smart Cards as Secure Access Tools
            </h3>
            <p className="text-justify">
              Smart cards, embedded with microchips that securely store encrypted personal and biometric 
              information, are further enhancing this transformation. These cards enable instant verification 
              at point-of-service locations, whether at banks, healthcare centers, border control points, or 
              government offices. With offline and online capabilities, smart cards are particularly impactful 
              in rural or underserved regions where internet connectivity may be limited, ensuring that access 
              to essential services is not restricted by infrastructure gaps.
            </p>
          </div>


          {/* Section 4 */}
          <div>
            <h3 className="font-semibold text-[#14213D] mb-3">
              Section 1.04 — Driving Financial Inclusion Through Secure Identity
            </h3>
            <p className="text-justify">
              The impact on financial inclusion has been especially profound. Secure identity verification allows 
              millions of previously unbanked individuals to open bank accounts, access loans, receive remittances, 
              and participate in digital payment systems. By linking biometric identity systems to banking platforms 
              and mobile money services, financial institutions can meet compliance requirements while expanding their 
              customer base. This not only strengthens the financial ecosystem but also empowers individuals economically.
            </p>
          </div>


          {/* Section 5 */}
          <div>
            <h3 className="font-semibold text-[#14213D] mb-3">
              Section 1.05 — Enhancing Government Service Delivery
            </h3>
            <p className="text-justify">
              Beyond financial services, biometric and smart card solutions are improving the delivery of government 
              programs across the continent. From social welfare distributions to voter registration and healthcare 
              services, these technologies help ensure that benefits reach the intended recipients. By minimizing fraud 
              and leakage, governments can allocate resources more effectively and build greater public trust. As adoption 
              continues to grow, biometric and smart card innovations are shaping a more secure, inclusive, and digitally 
              connected Africa.
            </p>
          </div>

        </div>


        {/* CLOSE BLOG */}
        <div className="mt-10 text-center">
          <button 
            onClick={() => navigate("/resources")}
            className="text-lg font-bold text-[#9BC53D] hover:underline">
            Close Blog
          </button>
        </div>

      </div>
    </section>
  );
};

export default ResourcesInfo;