const Contact = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto">

        {/* Heading */}
        <div className="bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] w-full mx-auto text-center mb-16 md:mb-20 py-8 md:py-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Get In Touch
          </h2>

          <p className="mt-5 text-gray-600 text-base md:text-xl lg:text-2xl max-w-4xl mx-auto px-6">
            Ready to transform your identity and payment solutions?
            Our team is here to help
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start px-6 md:px-12 lg:px-28">

          {/* Left Side - Contact Info */}
          <div className="space-y-8">

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Contact Information
            </h3>

            <div className="space-y-8 md:space-y-10 text-base md:text-lg text-gray-700">

              <div className="flex items-start gap-4 md:gap-5">
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
              </div>


              <div className="flex items-start gap-4 md:gap-5">
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
              </div>


              <div className="flex items-start gap-4 md:gap-5">
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
              </div>


              <div className="flex items-start gap-4 md:gap-5">
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
              </div>

            </div>
          </div>


          {/* Right Side - Form */}
          <div>
            <form className="space-y-6">

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Send Us a Message
              </h3>

              <div>
                <label className="block text-sm md:text-base font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#5e8607]"
                />
              </div>


              <div>
                <label className="block text-sm md:text-base font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="john@company.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#5e8607]"
                />
              </div>


              <div>
                <label className="block text-sm md:text-base font-semibold text-gray-700 mb-2">
                  Company Name
                </label>

                <input
                  type="text"
                  name="company"
                  placeholder="Your Company Ltd"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#5e8607]"
                />
              </div>


              <div>
                <label className="block text-sm md:text-base font-semibold text-gray-700 mb-2">
                  Message *
                </label>

                <textarea
                  rows={6}
                  name="message"
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm resize-none focus:outline-none focus:border-[#5e8607]"
                ></textarea>
              </div>


              <button
                type="submit"
                className="w-full bg-[#9BC53D] text-white py-3 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-[#5e8607] transition"
              >
                Send Message
              </button>

              <p className="text-center text-sm md:text-base text-[#6B7280]">
                We'll respond to your inquiry within 24 business hours
              </p>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;