import Footer from "./components/Footer";
import GetVerified from "./components/GetVerified";
import HeroSection from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import ReadyToDive from "./components/ReadyToDiveSection";
import BuyersVideoSection from "./components/BuyersVideoSection";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  //Initializing AOS for global use and as well confihuring some props
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
      delay: 50,
    });
  });

  return (
    <> {/*React Fragment*/}
      <Navbar />
      <HeroSection />
      <ReadyToDive />
      <BuyersVideoSection />
      <GetVerified />
      <HowItWorks />
      <Footer />
    </>
  );
}

export default App;
