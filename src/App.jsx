import './App.css'
import AboutMe from "./Pages/Home/AboutMe";
import ContactMe from "./Pages/Home/ContactMe";
import Footer from "./Pages/Home/Footer";
import HeroSection from "./Pages/Home/HeroSection";
import MySkills from "./Pages/Home/MySkills";
export default function App() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <ContactMe />
      <Footer />
    </>
  );
}

