import About from "./Components/About";
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
    </div>
  );
}

export default App;
