/**
 * ************************************
 *
 * @module  MarketsDisplay
 * @author
 * @date
 * @description presentation component that renders n Market components
 *
 * ************************************
 */

import React from "react";
import Market from "./Market.jsx";
//grab state from state object on reducer function from reducer file
import { useSelector } from "react-redux";

const MarketsDisplay = (props) => {
  const marketList = useSelector((state) => state.markets.marketList);
  // console.log(`MarketsDisplay props:`, props);
  //iterate thru market list and populate values into the card
  return (
    <div className='displayBox'>
      <h4>Markets</h4>
      {marketList.map((market) => (
        <div key={market.marketId} className='marketBox'>
          <h3>Market ID: {market.marketId}</h3>
          <h3>Location: {market.location}</h3>
          <h3>Cards: {market.cards}</h3>
          <button>Add Card</button>
          <button>Delete Card</button>
        </div>
      ))}
      <Market />
    </div>
  );
};

export default MarketsDisplay;
