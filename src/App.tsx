import { useRef } from 'react';
import './App.css';
import Header from './components/Headers/Header';
import Introduction from './components/Headers/Introduction';
import AboutMe from './components/Headers/AboutMe';
import Skills from './components/Headers/Skills';
import Projects from './components/Headers/Projects';
import Experience from './components/Headers/Experience';
import Contact from './components/Headers/Contact';


function App() {
  const introductionRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (index: number) => {
    const sectionRefs = [introductionRef, aboutMeRef, skillsRef, projectsRef, experienceRef, contactRef];
    const sectionRef = sectionRefs[index];
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    switch (index) {
      case 0:
        introductionRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 1:
        aboutMeRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 2:
        skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 3:
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 4:
        experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 5:
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className='min-h-screen bg-white dark:bg-black custom-scrollbar'>
        <Header
          scrollToSection={scrollToSection}
        />
        <div className="dark:text-white pt-20">
          <Introduction ref={introductionRef} />
          <AboutMe ref={aboutMeRef} />
          <Skills ref={skillsRef} />
          <Projects ref={projectsRef} />
          <Experience ref={experienceRef} />
          <Contact ref={contactRef} />
        </div>
      </div>
    </>
  );
}

export default App;
