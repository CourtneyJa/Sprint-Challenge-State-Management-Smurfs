import axios from "axios";

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_LOADING });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_FAIL, payload: err.response });
    });
};

export const addSmurf = newSmurf => dispatch => {
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => console.log("A new Smurf in town", res));
};

export const editSmurf = smurf => dispatch => {
  axios
    .put("http://localhost:3333/smurfs", smurf)
    .then(res => console.log("village changes", res.data));
};

export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const ADD_SMURF = "ADD_SMURF";
