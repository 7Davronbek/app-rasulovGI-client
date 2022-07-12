import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Main from "./pages/Main";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Catalog from "./pages/Catalog";
import CatalogByIds from "./pages/CatalogByIds";
import Gallery from "./pages/Gallery";
import FixedPhone from "./components/FixedPhone";
import Contacts from "./pages/Contacts";

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      // console.clear();
      console.log("Instagram: @duvronbekmaxmudov");
    }, 2000);
  }, []);
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <FixedPhone />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/by-id" element={<CatalogByIds />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
