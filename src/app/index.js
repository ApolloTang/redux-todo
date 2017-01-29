if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: app/index.js'); // eslint-disable-line no-console
}

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

import FilteredTodos from 'app/containers/filtered-todos';
import AddTodo from 'app/containers/add-todo';

const store = createStore(rootReducer);
store.subscribe((...args)=>{
    console.log('store change', store)
    console.log('store change', store.getState())
})

import style from './style';
const App = () => (
    <Provider store={store}>
        <div className={`app ${style['module-style']}`}>
            <div className="layout">
                <div className="add-todo-container">
                    <AddTodo />
                </div>
                <div className="todos-list-container">
                    <FilteredTodos />
                </div>
                <div className="filter-ctr-container">
                    filter control
                </div>
            </div>
        </div>
    </Provider>
);

export default App;
