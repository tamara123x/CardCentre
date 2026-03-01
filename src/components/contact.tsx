import { useState } from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto">

        {/* Heading */}
        <div className="bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] w-full mx-auto text-center mb-20 py-14">
          <h2 className="text-5xl font-extrabold text-gray-900">
            Get In Touch
          </h2>
          <p className="mt-5 text-gray-600 text-2xl max-w-4xl mx-auto px-8">
            Ready to transform your identity and payment solutions? 
            Our team is here to help
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-start px-28">

          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900">
                Contact Information
              </h3>
            </div>

            <div className="space-y-4 text-lg text-gray-700">
              <div className="flex items-start gap-5">
                <img 
                   src="/Icons/map.svg" 
                   className="w-10 h-10 mt-2 object-contain"
                />
                <div className="space-y-0">
                    <h3 className="text-m font-bold text-gray-900"> 
                  Head Office
                </h3>
                <p className="mt-2 text-m text-gray-600 pr-52 mr-40">
                  8, Louis Solomon Close Victoria Island, Lagos Nigeria
                </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <img 
                   src="/Icons/call.svg" 
                   className="w-10 h-10 mt-2 object-contain"
                />
                <div className="space-y-0"> 
                    <h3 className="text-m font-bold text-gray-900"> 
                  Phone
                </h3>
                <p className="mt-2 text-m text-gray-600">+234 808 034 5389</p>
                </div>
              </div>

                <div className="flex items-start gap-5">
                <img 
                   src="/Icons/Email.svg" 
                   className="w-10 h-10 mt-2 object-contain"
                />
                <div className="space-y-0">
                    <h3 className="text-m font-bold text-gray-900"> 
                   Email
                </h3>
                <p className="mt-2 text-m text-gray-600">info@cardcentre.com.ng</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <img 
                   src="/Icons/business hours.svg" 
                   className="w-10 h-10 mt-2 object-contain"
                />
                <div className="space-y-0">
                    <h3 className="text-m font-bold text-gray-900"> 
                   Business Hours
                </h3>
                <p className="mt-2 text-m text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM </p>
                <p className="mt-2 text-m text-gray-600" >Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <form className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Send Us a Message
              </h3>

              <div>
                <label className="block text-m font-semibold text-gray-700 mb-2">
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
                <label className="block text-m font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="name"
                  placeholder="john@company.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#5e8607]"
                />
              </div>

              <div>
                <label className="block text-m font-semibold text-gray-700 mb-2">
                  Company Name 
                </label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Company Ltd"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#5e8607]"
                  />
              </div>

              <div>
                <label className="block text-m font-semibold text-gray-700 mb-2">
                   Message *
                </label>
                <textarea
                  rows={6}
                  name="name"
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm resize-none focus:outline-none focus:border-[#5e8607]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#9BC53D] text-white py-4 rounded-full text-lg font-medium hover:bg-[#5e8607] transition"
              >
                Send Message
              </button>

              <p className="text-center text-[#6B7280]"> We'll respond to your inquiry within 24 business hours </p>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;