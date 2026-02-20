// React import removed

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Overview from "./components/Overview";
import Themes from "./components/Themes";
import Timeline from "./components/Timeline";
import Prizes from "./components/Prizes";
import Guidelines from "./components/Guidelines";
import Organizers from "./components/Organizers";
import Sponsors from "./components/Sponsors";
import MentorsJury from "./components/MentorsJury";
import FAQ from "./components/FAQ";
import ParticleNetwork from "./components/ParticleNetwork";
import PastGlimpses from "./components/PastGlimpses";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-off-white min-h-screen text-gray-800 selection:bg-accent-blue/30 selection:text-neon-blue w-full overflow-x-hidden relative">
      {/* Animated Polygon Mesh Background */}
      <ParticleNetwork />

      {/* Site Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <div className="relative">
          <About />
          <PastGlimpses />
          <Overview />
          <Themes />
          <Timeline />
          <Prizes />
          <Guidelines />
          <Organizers />
          <Sponsors />
          <MentorsJury />
          <FAQ />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
