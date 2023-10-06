import React from "react";
import Achievement from "./components/Achievement";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

const App = () => {
    return (
        <div className="font-custom">
            <Navbar />
            <Header />
            <Skills />
            <Education/>
            <Experience/>
            <Achievement/>
            {/* <Contact/> */}
            {/* <Footer/> */}
        </div>
    );
};

export default App;
