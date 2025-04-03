import Header from "./component/_Common/Header";
import HeroSection from "./component/About/HeroSection";
import ContactMe from "./component/ContactMe/ContactMe";
import EducationSection from "./component/Education/EducationSection";
import ExperienceSection from "./component/Experience/ExperienceSection";
import Footer from "./component/Footer/Footer";
import Projects from "./component/Projects/Projects";
import SkillsSection from "./component/Skills/SkillsSection";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white custom-cursor">
      <Header />
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <Projects/>
      <EducationSection/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
