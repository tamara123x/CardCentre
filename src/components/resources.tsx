import { useNavigate } from "react-router-dom";
import AnimatedSection from "./animation";

export default function Resources() {
    const navigate = useNavigate();

    return (
        <main className="w-full bg-[#f6f8fb]">
            {/* ================= RESOURCES & INSIGHTS ================= */}
            <AnimatedSection direction="up" className="bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] py-12 lg:py-20">
                <div className="max-w-7xl text-center mx-auto px-6">
                    <AnimatedSection className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0f172a]">
                        Resources & Insights
                    </AnimatedSection>
                    <AnimatedSection direction="left" className="text-[#4B5563] text-base md:text-lg lg:text-xl mt-3 max-w-2xl mx-auto">
                        Stay informed about the latest trends in identity solutions, payment
                        technology, and digital transformation
                    </AnimatedSection>
                </div>
            </AnimatedSection>

            <AnimatedSection className="bg-[#FFFFFF] border-b border-gray-200 py-2 pb-6">
                <div className="flex flex-wrap max-w-7xl mx-auto px-6 justify-center gap-4 md:gap-6 mt-4">
                    {[
                       "All Articles",
                       "Digital Identity",
                       "Card Technology",
                       "Telecom Trends",
                       "Payment Security"
                    ].map((item, index) => (

                        <button
                            key={index}
                            className={`px-4 md:px-6 py-2 rounded-full text-sm md:text-m font-medium transition
                            ${
                                index === 0
                                ? "bg-[#9BC53D] text-white"
                                : "bg-[#F1F5F9] text-[#374151]  hover:bg-gray-100"
                            }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>        
            </AnimatedSection>
            
            <AnimatedSection direction="right" className="bg-white w-full mx-auto p-6 lg:p-20">
                {/* ================= FEATURED ARTICLE ================= */}
                <div className="bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">
                    {/* Image */}
                    <AnimatedSection direction="left">
                    <img
                        src="/Images/featured.svg"
                        alt="Featured Article"
                        className="h-full w-auto object-cover"
                    />
                    </AnimatedSection>

                    {/* Content */}
                    <AnimatedSection direction="right" className="p-6 lg:p-10 flex flex-col justify-center">
                        <AnimatedSection className="text-sm md:text-m font-semibold tracking-wide text-[#9BC53D] uppercase">
                           Featured Article
                        </AnimatedSection>

                        <AnimatedSection className="text-2xl lg:text-4xl font-bold mt-3 pr-12 lg:mr-28 text-[#0F172A] leading-snug">
                           The Future of Digital 
                           Identity in Africa
                        </AnimatedSection>

                        <AnimatedSection className="text-[#4B5563] text-base md:text-xl mt-4 lg:pr-28 leading-relaxed">
                           Exploring how biometric technology and smart 
                           cards are revolutionizing identity verification 
                           across the continent, enabling secure access to 
                           financial services and government programs.
                        </AnimatedSection>

                        <AnimatedSection direction="left" className="text-[#6B7280] text-sm mt-6">
                            May 15, 2024 • 8 min read
                        </AnimatedSection>

                        <AnimatedSection> 
                        <button 
                            onClick={() => navigate("/resources-info/featured")}
                            className="text-[#9BC53D] font-medium text-sm md:text-base mt-6 text-left hover:underline">
                            Read Full Article →
                        </button>
                        </AnimatedSection>
                    </AnimatedSection>
                </div>
            </AnimatedSection>

            <AnimatedSection className=" max-w-8xl mx-auto bg-[#F8FAFC] lg:py-12 px-6 lg:px-24">
                {/* ================= BLOG GRID ================= */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
                    {[
                    {
                       image: "/Images/emv.svg",
                       title: "EMV Technology: Enhancing Payment Security",
                       category: "Card Technology",
                       desc: "Understanding how EMV chip technology is reducing fraud and protecting consumers across Africa's banking sector.",
                       date: "May 10, 2024",
                       read: "5 min read"
                    },
                    {
                       image: "/Images/5g.svg",
                       title: "5G and the Evolution of SIM Technology",
                       category: "Telecom Trends",
                       desc: "How next-generation networks are driving innovation in SIM card design and manufacturing processes.",
                       date: "May 5, 2024",
                       read: "6 min read"
                   },
                   {
                       image: "/Images/best.svg",
                       title: "Best Practices for Card Data Security",
                       category: "Payment Security",
                       desc: "Essential security measures for protecting sensitive cardholder information in financial institutions.",
                       date: "April 28, 2024",
                       read: "7 min read"
                   },
                   {
                       image: "/Images/national.svg",
                       title: "National ID Programs: A Digital Transformation",
                       category: "Digital Identity",
                       desc: "How African governments are leveraging smart ID cards to improve citizen services and financial inclusion.",
                       date: "April 20, 2024",
                       read: "9 min read"
                    },
                    {
                        image: "/Images/rise.svg",
                        title: "The Rise of Contactless Payments in Africa",
                        category: "Payment Security",
                        desc: "Examining the growth of NFC-enabled cards and mobile payments across the African continent.",
                        date: "April 15, 2024",
                        read: "5 min read"
                    },
                    {
                        image: "/Images/smart.svg",
                        title: "Smart Manufacturing for Smart Cards",
                        category: "Card Technology",
                        desc: "How Industry 4.0 technologies are revolutionizing smart card production and quality control.",
                        date: "April 8, 2024",
                        read: "6 min read"
                   }
                   ].map((post, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden"
                        >
                            <div className="w-full mx-auto h-52 flex items-center justify-center">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="h-60 object-contain"
                                />
                            </div>

                            <div className="p-6">
                                <AnimatedSection className="text-xs pt-6 text-[#9BC53D] font-semibold uppercase tracking-wide">
                                    {post.category}
                                </AnimatedSection>

                                <AnimatedSection className="font-bold text-xl md:text-2xl mt-2 leading-snug text-[#0F172A]">
                                    {post.title}
                                </AnimatedSection>

                                <AnimatedSection className="text-[#4B5563] mr-8 text-base lg:text-lg mt-3">
                                    {post.desc}
                                </AnimatedSection>

                                <AnimatedSection className="text-[#6B7280] text-sm mt-3">
                                    {post.date} • {post.read}
                                </AnimatedSection>

                                <AnimatedSection>
                                <button 
                                    onClick={() => navigate(`/resources-info/${index}`)}
                                    className="text-[#9BC53D] text-sm mt-4 font-medium hover:underline">
                                    Read More →
                                </button>
                                </AnimatedSection>
                            </div>
                        </div>
                    ))}
                </div>
            </AnimatedSection>   
        </main>
    );
}