/**
 * ************************************
 *
 * @module  store.js
 * @author
 * @date
 * @description Redux 'single source of truth'
 *
 * ************************************
 */

// legacy redux dependencies
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';

// rtk dependencies
import { configureStore } from '@reduxjs/toolkit';
import marketsReducer from './reducers/marketsReducer';

// modern redux toolkit `configureStore()` -- https://redux-toolkit.js.org/api/configureStore
const store = configureStore({
  reducer: {
    markets: marketsReducer,
    // if we had other reducers, they would go here
  },
});

// legacy redux: `createStore()` -- https://redux.js.org/api/createstore
// we are adding composeWithDevTools here to get easy access to the Redux dev tools
// const store = createStore(reducers, composeWithDevTools());

export default store;
