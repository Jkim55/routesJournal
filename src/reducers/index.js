import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import Posts from './posts'

const rootReducer = combineReducers({
  posts: Posts,
  form: formReducer
});

export default rootReducer;
