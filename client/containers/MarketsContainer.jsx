/**
 * ************************************
 *
 * @module  MarketsContainer
 * @author
 * @date
 * @description stateful component that renders MarketCreator and MarketsDisplay
 *
 * ************************************
 */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import actions from action creators file
import * as actions from "../actions/actions.js";
// import child components...
import MarketCreator from "../components/MarketCreator.jsx";
import MarketsDisplay from "../components/MarketsDisplay.jsx";
import TotalsDisplay from "../components/TotalsDisplay.jsx";

// import actions from "../actions/actions.js";

const MarketsContainer = () => {
  // console.log(`MarketContainer`, prop);
  // how can we access needed pieces of state from the redux store?

  // returns a function that can dispatch actio`n creators
  const dispatch = useDispatch();

  // const markets = useSelector((state) => state.markets);
  // console.log(`markets`, markets);

  const totalCards = useSelector((state) => state.markets.totalCards);
  console.log("totalCards", totalCards);

  const handleMarket = (location) => {
    console.log("hi");
    dispatch(actions.addMarketActionCreator(location));
  };
  // In your component or action:

  return (
    <div className='innerbox'>
      <MarketCreator handleMarket={handleMarket} />
      {/* <TotalsDisplay totalCards={totalCards} /> */}
      <MarketsDisplay />
    </div>
  );
};

export default MarketsContainer;
