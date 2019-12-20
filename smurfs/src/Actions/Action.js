// import axios from "axios";

// export const fetchSmurfs = () => dispatch => {
//   dispatch({ type: FETCH_LOADING });
//   axios
//     .get(`http://localhost:3333/smurfs`)
//     .then(res => {
//       dispatch({ type: FETCH_SUCCESS, payload: res.data });
//     })
//     .catch(err => {
//       dispatch({ type: FETCH_FAIL, payload: err.response });
//     });
// };

// export const addSmurf = smurf => dispatch => {
//   dispatch({type: ADD_SMURF});
//   axios
//     .post(`http://localhost:3333/smurfs`, smurf)
//     .then(res =>{
//       console.log("A new Smurf in town", res.data);
//       dispatch({
//         type: ADD_SMURF, payload: res.data
//       })
//     })
//     .catch(err =>{
//       console.log('a brainy smurf fail',err)
//       dispatch({ type: ADD_FAIL, payload: 'foiled again' });
//     })
// };

// export const editSmurf = smurfId => dispatch => {
//   dispatch({type: EDIT_SMURF})
//   axios
//     .put(`http://localhost:3333/smurfs/${smurfId}`)
//     .then(res=>{
//       dispatch({
//         type: EDIT_SMURF,
//         payload: res.data
//       })
//     })
//     .catch(err=>{
//       console.log('gargamel', err)
//       dispatch({ type: EDIT_FAIL, payload: err.response });
//     })
// };

// export const removeSmurf = smurfId => dispatch => {
//   dispatch({type: REMOVE_SMURF})
//   axios
//     .delete(`http://localhost:3333/smurfs/${smurfId}`)
//     .then(res=>{
//       dispatch({
//         type: REMOVE_SMURF,
//         payload: res.data
//       })
//     })
//     .catch(err=>{
//       console.log('still here', err)
//       dispatch({ type: REMOVE_FAIL, payload: err.response });
//     })
// };

// export const FETCH_LOADING = "FETCH_LOADING";
// export const FETCH_SUCCESS = "FETCH_SUCCESS";
// export const FETCH_FAIL = "FETCH_FAIL";
// export const ADD_SMURF = "ADD_SMURF";
// export const EDIT_SMURF = "EDIT_SMURF";
// export const REMOVE_SMURF = "REMOVE_SMURF";
// export const REMOVE_FAIL = "REMOVE_FAIL";
// export const EDIT_FAIL="EDIT_FAIL";
// export const ADD_FAIL= "ADD_FAIL";