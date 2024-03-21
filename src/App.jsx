import About from "./Components/About";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Whatido from "./Components/Whatido";

function App() {
  return (
    <div className="font-bodyFont overflow-y-hidden">
      <Home />
      <About />
      <Whatido />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
