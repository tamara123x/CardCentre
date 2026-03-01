import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Resources() {
    return (
        <main className="w-full bg-[#f6f8fb]">
            {/* ================= RESOURCES & INSIGHTS ================= */}
            <section className="bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] py-24">
                <div className="max-w-7xl text-center mx-auto px-6">
                    <h2 className="text-5xl font-extrabold text-[#0f172a]">
                        Resources & Insights
                    </h2>
                    <p className="text-[#4B5563] text-xl mt-3 max-w-2xl mx-auto">
                        Stay informed about the latest trends in identity solutions, payment
                        technology, and digital transformation
                    </p>
                </div>
            </section>

            <section className="bg-[#FFFFFF] border-b border-gray-200 py-2 pb-6">
                <div className="flex flex-wrap max-w-7xl mx-auto px-6 justify-center gap-3 mt-4">
                    {[
                        "All Articles",
                        "Digital Identity",
                        "Card Technology",
                        "Telecom Trends",
                        "Payment Security"
                    ].map((item, index) => (
                        <button
                            key={index}
                            className={`px-6 py-2 rounded-full text-m font-medium transition
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
                
            </section>
            
            <section className="bg-white w-full mx-auto p-20">
                {/* ================= FEATURED ARTICLE ================= */}
                    <div className="bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">

                    {/* Image */}
                    <img
                        src="/Images/featured.svg"
                        alt="Featured Article"
                        className="h-full w-auto object-cover"
                    />

                    {/* Content */}
                    <div className="p-10 flex flex-col justify-center">
                        <p className="text-m font-semibold tracking-wide text-[#9BC53D] uppercase">
                            Featured Article
                        </p>

                        <h3 className="text-4xl font-bold mt-3 pr-12 text-[#0F172A] leading-snug">
                            The Future of Digital <br/>
                            Identity in Africa
                        </h3>

                        <p className="text-[#4B5563] text-xl mt-4 pr-28 leading-relaxed">
                            Exploring how biometric technology and smart 
                            cards are revolutionizing identity verification 
                            across the continent, enabling secure access to 
                            financial services and government programs.
                        </p>

                        <p className="text-[#6B7280] text-sm mt-6">
                            May 15, 2024 • 8 min read
                        </p>

                        <button className="text-[#9BC53D] font-medium mt-6 text-left hover:underline">
                            Read Full Article →
                        </button>
                    </div>
                </div>
            </section>

            <section className=" max-w-8xl mx-auto bg-[#F8FAFC] py-12 px-24">
                {/* ================= BLOG GRID ================= */}
                <div className="grid md:grid-cols-3 gap-10 mt-16">

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
                                    <p className="text-xs pt-6 text-[#9BC53D] font-semibold uppercase tracking-wide">
                                        {post.category}
                                    </p>

                                    <h3 className="font-bold text-2xl mt-2 leading-snug text-[#0F172A]">
                                        {post.title}
                                    </h3>

                                    <p className="text-[#4B5563] mr-8 text-lg mt-3">
                                        {post.desc}
                                    </p>

                                    <p className="text-[#6B7280] text-sm mt-3">
                                        {post.date} • {post.read}
                                    </p>

                                    <button className="text-[#9BC53D] text-sm mt-4 font-medium hover:underline">
                                        Read More →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                
           </section>

           
        </main>
   );}
