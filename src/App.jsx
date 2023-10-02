import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

const App = () => {
    return (
        <div className="max-w-screen-xl font-custom">
            <Navbar />
            <Header />
            <Skills/>
        </div>
    );
};

export default App;
