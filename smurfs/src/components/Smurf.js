// import React, { useState } from "react";
// import { editSmurf, removeSmurf } from "../Actions/Action";
// import { connect } from "react-redux";

// const Smurf = props => {
  
//   const [smurf, setSmurf]=useState({
//     name: '',
//     age: '',
//     height: '',
//     id: null
//   },console.log(useState))

//   const handleSubmit = e => {
//     e.prevent.default();
//     setSmurf({name: "", age: "", height: "", id: null });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h3>{props.smurf.name}</h3>
//         <p>{props.smurf.age}</p>
//         <p>{props.smurf.height}</p>
//         <div>
//           <button
//             type="submit"
//             onClick={() => props.removeSmurf(props.smurf.id)}
//           >
//             X
//           </button>
//           <button type="submit" onClick={() => props.editSmurf(props.smurf.id)}>
//             Edit
//           </button>
//         </div>
//         {props.isEditing && (
//           <>
//             <input name="name" />
//             <input name="age" />
//             <input name="height" />
//           </>
//         )}
//       </form>
//     </div>
//   );
// };

// const mapStateToProps = state => {
//   return {
//     isEditing: state.isEditing,
//     error: state.error
//   }
// }

// export default connect(mapStateToProps, { editSmurf, removeSmurf })(Smurf);
