// import React, { useState, useEffect } from "react";
// import { addSmurf, fetchSmurfs, removeSmurf } from "../Actions/Action";
// import { connect } from "react-redux";

// const SmurfForm = props => {
//   const [smurf, setSmurf] = useState({ name: "", age: "", height: "" });
//   useEffect (()=>{
//     fetchSmurfs()
//   }, []);

//   const handleChange = e => {
//     setSmurf({
//       ...smurf,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = e => {
//     e.prevent.default();
//     const newSmurf = {
//       ...smurf, id: Date.now()
//     }
//     props.addSmurf(newSmurf);
//     setSmurf({ name: "", age: "", height: "", id: Date.now() });
//   };

//   const handleRemove = e => {
//     e.prevent.default();
//     removeSmurf(e.target.value)
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         name="name"
//         onChange={handleChange}
//         type="text"
//         value={smurf.name}
//         placeholder="name"
//       />
//       <input
//         name="age"
//         onChange={handleChange}
//         type="text"
//         value={smurf.age}
//         placeholder="age"
//       />
//       <input
//         name="height"
//         onChange={handleChange}
//         type="text"
//         value={smurf.height}
//         placeholder="height"
//       /><br></br>
//       <button onClick={() => props.addSmurf()} type="submit">
//         Add New Villager
//       </button>
//       <button
//             type="submit"
//             onClick={handleRemove} value={smurf.id}
//           >
//             X
//       </button>
//     </form>
//   );
// };

// const mapStateToProps = state => {
//   return {
//     state
//   };
// };
// export default connect(mapStateToProps, { addSmurf })(SmurfForm);
