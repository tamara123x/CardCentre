import AnimatedSection from "./animation";

const Contact = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto">

        {/* Heading */}
        <AnimatedSection direction="up">
        <div className="bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] w-full mx-auto text-center mb-16 md:mb-20 py-8 md:py-14">
          <AnimatedSection className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Get In Touch
          </AnimatedSection>

          <AnimatedSection className="mt-5 text-gray-600 text-base md:text-xl lg:text-2xl max-w-4xl mx-auto px-6">
            Ready to transform your identity and payment solutions?
            Our team is here to help
          </AnimatedSection>
        </div>
        </AnimatedSection>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start px-6 md:px-12 lg:px-28">

          {/* Left Side - Contact Info */}
          <AnimatedSection direction="left" className="space-y-8">

            <AnimatedSection className="text-2xl md:text-3xl font-bold text-gray-900">
              Contact Information
            </AnimatedSection>

            <AnimatedSection className="space-y-8 md:space-y-10 text-base md:text-lg text-gray-700">

              <AnimatedSection className="flex items-start gap-4 md:gap-5">
                <img
                  src="/Icons/map.svg"
                  alt="Map"
                  className="w-8 h-8 md:w-10 md:h-10 mt-1 object-contain"
                />

                <div>
                  <h3 className="text-sm md:text-base lg:text-lg font-bold text-gray-900">
                    Head Office
                  </h3>

                  <p className="mt-1 text-sm md:text-base lg:text-lg text-gray-600">
                    8, Louis Solomon Close Victoria Island, Lagos Nigeria
                  </p>
                </div>
              </AnimatedSection>


              <AnimatedSection className="flex items-start gap-4 md:gap-5">
                <img
                  src="/Icons/call.svg"
                  alt="Phone Icon"
                  className="w-8 h-8 md:w-10 md:h-10 mt-1 object-contain"
                />

                <div>
                  <h3 className="text-sm md:text-base lg:text-lg font-bold text-gray-900">
                    Phone
                  </h3>

                  <p className="mt-1 text-sm md:text-base lg:text-lg text-gray-600">
                    +234 808 034 5389
                  </p>
                </div>
              </AnimatedSection>


              <AnimatedSection className="flex items-start gap-4 md:gap-5">
                <img
                  src="/Icons/Email.svg"
                  alt="Email Icon"
                  className="w-8 h-8 md:w-10 md:h-10 mt-1 object-contain"
                />

                <div>
                  <h3 className="text-sm md:text-base lg:text-lg font-bold text-gray-900">
                    Email
                  </h3>

                  <p className="mt-1 text-sm md:text-base lg:text-lg text-gray-600">
                    info@cardcentre.com.ng
                  </p>
                </div>
              </AnimatedSection>


              <AnimatedSection className="flex items-start gap-4 md:gap-5">
                <img
                  src="/Icons/business hours.svg"
                  alt="Business Hours Icon"
                  className="w-8 h-8 md:w-10 md:h-10 mt-1 object-contain"
                />

                <div>
                  <h3 className="text-sm md:text-base lg:text-lg font-bold text-gray-900">
                    Business Hours
                  </h3>

                  <p className="mt-1 text-sm md:text-base lg:text-lg text-gray-600">
                    Monday - Friday: 8:00 AM - 5:00 PM
                  </p>

                  <p className="text-sm md:text-base lg:text-lg text-gray-600">
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection className="flex items-center gap-8 mt-4">
                <a href="https://www.linkedin.com/company/cardcentre-nigeria-limited1/" target="_blank" rel="noopener noreferrer">
                  <img src="/Icons/clinkedin.svg" alt="LinkedIn" className="w-5 h-5 md:w-8 md:h-8" />
                </a>

                <a href="https://x.com/cardcentre_ng?s=21" target="_blank" rel="noopener noreferrer">
                  <img src="/Icons/ctwitter.svg" alt="Twitter" className="w-5 h-5 md:w-8 md:h-8" />
                </a>

                <a href="https://www.instagram.com/cardcentrenigltd?igsh=Nmw3OGdrcnduZWNt" target="_blank" rel="noopener noreferrer">
                  <img src="/Icons/cinstagram.svg" alt="Instagram" className="w-5 h-5 md:w-8 md:h-8" />
                </a>
              </AnimatedSection>

              <a 
                href="https://wa.link/xa8szo" target="_blank" rel="noopener noreferrer"
                className="absolute left-2 flex items-center gap-2 bg-[#1FAF38] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#0b8f21] transition"
              >
                <img src="/Icons/cbwhatsapp.svg" alt="WhatsApp" className="w-5 h-5"/>
                <span className="text-sm font-medium">Chat with Us &gt; </span>
              </a>
            </AnimatedSection>
          </AnimatedSection>


          {/* Right Side - Form */}
          <AnimatedSection direction="right" className="pt-20 md:pt-0 lg:pt-0">
            <form className="space-y-6">

              <AnimatedSection className="text-2xl md:text-3xl font-bold text-gray-900">
                Send Us a Message
              </AnimatedSection>

              <AnimatedSection>
                <label className="block text-sm md:text-base font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#5e8607]"
                />
              </AnimatedSection>

              <AnimatedSection>
                <label className="block text-sm md:text-base font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="john@company.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#5e8607]"
                />
              </AnimatedSection>

              <AnimatedSection>
                <label className="block text-sm md:text-base font-semibold text-gray-700 mb-2">
                  Company Name
                </label>

                <input
                  type="text"
                  name="company"
                  placeholder="Your Company Ltd"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#5e8607]"
                />
              </AnimatedSection>

              <AnimatedSection>
                <label className="block text-sm md:text-base font-semibold text-gray-700 mb-2">
                  Message *
                </label>

                <textarea
                  rows={6}
                  name="message"
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm resize-none focus:outline-none focus:border-[#5e8607]"
                ></textarea>
              </AnimatedSection>

              <AnimatedSection>
              <button
                type="submit"
                className="w-full bg-[#9BC53D] text-white py-3 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-[#5e8607] transition"
              >
                Send Message
              </button>
              </AnimatedSection>

              <AnimatedSection className="text-center text-sm md:text-base text-[#6B7280]">
                We'll respond to your inquiry within 24 business hours
              </AnimatedSection>

            </form>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default Contact;