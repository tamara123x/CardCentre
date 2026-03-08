const services = [
  {
    title: "SIM Card Manufacturing",
    icon: "/Icons/sim.svg",
    image: "/Images/sim-manufacturing.svg",
    description:
      "End-to-end SIM card production, distribution, and supply solutions for Africa's leading telecommunications companies.",
    benefits: [
      "State-of-the-art manufacturing facilities",
      "ISO-certified production processes",
      "Rapid turnaround and scalable capacity",
      "Comprehensive distribution network",
    ],
  },
  {
    title: "Financial Card Solutions",
    icon: "/Icons/fin.svg",
    image: "/Images/financial-card.svg",
    description:
      "Certified ATM and debit card personalization services for banks and financial institutions across Africa.",
    benefits: [
      "MasterCard and Verve certified",
      "EMV chip and magnetic stripe solutions",
      "Secure personalization environment",
      "Complete fulfillment services",
    ],
  },
  {
    title: "Identity Card Management",
    icon: "/Icons/id.svg",
    image: "/Images/identity-card.svg",
    description:
      "Comprehensive identity solutions including citizen IDs, loyalty cards, access control, and employee badges.",
    benefits: [
      "National ID and citizen card solutions",
      "Corporate employee ID and access cards",
      "Loyalty and membership card programs",
      "Biometric and smart card integration",
    ],
  },
  {
    title: "Data & Event Management",
    icon: "/Icons/data.svg",
    image: "/Images/event-management.svg",
    description:
      "Professional event registration, badge printing, and digital attendance solutions for enterprise clients.",
    benefits: [
      "On-site event registration systems",
      "Real-time badge printing and personalization",
      "Digital attendance tracking and reporting",
      "Data analytics and insights",
    ],
  },
];

const Services: React.FC = () => {
  return (
    <div className="w-full bg-[#F8FAFC]">

      {/* HERO */}
      <section className="w-full bg-gradient-to-br from-[#14213D] to-[#0F2F76] text-white py-20 md:pt-32 md:pb-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Enterprise Solutions
        </h1>

        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
          Comprehensive identity and payment solutions designed for Africa’s leading enterprises
        </p>
      </section>

      {/* SERVICES */}
      <section className="lg:space-y-4">

        {services.map((service, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div
               key={service.title}
               className={`grid lg:grid-cols-2 gap-14 items-center px-8 md:px-12 lg:px-20 py-20 ${
               index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"
              }`}
            >
              {/* IMAGE */}
              <div className={isReverse ? "order-2 lg:order-2" : "order-2 lg:order-1"}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl w-full"
                />
              </div>

              {/* TEXT */}
              <div className={isReverse ? "order-1 lg:order-1" : "order-1 lg:order-2"}>

                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-12 h-12 mb-6"
                />

                <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#0F172A]">
                  {service.title}
                </h2>

                <p className="text-[#4B5563] text-m md:text-2xl lg:text-xl mb-6 leading-relaxed max-w-xl">
                  {service.description}
                </p>

                <h3 className="font-semibold text-lg md:text-3xl lg:text-xl mb-3 text-[#0F172A]">
                  Key Benefits:
                </h3>

                <ul className="space-y-2 text-[#4B5563] mb-8">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <img src="/Icons/mark.svg" className="w-4 h-4" />
                      <span className="text-m md:text-2xl lg:text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <button className="bg-[#9BC53D] hover:bg-[#74a804] transition px-6 md:px-10 py-3 rounded-full text-white text-m md:text-2xl lg:text-base font-medium shadow-md">
                  Request Information
                </button>

              </div>

            </div>
          );
        })}

      </section>

    </div>
  );
};

export default Services;