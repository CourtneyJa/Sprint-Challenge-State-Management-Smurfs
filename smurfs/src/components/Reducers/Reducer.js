import {FETCH_SUCCESS, FETCH_LOADING, FETCH_FAIL, ADD_SMURF} from '../../../src/Actions/Action';

const initialState ={
    smurfs: [],
    error: null,
    isFetching: false    
};

export const reducer = (state= initialState, action) =>{
    switch(action.type){
        case FETCH_LOADING:
            return{
                ...state,
                isFetching: true
            };
        case FETCH_SUCCESS:
            return{
                ...state,
                smurfs: action.payload,
                isFetching: false                
            }
        case FETCH_FAIL:
            return{
                ...state,
                smurfs: action.payload,
                isFetching: false                
            }
        
        default:
            return state;
    }
}