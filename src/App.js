import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import TopBar from "./components/TopBar/TopBar";
import Works from "./components/Works/Works";
import './App.scss'
import { useState } from "react";
import Menu from "./components/Menu/Menu";

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <TopBar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <Menu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
