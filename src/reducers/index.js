import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import exampleReducer from '../ducks/example';
import errorsReducer from '../ducks/errors';


export default combineReducers({
  form: formReducer,
  example: exampleReducer,
  errors: errorsReducer,

});