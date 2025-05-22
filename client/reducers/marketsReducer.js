/**
 * ************************************
 *
 * @module  marketsReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

import * as types from "../constants/actionTypes";

const initialState = {
  totalMarkets: 0,
  totalCards: 0,
  marketList: [],
  lastMarketId: 10000,
  newLocation: "",
};

const marketsReducer = (state = initialState, action) => {
  let marketList;

  //create a shallow copy of the state
  // const newState = { ...state };

  switch (action.type) {
    case types.ADD_MARKET: {
      // increment lastMarketId and totalMarkets counters
      state.lastMarketId += 1;
      state.totalMarkets += 1;
      state.totalCards += 1;
      // const lastMarketId = state.lastMarketId + 1;
      // const totalMarkets = state.totalMarkets + 1;
      // const totalCards = state.totalCards + 1;

      // create the new market object from provided data
      const newMarket = {
        // what goes in here?
        marketId: state.lastMarketId,
        location: action.payload,
        cards: [],
      };

      // create updated market list
      // push the new market onto a copy of the market list

      marketList = state.marketList.slice();
      marketList.push(newMarket);

      // marketList = [...state.marketList, newMarket];

      // return updated state
      return {
        ...state,
        marketList,
        lastMarketId,
        totalMarkets,
        totalCards,
        newLocation: "",
      };
    }
    case types.SET_NEW_LOCATION:

    case types.ADD_CARD:

    case types.DELETE_CARD:

    default: {
      return state;
    }
  }
};

export default marketsReducer;
