import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../Actions/actions";

const SmurfForm = props => {
  const [newSmurf, setNewSmurf] = useState({
    name: '',
    age: '',
    height: '',
    id: Date.now()
  });

  const handleChanges = e => {
    let name = e.target.value;
    setNewSmurf({
      ...newSmurf,
      [name]: e.target.value
    })
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addSmurf(newSmurf);
    console.log("it's happening!", newSmurf);
  };

  return (
    <div>
      <form>
        <input
          name="name"
          type="text"
          placeholder="name"
          onChange={handleChanges}
          value={props.name}
        />
        <input
          name="age"
          type="text"
          placeholder="age"
          onChange={handleChanges}
          value={props.age}
        />
        <input
          name="height"
          type="text"
          placeholder="height"
          onChange={handleChanges}
          value={props.height}
        />
        <button type="submit" onClick={handleSubmit}>
          Add New Villager
        </button>
      </form>
    </div>
  );
};

export default connect(null, { addSmurf })(SmurfForm);
