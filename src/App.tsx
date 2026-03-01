import React from 'react';
import { Routes, Route } from "react-router-dom";

import Nav from "../src/components/nav";
import Footer from "./components/footer";

import Contact from "./components/contact";
import LandingPage from './components/landing';
import Career from "./components/career";
import Services from "./components/service";
import Resources from "./components/resources";
import About from "./components/about";

function App() {
  return (
    <>
      <Nav />

      {/* Add top padding because nav is fixed */}
      <div className="pt-20">

        <Routes>

          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                <LandingPage />
                <About />
                <Resources />
                <Contact />
              </>
            }
          />

          {/* ABOUT US PAGE */}
          <Route
            path="/about"
            element={
              <>
                <About />
                <Contact />
              </>
            }
          />

          {/* SERVICES PAGE */}
          <Route
            path="/services"
            element={
              <>
                <Services />
                <Contact />
              </>
            }
          />

          {/* RESOURCES PAGE */}
          <Route path="/resources" element={<Resources />} />

          {/* CAREER PAGE */}
          <Route path="/career" element={<Career />} />

          {/* CONTACT US PAGE */}
          <Route path="/contact-us" element={<Contact />} />

        </Routes>

      </div>

      <Footer />
    </>
  );
}
// className="min-h-screen bg-gray-100 flex items-center justify-center"
export default App;