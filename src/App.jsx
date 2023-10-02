import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Education from "./components/Education";

const App = () => {
    return (
        <div className="max-w-screen-xl font-custom">
            <Navbar />
            <Header />
            <Skills />
            <Education/>
        </div>
    );
};

export default App;
