import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      console.clear();
      console.log("Instagram: @duvronbekmaxmudov");
    }, 2000);
  }, []);
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
};

export default App;
