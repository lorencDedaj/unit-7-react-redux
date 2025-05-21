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

const MarketsDisplay = (props) => {
  return (
    <div className='displayBox'>
      <h4>Markets</h4>
      <Market />
    </div>
  );
};

export default MarketsDisplay;
