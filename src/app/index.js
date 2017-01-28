import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer);

const App = () => (
   <div>
        <Provider store={store}>
            <p>x</p>
        </Provider>
    </div>
);

export default App;
