import About from "./Components/About";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Whatido from "./Components/Whatido";
import Works from "./Components/Works";

function App() {
  return (
    <div className="font-bodyFont overflow-y-hidden">
      <Home />
      <About />
      <Whatido />
      <Skills />
      <Experience />
      <Works/>
    </div>
  );
}

export default App;
