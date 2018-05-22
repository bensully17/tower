import { CHANGE_DATE, CHANGE_DUE_DATE } from '../actions/actionTypes'

const initialState = {
    date: new Date(),
    dueDate: null
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_DATE:
        return {
          ...state,
          date: action.date
        }
      case CHANGE_DUE_DATE:
        return {
          ...state,
          dueDate: action.dueDate
        }
      default:
        return state
    }
  }
  
  export default reducer