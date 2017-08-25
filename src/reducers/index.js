import { combineReducers } from 'redux';
import BooklistReducer from './reducer_booklist';
import ActiveBookReducer from './reducer_activeBook';

const rootReducer = combineReducers({
    booklist : BooklistReducer,
    activeBook : ActiveBookReducer
});

export default rootReducer;