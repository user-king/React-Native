export const UPDATE_FORM = 'UPDATE_FORM';
export const RESET_FORM = 'RESET_FORM';
export const SET_BOOKING_ID = 'SET_BOOKING_ID';

export const updateForm = (field, value) => ({
  type: UPDATE_FORM,
  payload: { field, value },
});

export const resetForm = () => ({
  type: RESET_FORM,
});

export const setBookingID = (bookingID) => ({
  type: SET_BOOKING_ID,
  payload: bookingID,
});