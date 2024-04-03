import { useRef } from "react";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Form from "./Components/Form";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Whatido from "./Components/Whatido";
import Works from "./Components/Works";
import Header from "./Components/Header";
import Headerlg from "./Components/Headerlg";

function App() {
  const ref = {
    home: useRef(null),
    about: useRef(null),
    whatido: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    works: useRef(null),
    form: useRef(null),
  };

  return (
    <div className="font-bodyFont overflow-y-hidden">
      <Header {...ref} />

      <div ref={ref.home}>
        <Home aboutRef={ref.about} />
      </div>

      <Headerlg
        home={ref.home}
        about={ref.about}
        whatido={ref.whatido}
        skills={ref.skills}
        experience={ref.experience}
        works={ref.works}
        form={ref.form}
      />
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
