import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // importation des composants react-router-dom

import Home from "./pages/Home";
import About from "./pages/About";
import Housing from "./pages/Housing";
import Error from "./pages/Error";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

import "./css/style.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  // intégration des composants REACT dans le DOM
  <React.StrictMode>
    <Router>
      {/* configuration des différentes routes */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housings/:id" element={<Housing />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
