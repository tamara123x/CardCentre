const Services: React.FC = () => {
  return (
    <div className="w-full bg-[#F8FAFC]">

      {/* ================= HERO SECTION ================= */}
      <section className="w-full bg-gradient-to-br from-[#14213D] to-[#0F2F76] text-white pt-32 pb-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Enterprise Solutions
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
          Comprehensive identity and payment solutions designed for Africa’s leading enterprises
        </p>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="w-full mx-auto space-y-18">

        {/* ===== 1. SIM Card Manufacturing ===== */}
        <div className="bg-[#FFFFFF] py-20 px-20 grid md:grid-cols-2 items-center">
          <img
            src="/Images/sim-manufacturing.svg"
            alt="SIM Manufacturing"
            className="mt-8 rounded-2xl"
          />

          <div className="py-5">
            <img src="/Icons/sim.svg" alt="SIM Card" className="w-12 h-12 mb-7 object-contain"/>
            <h2 className="text-4xl font-bold mb-4 text-[#0F172A]">
              SIM Card Manufacturing
            </h2>
            <p className="text-[#4B5563] text-xl mb-6 mr-32">
              End-to-end SIM card production, distribution, and supply solutions for 
              Africa's leading telecommunications companies.
            </p>

            <h3 className="font-semibold text-2xl mb-3 text-[#0F172A]">Key Benefits:</h3>

            <ul className="space-y-2 text-lg text-[#4B5563] mb-6">
              <li className="flex items-center gap-3">
                <img src="/Icons/mark.svg" alt="Checkmark" className="w-4 h-4" />
                <span>State-of-the-art manufacturing facilities</span>
              </li>
              <li className="flex items-center gap-3">
                <img src="/Icons/mark.svg" alt="Checkmark" className="w-4 h-4" />
                <span>ISO-certified production processes</span>
              </li>
              <li className="flex items-center gap-3">
                <img src="/Icons/mark.svg" alt="Checkmark" className="w-4 h-4" />
                <span>Rapid turnaround and scalable capacity</span>
              </li>
              <li className="flex items-center gap-3">
                <img src="/Icons/mark.svg" alt="Checkmark" className="w-4 h-4" />
                <span>Comprehensive distribution network</span>
              </li>
            </ul>

            <button className="bg-[#9BC53D] hover:bg-[#74a804] transition px-8 py-3 rounded-full text-white font-medium shadow-md">
              Request Information
            </button>
          </div>
        </div>

        {/* ===== 2. Financial Card Solutions ===== */}
        <div className="py-20 px-20 grid md:grid-cols-2 items-center">
          <div className="py-5 px-12">
            <img src="/Icons/fin.svg" alt="Financial Card" className="w-12 h-12 mb-7 object-contain"/>
            <h2 className="text-4xl font-bold mb-4 text-[#0F172A]">
              Financial Card Solutions
            </h2>
            <p className="text-[#4B5563] text-xl mb-6 mr-30">
              Certified ATM and debit card personalization services 
              for banks and financial institutions across Africa.
            </p>

            <h3 className="font-semibold text-2xl mb-3 text-[#0F172A]">Key Benefits:</h3>

            <ul className="space-y-2 text-lg text-[#4B5563] mb-6">
              <li className="flex items-center gap-3">
                <img src="/Icons/mark.svg" alt="Checkmark" className="w-4 h-4" />
                <span>MasterCard and Verve certified</span>
              </li>
              <li className="flex items-center gap-3">
                <img src="/Icons/mark.svg" alt="Checkmark" className="w-4 h-4" />
                <span>EMV chip and magnetic stripe solutions</span>
              </li>
              <li className="flex items-center gap-3">
                <img src="/Icons/mark.svg" alt="Checkmark" className="w-4 h-4" />
                <span>Secure personalization environment</span>
              </li>
              <li className="flex items-center gap-3">
                <img src="/Icons/mark.svg" alt="Checkmark" className="w-4 h-4" />
                <span>Complete fulfillment services</span>
              </li>
            </ul>

            <button className="bg-[#9BC53D] hover:bg-[#74a804] transition px-8 py-3 rounded-full text-white font-medium shadow-md">
              Request Information
            </button>
          </div>

          <img
            src="/Images/financial-card.svg"
            alt="Financial Card"
            className="mt-8 rounded-2xl"
          />
        </div>

        {/* ===== 3. Identity Card Management ===== */}
        <div className="py-20 px-20 bg-[#FFFFFF] grid md:grid-cols-2 items-center">
          <img
            src="/Images/identity-card.svg"
            alt="Identity Card"
            className="mr-8 rounded-2xl"
          />

          <div className="py-4">
            <img src="/Icons/id.svg" alt="Identity Card" className="w-12 h-12 mb-7 object-contain"/>
            <h2 className="text-4xl font-bold mb-4 text-[#0F172A]">
              Identity Card Management
            </h2>
            <p className="text-[#4B5563] text-xl mb-6 mr-32">
              Comprehensive identity solutions including citizen IDs, 
              loyalty cards, access control, and employee badges.
            </p>

            <h3 className="font-semibold text-2xl mb-3 text-[#0F172A]">Key Benefits:</h3>

            <ul className="space-y-2 text-lg text-[#4B5563] mb-6">
              <li className="flex items-center gap-3">
                <img src="/Icons/mark.svg" alt="Checkmark" className="w-4 h-4" />
                <span>National ID and citizen card solutions</span>
              </li>
              <li className="flex items-center gap-3">
                <img src="/Icons/mark.svg" alt="Checkmark" className="w-4 h-4" />
                <span>Corporate employee ID and access cards</span>
              </li>
              <li className="flex items-center gap-3">
                <img src="/Icons/mark.svg" alt="Checkmark" className="w-4 h-4" />
                <span>Loyalty and membership card programs</span>
              </li>
              <li className="flex items-center gap-3">
                <img src="/Icons/mark.svg" alt="Checkmark" className="w-4 h-4" />
                <span>Biometric and smart card integration</span>
              </li>
            </ul>

            <button className="bg-[#9BC53D] hover:bg-[#74a804] transition px-8 py-3 rounded-full text-white font-medium shadow-md">
              Request Information
            </button>
          </div>
        </div>

        {/* ===== 4. Data & Event Management ===== */}
        <div className="py-20 px-20 grid md:grid-cols-2 items-center">
          <div className="py-5 px-12">
            <img src="/Icons/data.svg" alt="Data & Event Management" className="w-12 h-12 mb-7 object-contain"/>
            <h2 className="text-4xl font-bold mb-4 text-[#0F172A]">
              Data & Event Management
            </h2>
            <p className="text-[#4B5563] text-xl mb-6 mr-30">
              Professional event registration, badge printing, and 
              digital attendance solutions for enterprise clients.
            </p>

            <h3 className="font-semibold text-2xl mb-3 text-[#0F172A]">Key Benefits:</h3>

            <ul className="space-y-2 text-lg text-[#4B5563] mb-6">
              <li className="flex items-center gap-3">
                <img src="/Icons/mark.svg" alt="Checkmark" className="w-4 h-4" />
                <span>On-site event registration systems</span>
              </li>
              <li className="flex items-center gap-3">
                <img src="/Icons/mark.svg" alt="Checkmark" className="w-4 h-4" />
                <span>Real-time badge printing and personalization</span>
              </li>
              <li className="flex items-center gap-3">
                <img src="/Icons/mark.svg" alt="Checkmark" className="w-4 h-4" />
                <span>Digital attendance tracking and reporting</span>
              </li>
              <li className="flex items-center gap-3">
                <img src="/Icons/mark.svg" alt="Checkmark" className="w-4 h-4" />
                <span>Data analytics and insights</span>
              </li>
            </ul>

            <button className="bg-[#9BC53D] hover:bg-[#74a804] transition px-8 py-3 rounded-full text-white font-medium shadow-md">
              Request Information
            </button>
          </div>

          <img
            src="/Images/event-management.svg"
            alt="Event Management"
            className="mr-8rounded-2xl"
          />
        </div>

      </section>
    </div>
  );
};

export default Services;