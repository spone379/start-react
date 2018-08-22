export const GET_ERRORS = 'GET_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';


export const deleteServerErrors = () => dispatch => {
  dispatch({
    type: CLEAR_ERRORS,
    payload: null
  });
}

export default (state = {}, action) => {
  switch (action.type) {
    case GET_ERRORS: {
      return {
        ...action.payload
      }
    }
    case CLEAR_ERRORS: {
      return {}
    }
    default:
      return state;
  }
}