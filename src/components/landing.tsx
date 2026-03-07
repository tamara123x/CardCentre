import { useNavigate } from "react-router-dom";

export default function LandingPage() {
    const navigate = useNavigate();
    return (
        <main className="w-full bg-[#f6f8fb]">
            {/* ================= HERO SECTION ================= */}
            <section className="relative mx-auto px-28 pt-16 pb-20 grid lg:grid-cols-2 gap-12 items-center">
                <div className="absolute inset-0 h-full w-auto">
                    <img 
                        src="/Images/background.svg" 
                        alt="Background" 
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC]/95 to-[#EFF6FF]/95"></div>
                </div>

                <div className="relative z-10">
                    <h1 className="text-6xl font-extrabold leading-tight text-[#0f172a]">
                        Innovative Identity <br />
                        & Payment <br />
                        Solutions for <br />
                        Africa’s Enterprises
                    </h1>

                    <p className="mt-4 text-gray-600 text-2xl leading-relaxed max-w-xl">
                        Leading provider of SIM, financial card, and identity
                        solutions across Africa. Trusted by banks, telcos,
                        and government institutions.
                    </p>

                    <div className="flex gap-4 mt-8">
                        <button 
                            onClick={() => navigate("/about")}
                            className="bg-[#9BC53D] text-white text-lg px-8 py-3 rounded-full font-medium hover:opacity-90 transition">
                            Learn More
                        </button>
                        <button 
                            onClick={() => navigate("/contact-us")}
                            className="border border-[#9BC53D] text-lg text-[#9BC53D] px-8 py-3 rounded-full font-medium hover:bg-[#84c341] hover:text-white transition">
                            Contact Us
                        </button>
                    </div>
                </div>

                <div className="flex justify-center relative z-10 gap-4">
                    <div>
                        <img src="/Images/hero1.svg" alt="hero1" className="rounded-xl object-cover h-auto w-80" />
                        <img src="/Images/hero3.svg" alt="hero3" className="rounded-xl object-cover h-auto w-80 mt-6" />
                    </div>
                    <div className="mt-8">
                        <img src="/Images/hero2.svg" alt="hero2" className="rounded-xl object-cover  h-auto w-80" />
                        <img src="/Images/hero4.svg" alt="hero4" className="rounded-xl object-cover  h-auto w-80 mt-6" />
                    </div>    
                </div>
            </section>


            {/* ================= CORE SOLUTIONS ================= */}
            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-[#0f172a]">
                        Our Core Solutions
                    </h2>
                    <p className="text-[#4B5563] text-xl max-w-2xl mx-auto rounded-lg mt-3">
                        Comprehensive identity and payment 
                        solutions tailored for Africa's leading enterprises
                    </p>

                    <div className="grid md:grid-cols-4 gap-8 mt-14">
                        {[
                            {
                                icon: "/Icons/sim.svg",
                                title: "SIM Card Production",
                                desc: "Advanced SIM manufacturing, distribution, and supply solutions for Africa's leading telecom operators."
                            },
                            {
                                icon: "/Icons/fin.svg",
                                title: "Financial Card Solutions",
                                desc: "Certified ATM and debit card personalization services for banks and financial institutions."
                            },
                            {
                                icon: "/Icons/id.svg",
                                title: "Identity Card Management",
                                desc: "Comprehensive ID solutions including citizen IDs, loyalty cards, and access control systems."
                            },
                            {
                                icon: "/Icons/data.svg",
                                title: "Data & Event Management",
                                desc: "Event registration, badge printing, and digital attendance solutions for enterprise clients."
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-[#F8FAFC] px-8 py-10 rounded-xl text-left hover:shadow-md transition">
                                <img src={item.icon} className="h-12 w-12 mb-6" alt={item.title} />
                                <h3 className="font-bold text-[#0F172A] text-xl">{item.title}</h3>
                                <p className="text-[#4B5563] text-m mt-4 mr-7">{item.desc}</p>
                                <p 
                                    onClick={() => navigate("/about")}
                                    className="text-[#9BC53D] mt-4 font-medium cursor-pointer">
                                    Learn More &gt;
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= CERTIFIED & TRUSTED ================= */}
           <section className="bg-gradient-to-br from-[#0F172A] to-[#0F172A] py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
        
                    <h2 className="text-4xl font-bold text-white">
                        Certified & Trusted
                    </h2>

                    <p className="text-gray-300 text-xl mt-3">
                        Accredited by leading global payment networks and industry authorities
                    </p>

                    <div className="grid md:grid-cols-4 gap-8 mt-12 text-sm flex items-center">
            
                        <div className="bg-white rounded-xl py-10 px-10 space-y-4 flex flex-col justify-center items-center">
                            <img src="/Icons/VERVE.svg" alt="Verve" className="h-auto w-auto object-contain" />
                            <p className="text-[#6B7280] font-semibold">Certified Partner</p>
                        </div>

                        <div className="bg-white rounded-xl py-4 px-10 flex flex-col justify-center items-center">
                            <img src="/Icons/PCIDSS.svg" alt="PCI DSS" className="h-20 w-20 object-contain" />
                            <p className="text-[#6B7280] font-semibold">PCIDSS </p>
                        </div>

                        <div className="bg-white rounded-xl py-4 px-10 flex flex-col justify-center items-center">
                            <img src="/Icons/NDPR.svg" alt="NDPR" className="h-20 w-20 object-contain" />   
                            <p className="text-[#6B7280] font-semibold">NDPR </p>
                        </div>

                        <div className="bg-white rounded-xl py-4 px-10 flex flex-col justify-center items-center">
                            <img src="/Icons/AFRIGO.svg" alt="AFRIGO" className="h-full w-full object-contain" />
                            <p className="text-[#6B7280] font-semibold">Certified Partner</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
   );
}
