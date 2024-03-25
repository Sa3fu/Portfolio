import figma from "../assets/figma.256x256.png";
import adobeAE from "../assets/adobe-after-effects.256x256.png";
import adobeAi from "../assets/adobe-illustrator.256x256.png";
import adobePS from "../assets/adobe-photoshop.256x256.png";
import canva from "../assets/canva.png";
import adobeIn from "../assets/indesign.256x250.png";

import amazonClone from "../assets/work/Screenshot 2024-03-25 104519.png";


export const webDevelopment = [
  {
    _id: "1",
    text: "Javascript",
  },
  {
    _id: "2",
    text: "HTML5",
  },
  {
    _id: "3",
    text: "CSS3",
  },
  {
    _id: "4",
    text: "ReactJs",
  },
  {
    _id: "5",
    text: "Tailwind CSS",
  },
  {
    _id: "6",
    text: "Node.js",
  },
  {
    _id: "7",
    text: "MongooDB",
  },
  {
    _id: "8",
    text: "Python",
  },
  {
    _id: "9",
    text: "AngularJs",
  },
  {
    _id: "10",
    text: "C#",
  },
  {
    _id: "11",
    text: "C++",
  },
];

export const design = [
  { _id: "21", img: figma, text: "figma" },
  { _id: "22", img: adobePS, text: "photoshop" },
  { _id: "23", img: canva, text: "canva" },
  { _id: "24", img: adobeAi, text: "illustrator" },
  { _id: "25", img: adobeAE, text: "afterEffects" },
  { _id: "26", img: adobeIn, text: "indesign" },
];

export const tools = [
  { _id: "31", text: "Git + Github" },
  { _id: "32", text: "Command Line" },
  { _id: "33", text: "Chrome Dev Tools" },
  { _id: "34", text: "Postman" },
];

export const someofwork = [
  {
    _id: "41",
    img: amazonClone,
    textcode: "Code",
    textdemo: "Demo",
    title: "Amazon Clone",
    discription:
      "I created an Amazon clone using ReactJS, incorporating Redux and Firebase. In this application, users can register and log in to the webpage. There's also a product page where users can add items to their cart for purchase. They can adjust the quantity of items in the cart and clear it if desired. The items are fetched from the Fake Store API.",
    technologystack: ["ReactJs", "Redux", "Firebase"],
  },
];
