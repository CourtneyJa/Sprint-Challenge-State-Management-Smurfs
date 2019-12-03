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
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addSmurf(newSmurf);
    setNewSmurf({
      name:'',
      age: '',
      height: ''
    })
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
          value={newSmurf.name}
        />
        <input
          name="age"
          type="text"
          placeholder="age"
          onChange={handleChanges}
          value={newSmurf.age}
        />
        <input
          name="height"
          type="text"
          placeholder="height"
          onChange={handleChanges}
          value={newSmurf.height}
        />
        <button type="submit" onClick={handleSubmit}>
          Add New Villager
        </button>
      </form>
    </div>
  );
};

export default connect(null, { addSmurf })(SmurfForm);
