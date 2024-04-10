import React from "react";
import Bigcard from "./big";
import Skills from "./Skills";
import Techcard from "./techcard";
import './App.css';
function App() {
    const technologies = [
        "React",
        "Vue.js",
        "Узнать лучше сам JS",
        "Express.js",
        "Более глубокое понятие front-end",
        "Более глубокое понятие back-end",
        "Java",
        "Kotlin",
        "Angular",
        "Node.js",
        "Backbone.js"
    ]
  return(
      <div className="App">
        <Bigcard photoUrl="https://telegraf.com.ua/static/storage/thumbs/428x240/8/60/b5c99eb4-733c4a9a353e88f48d3c436377951608.jpg?v=5477_1" fullName="Братченко Антон Валентинович" />

        <div className="skills-container">
          <h2>Мои компетенции:</h2>
          <Skills skillName="Адаптивность и обучаемость"/>
          <Skills skillName="Работа в команде"/>
          <Skills skillName="Знание английского"/>
          <Skills skillName="Знание верстки и JS"/>
        </div>
          <div className="techncard-container">
          <h2>Технологии, которые я хочу изучить:</h2>
          {technologies.map((technology, index) => (
              <Techcard key={index} techName={technology}/>
              ))}
          </div>
      </div>
  );
}
export default App;
