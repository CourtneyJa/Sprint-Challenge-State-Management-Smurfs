import React from "react";
import "./App.css";
import axios from "axios";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";

const App = () => {
  axios.get("http://localhost:3333/smurfs").then(res => {
    console.log("Papa Smurf says it works!", res);
  });
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <SmurfForm />
      <SmurfList />
    </div>
  );
};

export default App;
