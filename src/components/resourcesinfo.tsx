import { useNavigate, useParams } from "react-router-dom";
import AnimatedSection from "./animation";

const ResourcesInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  /* ARTICLE DATA */
  const resources = {
    featured: {
      title: "The Future of Digital Identity in Africa",
      image: "/Images/featured.svg",
      author: "Written by CCNL",
      date: "Wednesday, May 15 2024",
      content: [
      {
        heading: "Section 1.01 — Strengthening Identity Systems Across Africa",
        text: "Across Africa, biometric technology and smart card systems are transforming the way identity is verified, creating more secure, reliable, and inclusive systems. Traditionally, identity verification across many parts of the continent has relied on paper based records or fragmented databases, often leading to inefficiencies, fraud, and exclusion. Today, the integration of biometrics, such as fingerprint recognition, facial recognition, and iris scanning, with smart card technology is building stronger digital identity ecosystems that are harder to forge and easier to authenticate."
      },
      {
        heading: "Section 1.02 — The Power of Biometric Authentication",
        text: "Biometric technology plays a crucial role in ensuring that individuals can prove who they are with precision and confidence. Unlike traditional identification methods that can be lost, stolen, or manipulated, biometric data is unique to each person. Governments and financial institutions are increasingly adopting these technologies to reduce identity fraud, eliminate duplicate records, and streamline onboarding processes. This has significantly improved trust in identity systems while also reducing administrative bottlenecks."
      },
      {
        heading: "Section 1.03 — Smart Cards as Secure Access Tools",
        text: "Smart cards, embedded with microchips that securely store encrypted personal and biometric information, are further enhancing this transformation. These cards enable instant verification at point-of-service locations, whether at banks, healthcare centers, border control points, or government offices. With offline and online capabilities, smart cards are particularly impactful in rural or underserved regions where internet connectivity may be limited, ensuring that access to essential services is not restricted by infrastructure gaps."
      },
      {
        heading: "Section 1.04 — Driving Financial Inclusion Through Secure Identity",
        text: "The impact on financial inclusion has been especially profound. Secure identity verification allows millions of previously unbanked individuals to open bank accounts, access loans, receive remittances, and participate in digital payment systems. By linking biometric identity systems to banking platforms and mobile money services, financial institutions can meet compliance requirements while expanding their customer base. This not only strengthens the financial ecosystem but also empowers individuals economically."
      },
      {
        heading: "Section 1.05 — Enhancing Government Service Delivery",
        text: "Beyond financial services, biometric and smart card solutions are improving the delivery of government programs across the continent. From social welfare distributions to voter registration and healthcare services, these technologies help ensure that benefits reach the intended recipients. By minimizing fraud and leakage, governments can allocate resources more effectively and build greater public trust. As adoption continues to grow, biometric and smart card innovations are shaping a more secure, inclusive, and digitally connected Africa."
      }
    ]
    },

    0: {
      title: "EMV Technology: Enhancing Payment Security",
      image: "/Images/emv.svg",
      author: "Written by CCNL",
      date: "Friday, May 10 2024",
      content: [
      {
        heading: "Section 1.01 — Understanding EMV Technology",
        text: "EMV (Europay, Mastercard, and Visa) technology represents a global standard for secure card payments. EMV-enabled cards contain embedded microchips that store and protect payment data more securely than traditional magnetic stripe cards. These chips generate unique transaction codes for every purchase, making it nearly impossible for fraudsters to duplicate card information. As Africa sees a rise in digital payments, EMV adoption is critical for reducing counterfeit card fraud and ensuring trust in the payment ecosystem."
      },
      {
        heading: "Section 1.02 — How EMV Reduces Fraud",
        text: "The microchip in EMV cards provides dynamic authentication, which differs from static magnetic stripe cards. Each transaction generates a one-time cryptographic code, so even if transaction data is intercepted, it cannot be reused. This significantly mitigates risks such as card cloning and skimming. Banks, payment processors, and merchants increasingly rely on EMV technology to protect both their customers and themselves from financial losses due to fraud."
      },
      {
        heading: "Section 1.03 — EMV Cards and Global Acceptance",
        text: "EMV cards are not only more secure but also internationally compatible. Travelers and businesses across Africa benefit from EMV’s widespread adoption, allowing seamless cross-border transactions. With compliance to global EMV standards, financial institutions can issue cards that work at ATMs, point-of-sale terminals, and online platforms worldwide. This interoperability strengthens consumer confidence and enables African markets to participate more fully in global commerce."
      },
      {
        heading: "Section 1.04 — Driving Digital Payment Adoption in Africa",
        text: "The integration of EMV technology has accelerated digital payment adoption on the continent. Secure, reliable, and convenient payment methods encourage consumers to move away from cash, supporting mobile money platforms, online shopping, and e-commerce services. By reducing the fear of fraud, EMV cards contribute to financial inclusion, enabling more people to participate in digital economies and benefit from modern financial services."
      },
      {
        heading: "Section 1.05 — The Future of EMV and Payment Security",
        text: "As payment technologies evolve, EMV continues to play a foundational role in securing transactions. Innovations such as EMV contactless cards, tokenization, and mobile wallet integration are extending the benefits of EMV technology. For African banks and merchants, investing in EMV infrastructure is essential not only for compliance but also for building consumer trust and enabling the next generation of secure, convenient, and inclusive payment solutions."
      }
    ]
    },

    1: {
      title: "5G and the Evolution of SIM Technology",
      image: "/Images/5g.svg",
      author: "Written by CCNL",
      date: "Sunday, May 5 2024",
      content: [
      {
        heading: "Section 1.01 — The Role of SIM Cards in Mobile Connectivity",
        text: "SIM (Subscriber Identity Module) cards have long been the cornerstone of mobile connectivity, securely storing user credentials and enabling access to mobile networks. Traditionally, SIM cards provided authentication for voice and data services on 2G, 3G, and 4G networks. With the advent of 5G, SIM technology is evolving to support higher speeds, lower latency, and a growing number of connected devices, ensuring seamless mobile experiences for consumers and businesses alike."
      },
      {
        heading: "Section 1.02 — eSIMs and Remote Provisioning",
        text: "The evolution of SIM technology is marked by the rise of eSIMs (embedded SIMs), which are programmable chips soldered directly into devices. Unlike traditional SIM cards, eSIMs can be remotely provisioned, allowing users to switch carriers without physically changing a card. This flexibility supports global travel, IoT deployments, and multi-network connectivity, making it easier for consumers and businesses to adapt to changing network requirements in real-time."
      },
      {
        heading: "Section 1.03 — 5G’s Demands on SIM Technology",
        text: "5G networks introduce ultra-fast speeds, massive device connectivity, and extremely low latency, which traditional SIM cards alone cannot fully support. Modern SIM technology is designed to handle the increased security requirements, dynamic network slicing, and device authentication needed for 5G applications. From autonomous vehicles to smart factories, these SIM advancements ensure that devices remain securely connected and compliant with next-generation network standards."
      },
      {
        heading: "Section 1.04 — Security Enhancements in Next-Gen SIMs",
        text: "As 5G enables new services, including mobile banking, telemedicine, and industrial IoT, SIM security becomes even more critical. Advanced SIMs incorporate stronger encryption, secure key storage, and multi-factor authentication capabilities. These measures protect against identity theft, unauthorized network access, and fraudulent activity, ensuring that sensitive personal and business data remains safe even in highly connected 5G environments."
      },
      {
        heading: "Section 1.05 — Unlocking the Future of Connected Devices",
        text: "The combination of 5G and evolving SIM technology opens the door to innovative services and business models across Africa. From smart cities and autonomous transport to mobile financial services and e-learning platforms, the ability to securely connect devices at scale is transformative. By embracing next-generation SIM technology, mobile operators and enterprises can deliver faster, safer, and more flexible connectivity, empowering individuals and industries to thrive in the digital era."
      }
    ]
    },

    2: {
      title: "Best Practices for Card Data Security",
      image: "/Images/best.svg",
      author: "Written by CCNL",
      date: "Sunday, April 28 2024",
      content: [
      {
        heading: "Section 1.01 — Understanding Card Data Security",
        text: "Card data security is critical for protecting sensitive financial information and maintaining trust in the digital economy. Cardholders’ information, including PAN (Primary Account Number), CVV, and expiration dates, is a prime target for cybercriminals. Ensuring secure storage, transmission, and processing of this data is essential for banks, merchants, and consumers alike. Implementing robust security practices minimizes fraud, identity theft, and financial losses."
      },
      {
        heading: "Section 1.02 — Encryption and Tokenization",
        text: "Two key technologies for safeguarding card data are encryption and tokenization. Encryption transforms sensitive information into unreadable formats during storage and transmission, while tokenization replaces card details with randomized tokens that are useless if intercepted. These methods prevent unauthorized access, reduce compliance risks, and provide a secure framework for online, in-store, and mobile transactions."
      },
      {
        heading: "Section 1.03 — Compliance with Industry Standards",
        text: " Adhering to global standards such as PCI DSS (Payment Card Industry Data Security Standard) is fundamental for protecting cardholder information. Compliance ensures that financial institutions and merchants implement proper security measures, such as firewalls, access controls, and regular audits. Meeting these standards not only safeguards data but also enhances consumer confidence in digital payment systems."
      },
      {
        heading: "Section 1.04 — Multi-Factor Authentication and Fraud Monitoring",
        text: "Beyond data encryption, active monitoring and authentication strategies play a vital role in card security. Multi-factor authentication (MFA) adds layers of verification for card usage, while real-time fraud monitoring detects unusual transactions and prevents unauthorized charges. Together, these practices reduce the risk of account takeover and provide proactive protection for both businesses and customers."
      },
      {
        heading: "Section 1.05 — Educating Consumers and Employees",
        text: "Technology alone cannot guarantee security; awareness is equally important. Educating cardholders about safe practices—such as avoiding suspicious websites, securing devices, and regularly reviewing account activity—reduces exposure to fraud. Similarly, training employees on secure payment handling, data privacy, and incident response ensures that organizational practices support overall card security. Combined, these measures create a resilient ecosystem for safe digital payments."
      }
    ]
    },

    3: {
      title: "National ID Programs: A Digital Transformation",
      image: "/Images/national.svg",
      author: "Written by CCNL",
      date: "Saturday, April 20 2024",
      content: [
      {
        heading: "Section 1.01 — The Importance of National ID Programs",
        text: "National ID programs are critical for creating a unified system of identity that supports governance, economic development, and social inclusion. By providing every citizen with a unique, verifiable identity, governments can improve service delivery, reduce fraud, and enhance trust in public institutions. Across Africa, these programs are transitioning from paper-based systems to digital platforms, enabling faster, more secure, and more inclusive access to services."
      },
      {
        heading: "Section 1.02 — Biometric Integration in National IDs",
        text: "Modern national ID programs increasingly integrate biometric technologies such as fingerprints, facial recognition, and iris scans. Biometric identifiers ensure that each individual’s identity is unique, verifiable, and difficult to forge. This improves accuracy in registration processes, reduces duplicate records, and supports secure access to government services, financial systems, and healthcare programs, particularly for underserved populations."
      },
      {
        heading: "Section 1.03 — Enabling Digital Services and Financial Inclusion",
        text: "National IDs are a gateway to digital services and financial inclusion. Linking a verified digital identity to banking systems, mobile money platforms, and government services allows citizens to open bank accounts, apply for loans, receive subsidies, and participate in social welfare programs. Digital IDs streamline onboarding processes, reduce administrative bottlenecks, and empower citizens economically by providing them with recognized and secure credentials."
      },
      {
        heading: "Section 1.04 — Enhancing Governance and Public Service Delivery",
        text: "National ID systems improve the efficiency and transparency of government operations. From voter registration to healthcare delivery, social grants, and taxation, digital IDs help ensure that benefits reach the intended recipients. They also reduce fraud, leakage, and administrative errors, enabling governments to allocate resources more effectively and build public trust in institutions."
      },
      {
        heading: "Section 1.05 — Challenges and the Path Forward",
        text: "While national ID programs offer significant benefits, challenges such as data privacy, cybersecurity, infrastructure gaps, and public awareness must be addressed. Governments must invest in secure databases, encryption technologies, and regulatory frameworks to protect personal data. With careful planning, digital national ID systems can become a cornerstone for inclusive growth, secure service delivery, and a digitally connected society across Africa."
      }
    ]
    },

    4: {
      title: "The Rise of Contactless Payments in Africa",
      image: "/Images/rise.svg",
      author: "Written by CCNL",
      date: "Monday, April 15 2024",
      content: [
      {
        heading: "Section 1.01 — Understanding Contactless Payments",
        text: "Contactless payments allow consumers to make transactions quickly and securely by tapping a card, smartphone, or wearable device on a payment terminal. Powered by NFC (Near Field Communication) technology, these payments eliminate the need for cash or PIN entry for small transactions, offering speed, convenience, and hygiene—features that have become increasingly important in modern retail and service environments."
      },
      {
        heading: "Section 1.02 — Drivers of Adoption in Africa",
        text: "The rise of contactless payments in Africa is fueled by smartphone penetration, the expansion of mobile money platforms, and growing consumer demand for convenient payment methods. Urbanization, e-commerce growth, and digital banking initiatives are also accelerating adoption. As more businesses and banks integrate contactless solutions, consumers gain access to seamless, secure payment options that reduce reliance on cash."
      },
      {
        heading: "Section 1.03 — Security Benefits of Contactless Technology",
        text: "Contactless payments leverage multiple layers of security, including encryption, tokenization, and dynamic authentication. Each transaction generates a unique code, minimizing the risk of fraud from intercepted data. Additionally, spending limits on contactless transactions further protect consumers. These features make contactless payments a secure alternative to traditional magnetic stripe or cash-based methods."
      },
      {
        heading: "Section 6.04 — Impact on Financial Inclusion",
        text: "By enabling fast, low-friction transactions, contactless payments expand access to financial services for unbanked and underbanked populations. Mobile wallets and prepaid contactless cards allow individuals without traditional bank accounts to participate in digital commerce. This democratization of payments strengthens the financial ecosystem, promotes economic participation, and supports inclusive growth across the continent."
      },
      {
        heading: "Section 6.05 — The Future of Contactless Payments in Africa",
        text: "The future of contactless payments in Africa is closely linked to innovation in mobile technology, payment infrastructure, and regulatory frameworks. As adoption grows, new applications—such as transit fare systems, event ticketing, and micro-payments—will emerge. By embracing secure, convenient, and widely accessible contactless solutions, Africa is poised to transform its payment landscape and foster a more connected digital economy."
      }
    ]
    },

    5: {
      title: "Smart Manufacturing for Smart Cards",
      image: "/Images/smart.svg",
      author: "Written by CCNL",
      date: "Monday, April 8 2024",
      content: [
      {
        heading: "Section 1.01 — The Evolution of Smart Card Production",
        text: "Smart card manufacturing has evolved from simple plastic card printing to highly sophisticated processes integrating microchips, secure elements, and advanced personalization technologies. Modern smart cards are designed to store encrypted data, support biometric authentication, and enable secure transactions for financial, government, and corporate applications. Smart manufacturing ensures that each card meets strict quality and security standards, reducing defects and enhancing reliability."
      },
      {
        heading: "SSection 1.02 — Automation and Precision in Production",
        text: "Smart manufacturing leverages automation, robotics, and precision engineering to produce cards at scale with consistent quality. Automated chip embedding, laser engraving, and surface encoding minimize human error and maintain high security standards. These processes also allow for faster production timelines, enabling banks, governments, and enterprises to deploy large volumes of secure cards efficiently."
      },
      {
        heading: "Section 1.03 — Security by Design",
        text: "In smart card manufacturing, security begins at the production stage. Advanced manufacturing techniques incorporate tamper-evident features, holograms, microtext, and cryptographic key injection to prevent cloning or unauthorized access. By embedding security features during manufacturing, smart cards are prepared to meet regulatory compliance and protect sensitive data from the moment they are issued."
      },
      {
        heading: "Section 1.04 — Personalization and Digital Integration",
        text: "Smart card manufacturing now includes sophisticated personalization processes, such as printing user information, encoding magnetic stripes, and loading biometric templates. Integration with digital systems ensures that cards are ready for financial transactions, identity verification, and access control immediately upon issuance. This combination of physical and digital personalization supports secure and convenient usage for cardholders."
      },
      {
        heading: "Section 1.05 — Future Trends in Smart Card Manufacturing",
        text: "The future of smart card manufacturing is closely linked to innovation in materials, IoT integration, and sustainability. Emerging trends include eco-friendly card production, contactless and dual-interface cards, and enhanced chip technologies capable of supporting mobile wallets, eSIMs, and multi-application use. By embracing smart manufacturing practices, Africa’s card issuers can provide secure, durable, and versatile cards that meet the evolving needs of consumers and institutions alike."
      }
    ]
    },
  };

  const article = id ? resources[id as keyof typeof resources] : resources.featured;

  return (
    <section className="bg-[#FFFFFF] min-h-screen py-2 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* IMAGE */}
        <AnimatedSection direction="up" className="mb-10">
          <img
            src={article?.image}
            alt={article?.title}
            className="w-full h-[250px] sm:h-[350px] md:h-full object-cover rounded-2xl"
          />
        </AnimatedSection>

        {/* TITLE */}
        <AnimatedSection className="text-2xl sm:text-2xl md:text-5xl font-bold text-[#9BC53D] mb-4">
          {article?.title}
        </AnimatedSection>

        {/* AUTHOR & DATE */}
        <div className="flex flex-row gap-6 sm:gap-7 font-semibold text-[#14213D] mb-10">
          <AnimatedSection direction="left" className="text-m md:text-lg sm:text-xl">{article?.author}</AnimatedSection>

          <AnimatedSection direction="right" className="text-sm md:text-lg text-[#B0B0B0]">
            {article?.date}
          </AnimatedSection>
        </div>

        {/* BLOG CONTENT */}
        <div className="space-y-5 md:space-y-7 text-[#2D3748] sm:leading-7 lg:leading-12 text-[14px] sm:text-[18px] md:text-[23px] lg:text-[21px]">

          {article.content.map((section, index) => (
            <div key={index}>
              <AnimatedSection className="font-semibold text-[#14213D] mb-3 text-base sm:text-xl md:text-2xl lg:text-xl">
                {section.heading}
              </AnimatedSection>

              <AnimatedSection className="text-justify">
                {section.text}
              </AnimatedSection>
            </div>
          ))}
        </div>

        {/* CLOSE BLOG */}
        <AnimatedSection className="mt-10 text-center">
          <button
            onClick={() => navigate("/resources")}
            className="text-base sm:text-lg font-bold text-[#9BC53D] hover:underline"
          >
            Close Blog
          </button>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default ResourcesInfo;