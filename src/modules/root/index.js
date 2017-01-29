if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: modules/root/index.js'); // eslint-disable-line no-console
}

import React, {Component} from 'react';
import App from 'app';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from 'app/reducers'

const store = createStore(rootReducer);
store.subscribe(()=>{
    console.log('store change', store.getState())
})


import style from './style';
class Root extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className={`root ${style['module-style']}`}>
                <Provider store={store}>
                    <App />
                </Provider>
            </div>
        )
    }
}

export default Root;



