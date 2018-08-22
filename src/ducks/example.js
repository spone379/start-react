export const SOME_ACTION = 'SOME_ACTION';


export const someAction = (action) => dispatch => {
  dispatch({
    type: SOME_ACTION,
    payload: action
  })
}


const initialState = {

}

export default (state = initialState, action) => {
  switch (action.type) {
    case SOME_ACTION: {
      return {
        ...action.payload
      }
    }
    default:
      return state;
  }
}