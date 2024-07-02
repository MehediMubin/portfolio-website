import Achievement from "../../components/Main/Achievement"
import Contact from "../../components/Main/Contact";
import Experience from "../../components/Main/Experience";
import Education from "../../components/Main/Education";
import Header from "../../components/Main/Header";
import Skills from "../../components/Main/Skills";

const Home = () => {
   return (
      <div>
         <Header />
         <Skills />
         <Education />
         <Experience />
         <Achievement />
         <Contact />
      </div>
   );
};

export default Home;
