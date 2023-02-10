import Links from "./Components/Links/Links";
import Info from "./Components/Info/Info";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import { Analytics } from '@vercel/analytics/react';

import "./App.css";
import Footer from "./Components/Footer/Footer";

function App() {

  return (
    <div>
      <Info />
      <About />
      <Projects />
      <Contact />
      <Links />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
