import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";
import Contacts from "./containers/Contacts";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
};

export default App;
