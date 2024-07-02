
import Achievement from "../../components/Achievement";
import Contact from "../../components/Contact";
import Education from "../../components/Education";
import Experience from "../../components/Experience";
import Header from "../../components/Header";
import Skills from "../../components/Skills";

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
