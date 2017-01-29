if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: src/main.js'); // eslint-disable-line no-console
}

import React from 'react';
import {render} from 'react-dom';

// import {
//     doHeavyLifting
// } from './util/helper.js';
// console.log('doHeavyLifting(): ', doHeavyLifting()); // eslint-disable-line no-console
//
// import thirdPartyCode from './vendor/third-party-code.js';
// console.log('thirdPartyCode.name: ', thirdPartyCode.name); // eslint-disable-line no-console

import style from 'main.less';
import fonts from 'common/fonts';

import App from 'app';
const appContainer = document.getElementById("app");
render( <App />, appContainer);
