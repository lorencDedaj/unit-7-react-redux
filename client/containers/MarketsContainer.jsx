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
import * as actions from "../actions/actions";
// import child components...
import MarketCreator from "../components/MarketCreator.jsx";
import MarketsDisplay from "../components/MarketsDisplay.jsx";

const MarketsContainer = () => {
  // how can we access needed pieces of state from the redux store?

  // returns a function that can dispatch action creators
  const dispatch = useDispatch();

  return (
    <div className='innerbox'>
      <MarketCreator />
      <MarketsDisplay />
    </div>
  );
};

export default MarketsContainer;
