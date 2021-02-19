import {
ADD_NUTRI_REQUEST,
SUBTRACT_NUTRI_REQUEST
} from '../actions/constants/basicFiltersConstants'

export const counterReducer = (state = 0, action: { type: string; payload: number; }) => {
    switch (action.type) {
      case ADD_NUTRI_REQUEST:
        return (state += action.payload)
      case SUBTRACT_NUTRI_REQUEST:
        return (state -= action.payload)
      default:
        return state
    }
  };