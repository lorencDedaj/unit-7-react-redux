/**
 * ************************************
 *
 * @module  TotalsDisplay
 * @author
 * @date
 * @description presentation component that displays the total cards and total markets
 *
 * ************************************
 */

import React from "react";
import { useSelector } from "react-redux";
// import marketsReducer from "../reducers/marketsReducer";

const TotalsDisplay = (props) => {
  // console.log("props", props.state);

  const totalMarkets = useSelector((state) => state.markets.totalMarkets);
  const totalCards = useSelector((state) => state.markets.totalCards);

  // console.log(`state`, totalCards);

  return (
    <div className='innerbox' id='totals'>
      <label htmlFor='totalCards'>Total Cards: </label>
      <span id='totalCards'>{totalCards}</span>
      <p>
        <label htmlFor='totalMarkets'>Total Markets: </label>
        <span id='totalMarkets'>{totalMarkets}</span>
      </p>
    </div>
  );
};

export default TotalsDisplay;
