import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CharCards from "./components/CharCard";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [starWarsChars, setStarWarsChars] = useState([]);
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(resolve => {
        setStarWarsChars(resolve.data.results);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {starWarsChars.map((chars, index) => {
        return <CharCards key={index} chars={chars} />;
      })}

    </div>
  );
}

export default App;
