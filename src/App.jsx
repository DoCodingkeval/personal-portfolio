import Header from "./components/pages/Header/Header";
import Hero from "./components/pages/Hero/Hero";
import About from "./components/pages/About/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/pages/Footer/Footer";
import Project from "./components/pages/Project/Project";
import Contact from "./components/pages/Contact/Contact";
import ErrorPage from "./components/pages/Error/ErrorPage";
import Skill from "./components/pages/Skills/Skill";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
