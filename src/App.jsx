import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Achievement from "./components/Achievement";

const App = () => {
    return (
        <div className="max-w-screen-xl font-custom">
            <Navbar />
            <Header />
            <Skills />
            <Education/>
            <Achievement/>
        </div>
    );
};

export default App;
