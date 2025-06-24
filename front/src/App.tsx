import { useEffect } from 'react';
import AboutMe from './sections/aboutMe/AboutMe';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import MainPage from './sections/mainPage/MainPage';
import PortFolio from './sections/portfolio/PortFolio';
import Skills from './sections/skills/Skills';
import scrollReveal from 'scrollreveal';

function App() {
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollReveal({
        origin: 'bottom',
        distance: '20px',
        duration: 2000,
        reset: false,
      });
      sr.reveal(`.mainPage, .about-me, .skills, .portfolio, .contact, .footer`, { interval: 500 });
    };
    registerAnimations();
  }, []);

  return (
    <div className="app-container">
      <MainPage />
      <AboutMe />
      <Skills />
      <PortFolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
