import { Routes, Route } from "react-router-dom";

import Nav from "./components/nav";
import Footer from "./components/footer";
import ScrollToTop from "./components/Scrolltotop";

import Contact from "./components/contact";
import LandingPage from "./components/landing";
import Career from "./components/career";
import Services from "./components/service";
import Resources from "./components/resources";
import ResourcesInfo from "./components/resourcesinfo";
import Roles from "./components/roles";
import Policy from "./components/policy";
import About from "./components/about";
import AboutUS from "./components/aboutus";
import Bod from "./components/bod";
import Team from "./components/team";

function App() {
  return (
    <>
      <Nav />
      <ScrollToTop />

      <div className="pt-20">
        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={
              <>
                <LandingPage />
                <About />
              </>
            }
          />

          {/* ABOUT */}
          <Route path="/about" element={<AboutUS />} />

          {/* SERVICES */}
          <Route path="/services" element={<Services />} />

          {/* RESOURCES */}
          <Route path="/resources" element={<Resources />} />

          {/* RESOURCE BLOG */}
          <Route path="/resources-info/:id" element={<ResourcesInfo />} />

          {/* CAREER */}
          <Route path="/career" element={<Career />} />

          {/* ROLE PAGE */}
          <Route path="/roles" element={<Roles />} />

          {/* CONTACT */}
          <Route path="/contact-us" element={<Contact />} />

          {/* POLICY PAGE */}
          <Route path="/policy" element={<Policy />} />

          {/* BOARD OF DIRECTORS PAGE */}
          <Route path="/Bod" element={<Bod />} />

          {/* MANAGEMENT TEAM */}
          <Route path="/Team" element={<Team />} />

        </Routes>

      </div>

      <Footer />
    </>
  );
}

export default App;