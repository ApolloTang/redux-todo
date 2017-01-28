import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

import FilteredTodos from 'app/containers/filtered-todos';

const store = createStore(rootReducer);

const App = () => (
    <Provider store={store}>
        <div className="layout" >
            <FilteredTodos />
        </div>
    </Provider>
);

export default App;
