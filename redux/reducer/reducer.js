import { UPDATE_FORM, RESET_FORM, SET_BOOKING_ID } from "../actions/action";

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  date: new Date(),
  time: new Date(),
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case SET_BOOKING_ID:
      return {
        ...state,
        bookingID: action.payload,
      };
    case RESET_FORM:
      return initialState;
    default:
      return state;
  }
};