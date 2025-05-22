/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from "../constants/actionTypes";

export const addCardActionCreator = (marketId) => ({
  type: types.ADD_CARD,
  payload: marketId,
});

export const addMarketActionCreator = (location) => ({
  type: types.ADD_MARKET,
  payload: location,
});
// add more action creators
