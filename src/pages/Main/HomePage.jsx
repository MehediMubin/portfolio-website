import Achievement from "../../components/Main/Achievement";
import Contact from "../../components/Main/Contact";
import Education from "../../components/Main/Education";
import Header from "../../components/Main/Header";
import Skills from "../../components/Main/Skills";
import ExperiencePage from "./ExperiencePage";

const Home = () => {
   return (
      <div>
         <Header />
         <Skills />
         <Education />
         <ExperiencePage />
         <Achievement />
         <Contact />
      </div>
   );
};

export default Home;
