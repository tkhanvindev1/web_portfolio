import React from "react";
import NavigationBar from "./pages/NavigationBar/NavigationBar";
import HeaderView from "./pages/HeaderView/HeaderView";
import Path from "./pages/Path/Path";
import Portfolio from "./pages/Portfolio/Portfolio";
import AboutMe from "./pages/AboutMe/AboutMe";
import Footer from "./pages/Footer/Footer";
import ServiceSection from "./pages/ServicesSection/ServiceSection";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HeaderView />
      <ServiceSection />
      <Path />
      <AboutMe /> 
      <Portfolio />    
      <Footer />
    </div>
  )
}

export default App;
