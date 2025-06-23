import AboutMe from './sections/aboutMe/AboutMe';
import MainPage from './sections/mainPage/MainPage';
import PortFolio from './sections/portfolio/PortFolio';
import Skills from './sections/skills/Skills';

function App() {
  return (
    <div className="app-container">
      <MainPage />
      <AboutMe />
      <Skills />
      <PortFolio />
    </div>
  );
}

export default App;
