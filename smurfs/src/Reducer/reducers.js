import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAIL,
  ADD_SMURF_SUCCESS,
} from "../Actions/actions";

const initialState = {
  smurfs: [],
  isFetching: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload.data,
        isFetching: false,
        error: ""
      };
    case FETCH_SMURF_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload.data
      };
    // case ADD_SMURF_FAIL:
    //   return {
    //     ...state,
    //     error: action.payload.error
    //   };
    default:
      return state;
  }
};

export default reducer