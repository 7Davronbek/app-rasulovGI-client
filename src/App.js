import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Catalog from "./pages/Catalog";

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      console.clear();
      console.log("Instagram: @duvronbekmaxmudov");
    }, 2000);
  }, []);
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/" element={<Catalog />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
