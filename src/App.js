import About from './components/About';
import { Home } from './components/Home';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}
