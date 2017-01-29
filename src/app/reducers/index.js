import {combineReducers} from 'redux';

import visibilitySetting from  './visibilitySetting';
import todos from  './todos';

const rootReducer = combineReducers({
    visibilitySetting,
    todos
});

export default rootReducer;
