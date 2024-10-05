import Header from "./components/Header";
//import Section from "./components/Section";
import AboutMe from "./components/Aboutme";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Hobbies from "./components/Hobbies";
import Extracuricular from "./components/Extracuricular";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-slate-100 px-5 py-8">
      <div className="bg-white max-w-4xl mx-auto rounded-xl shadow-lg">
        <Header />
        <AboutMe />
        <Project />
        <Skills />
        <Education />
        <Hobbies />
        <Extracuricular />
        <Contact />
      </div>
    </div>
  );
}

export default App;
