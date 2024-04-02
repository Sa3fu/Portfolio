import { useRef } from "react";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Form from "./Components/Form";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Whatido from "./Components/Whatido";
import Works from "./Components/Works";
import Header from "./Components/Header";

function App() {
  const ref = {
    home: useRef(),
    about: useRef(),
    whatido: useRef(),
    skills: useRef(),
    experience: useRef(),
    works: useRef(),
    form: useRef(),
  };

  return (
    <div className="font-bodyFont overflow-y-hidden">
      <Header {...ref} />

      <div ref={ref.home}>
        <Home aboutRef={ref.about} />
      </div>

      <div ref={ref.about}>
        <About />
      </div>

      <div ref={ref.whatido}>
        <Whatido />
      </div>

      <div ref={ref.skills}>
        <Skills />
      </div>

      <div ref={ref.experience}>
        <Experience />
      </div>

      <div ref={ref.works}>
        <Works />
      </div>

      <div ref={ref.form}>
        <Form />
      </div>
    </div>
  );
}

export default App;
