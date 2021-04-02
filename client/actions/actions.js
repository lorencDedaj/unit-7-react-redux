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
import * as types from '../constants/actionTypes';

export const addCardActionCreator = marketId => ({
  type: types.ADD_CARD,
  payload: marketId,
});

// add more action creators