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

import React from 'react';
import { useSelector } from 'react-redux';
import marketsReducer from '../reducers/marketsReducer';

const TotalsDisplay = (props) => (
  // console.log(props.state.totalCards)
  // const marketList = useSelector(state => state.markets.marketList)
  // const totalCards = useSelector((state) => state.markets.totalCards);

  <div className="innerbox" id="totals">
    <label htmlFor="totalCards">Total Cards:</label>
    <span id="totalCards">{props.cards}</span>
    <p>
      <label htmlFor="totalMarkets">Total Markets:</label>
      <span id="totalMarkets">{props.totalMarkets}</span>
    </p>
  </div>
);

export default TotalsDisplay;