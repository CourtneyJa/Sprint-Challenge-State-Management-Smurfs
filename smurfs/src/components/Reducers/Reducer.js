const initialState = {
  smurfs: []
};

export function reducer (state = initialState, action){
  switch (action.type) {
    case 'FETCH_SMURFS':
      return {
        smurfs: action.payload
      };
    case 'FETCH_FAIL':
      return {
        error: action.payload
      };

    case 'ADD_SMURFS':
      return {
        smurfs: [...state.smurfs, action.payload]
      };
    case 'ADD_FAIL':
      return {
        error: action.payload
      };
    default:
      return state;
  }
};

// import { ADD_FAIL } from "../../Actions/AddSmurfs";

// // import {
// //   FETCH_SUCCESS,
// //   FETCH_LOADING,
// //   FETCH_FAIL,
// //   ADD_SMURF,
// //   EDIT_SMURF,
// //   REMOVE_SMURF,
// //   ADD_FAIL,
// //   REMOVE_FAIL,
// //   EDIT_FAIL
// // } from "../../../src/Actions/Action";

// const initialState = {
//   smurfs: [
//     // {
//     //   name: 'Brainey',
//     //   age: 200,
//     //   height: '5cm',
//     //   id: 0
//     // },
//     // {
//     //   name: 'Sleepy',
//     //   age: 200,
//     //   height: '5cm',
//     //   id: 1
//     // }
//   ],
//   // error: "",
//   // isFetching: false,
//   // isEditing: false
// };

// export const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     // case FETCH_LOADING:
//     //   return {
//     //     ...state,
//     //     isFetching: true
//     //   };
//     case FETCH_SMURF:
//       return {
//         ...state,
//         smurfs: { ...state.smurfs, ...action.payload },
//         isFetching: false
//       };
//     case FETCH_FAIL:
//       return {
//         ...state,
//         error: action.payload,
//         isFetching: false
//       };

//     case ADD_SMURF:
//       return {
//         ...state,
//         smurfs: [...state.smurfs, action.payload]
//       };

//     case EDIT_SMURF:
//       return {
//         ...state,
//         smurfs: action.payload,
//         isEditing: false
//       };
//     // case REMOVE_SMURF:
//     //   return {
//     //     ...state,
//     //     smurfs: action.payload,
//     //     isFetching: false
//     //   };
//     case ADD_FAIL:
//       return {
//         ...state,
//         error: action.payload,
//         isFetching: false,
//         isEditing: false
//       };
//     case EDIT_FAIL:
//       return {
//         ...state,
//         error: action.payload,
//         isFetching: false,
//         isEditing: false
//       };
//     case REMOVE_FAIL:
//       return {
//         ...state,
//         error: action.payload,
//         isFetching: false
//       };
//     default:
//       return state;
//   }
// };
