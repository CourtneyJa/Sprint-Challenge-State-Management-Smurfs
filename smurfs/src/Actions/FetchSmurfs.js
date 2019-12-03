import axios from "axios";

export const FETCH_SMURFS = "FETCH_SMURFS";
// export const FETCH_FAIL = "FETCH_FAIL";

export function fetchSmurfs() {
  return dispatch => {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(res => {
        dispatch({ type: FETCH_SMURFS, payload: res.data });
      })
      .catch(err => {
        console.log('curses!', err)
      });
  };
}
