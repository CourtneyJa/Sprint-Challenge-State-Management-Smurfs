import axios from "axios";

export const ADD_SMURF = "ADD_SMURF";
// export const ADD_FAIL = "ADD_FAIL";

export function addSmurf(formData) {
  return dispatch => {
    dispatch({ type: ADD_SMURF, payload: formData });
    axios
      .post(`http://localhost:3333/smurfs`, formData)
      .then(res => {
        console.log("A new Smurf in town", res.data);
        dispatch({
          type: ADD_SMURF,
          payload: res.data
        });
      })
      .catch(err => {
        console.log("foiled again", err);
        
      });
  };
}
