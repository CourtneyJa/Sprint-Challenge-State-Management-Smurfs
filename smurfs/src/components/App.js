import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../Actions/FetchSmurfs";
import { addSmurf } from "../Actions/AddSmurfs";
import "./App.css";

function App(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");

  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  const handleNameChange = e => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleAgeChange = e => {
    e.preventDefault();
    setAge(e.target.value);
  };

  const handleHeightChange = e => {
    e.preventDefault();
    setHeight(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addSmurf({
      name: name,
      age: age,
      height: height,
      id: Date.now()
    });
    setName("");
    setAge("");
    setHeight("");
  };
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <br></br>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          onChange={handleNameChange}
          type="text"
          value={name}
          placeholder="name"
        />
        <input
          name="age"
          onChange={handleAgeChange}
          type="text"
          value={age}
          placeholder="age"
        />
        <input
          name="height"
          onChange={handleHeightChange}
          type="text"
          value={height}
          placeholder="height"
        />
        <br></br>
        <button onClick={() => props.addSmurf()} type="submit">
          Add New Villager
        </button>
      </form>
      <div>
        {props.smurfs.map((smurf) => {
          return (
            <div className="smurfs" key={smurf.id}>
              <h3>Name: {smurf.name}</h3>
              <p>Age: {smurf.age}</p>
              <p>Height: {smurf.height}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    smurfs: state.smurfs
  };
}

const mapDispatchToProps = {
  fetchSmurfs,
  addSmurf
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
