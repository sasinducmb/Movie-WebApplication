import React from "react";
import Header from "../Header";
import "./Main.css";
import Wallsection from "../WallSection/index";
import CollectionSection from "../CollectSection/index.jsx";
import Footer from "../Footer/index.jsx";
import ContactSection from "../ContactUs/index.jsx"
const Main = () => {
  return (
    <div className="Main-Page">
      <Header />

      <Wallsection />

      <CollectionSection />

      <ContactSection/>

      <Footer />
    </div>
  );
};

export default Main;
