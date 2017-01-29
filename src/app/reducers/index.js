import {combineReducers} from 'redux';

import todoListControl from  './todo-list-control';
import todos from  './todos';

const rootReducer = combineReducers({
    todos,
    todoListControl
});

export default rootReducer;
