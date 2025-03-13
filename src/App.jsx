import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Main from "./pages/Main/Main";
import Header from "./components/Header/Header";
import About from './pages/About/About'
import Awards from './pages/Awards/Awards'
import Footer from './components/Footer/Footer'
import ScrollToTop from "./components/ScrollToTop";
import Form from "./pages/Form/Form"
import NotFound from "./pages/NotFound/NotFound";


function App() {

 
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Router>
      <ScrollToTop/>
      <div className="bg-white text-black min-h-screen w-full">
        <Header />
        <div className="">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/form" element={<Form/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;