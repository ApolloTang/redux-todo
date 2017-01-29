if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: app/index.js'); // eslint-disable-line no-console
}

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

import FilteredTodos from 'app/containers/filtered-todos';

const store = createStore(rootReducer);

import style from './style';
const App = () => (
    <Provider store={store}>
        <div className={`app ${style['module-style']}`}>
            <FilteredTodos />
        </div>
    </Provider>
);

export default App;
