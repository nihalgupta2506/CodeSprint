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
import PastGlimpses from "./components/PastGlimpses";
import MentorsJury from "./components/MentorsJury";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-off-white min-h-screen text-gray-800 selection:bg-accent-blue/30 selection:text-neon-blue">
      <Navbar />
      <Hero />
      <div className="relative z-10">
        <About />
        <PastGlimpses />
        <Overview />
        <Themes />
        <Timeline />
        <Prizes />
        <Guidelines />
        <Organizers />
        <MentorsJury />
        <Sponsors />
      </div>
      <Footer />
    </div>
  );
}

export default App;
