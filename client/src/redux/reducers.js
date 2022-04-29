import { combineReducers } from "redux";

const user = (state = "") => state;

const scripts = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ENTRY':
      return [ ...state, action.value ]
    case 'DELETE_ENTRY':
      const newState = [ ...state ]
      newState.splice(action.value, 1)
      return newState
    default:
      return state
  }
};


const movie = (state = [], action) => {
  switch(action.type) {
      case 'FETCH_COORDINATES':
          return action.value
      default:
          return state
  }
}

export default combineReducers({ user, scripts, movie });