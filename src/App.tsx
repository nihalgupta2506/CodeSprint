// React import removed

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tracks from "./components/Tracks";
import Timeline from "./components/Timeline";
import Prizes from "./components/Prizes";
import Team from "./components/Team";
import Countdown from "./components/Countdown";
import Registration from "./components/Registration";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";

function App() {
  return (
    <div className="bg-dark-bg min-h-screen text-white selection:bg-neon-green/30 selection:text-neon-green">
      <Cursor />
      <Navbar />
      <Hero />
      <div className="bg-dark-bg relative z-10">
        <Countdown />
        <About />
        <Tracks />
        <Timeline />
        <Prizes />
        <Team />
        <Registration />
      </div>
      <Footer />
    </div>
  );
}

export default App;
