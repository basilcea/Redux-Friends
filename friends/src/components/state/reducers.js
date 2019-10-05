import * as types from "./actionTypes";
const initialState = {
  friends: [],
  fetching: false,
  saving:false,
  updating:false,
  deleting:false,
  logging:false,
  loggedIn:false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const loginReducer = (state= initialState, action) => {
    switch (action.type){
        case types.LOGIN:
        return{...state , logging : true}
        case types.SUCCESS:
        return{...state , logging: false , loggedIn:action.payload, error:null}
        case types.FAILURE:
        return{...state, logging: false , loggedIn:false , error:action.payload}
        default:
        return state;
    }
}