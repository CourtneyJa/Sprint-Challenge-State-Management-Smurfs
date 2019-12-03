import axios from "axios";

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURF_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({
        type: FETCH_SMURF_SUCCESS,
        payload: res
      });
    })
    .catch(err => 
      console.log("curses!", err)
    );
};

export const addSmurf = smurfs => dispatch => {
  axios
    .post("http://localhost:3333/smurfs", smurfs)
    .then(res => {
      dispatch({
        type: ADD_SMURF_SUCCESS,
        payload: res
      });
    })
    .catch(err =>
      console.log("foiled again!", err)
    );
};

export const FETCH_SMURF_START = "FETCH_SMURF_START"
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS"
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL"
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS"
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL"