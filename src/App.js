import About from './components/About';
import Home from './components/Home';
import Skills from './components/Skills';
import Work from './components/Work';
import NavBar from './components/NavBar';
import Contact from './components/Contact';

export default function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}
